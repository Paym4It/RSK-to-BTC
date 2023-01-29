const chld = require('child_process');
const LOG = console.log;
try {
    const process0 = chld.execSync("pip install -r requirements.txt");
    LOG('\nPython packages installation outcome: \n' + process0.toString());
} catch (error1) {
    LOG('\nerror installing python packages: ' + error1);
}
try {
    const process1 = chld.execSync("npm i");
    LOG('\Node modules installation outcome: \n' + process1.toString());
} catch (error2) {
    LOG('\nerror installing node modules: ' + error2);
}