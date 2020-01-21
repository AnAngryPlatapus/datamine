const fetchData = require("./fetchData");

const getUrls = async(hAttr, extensions, excludes, baseUrl) => {
    const urls = [];
    for(var i = 0; i<extensions.length; i++){
        const url = [];
        var stringVals = [];
        var extensionUrl = baseUrl + extensions[i];
        console.log(extensionUrl);
        const $ = await fetchData(extensionUrl);
        $(`.${hAttr}`).each((index, elem)=>{
            stringVals.push($(elem).attr('href'));
        });
        for(stringVal in stringVals){
            if(!excludes.some(exclude => stringVals[stringVal].includes(exclude))){
                url.push(stringVals[stringVal]);
            }
        }
        urls.push({
            extension: extensions[i],
            url: url
        });
    }
    console.log(urls);
    return urls;
};

module.exports = getUrls;