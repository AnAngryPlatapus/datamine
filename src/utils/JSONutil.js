var fs = require("fs");


const getConfig = async(siteName) => {
    var result = [];
    var jObj = fs.readFileSync("./configs/config.json");
    var jContent = JSON.parse(jObj);

    return jContent[siteName];
}

module.exports = getConfig;


