const fetchData = require("./fetchData");

const getComponent = async(urls, hAttrAuthor, hAttrTitle, baseUrl) => {
    let component = []; 
    for(let i = 0; i<urls.length; i++){
        for(let j = 0; j<urls[i].url.length; j++){
            var siteString = baseUrl + urls[i].url[j];
            let articleData = [];
            console.log(siteString);
            const $ = await fetchData(siteString);
            $(`.${hAttrAuthor}`).each((index, elem)=>{
                articleData.author = $(elem).text();
            });
            $(`.${hAttrTitle}`).each((index, elem)=>{
                articleData.title = $(elem).text().replace("/", "");
                
            });
            articleData.url = siteString;
            articleData.tag = urls[i].extension.replace("/", "");
            component.push(articleData);
        }
    }
    return component;
}



module.exports = getComponent;