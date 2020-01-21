const cheerio = require("cheerio");
const axios = require("axios");
const getUrls = require("./url-scraper");

const siteUrl = "https://www.cnn.com";

const fetchData = async(siteUrl1) => {
    const result = await axios.get(siteUrl1);
    return cheerio.load(result.data);
}

const getArticles = async() => {
    const articles = [];
    let urls = await getUrls();
    var title, author, body;
    console.log(urls.length);
    for(let i = 0; i<urls.length; i++){
        var siteString = siteUrl + urls[i];
        if(!urls[i].includes("http")){
            console.log(siteString);
            const $ = await fetchData(siteString);
            $('.metadata__byline__author').each((index, elem)=>{
                author = $(elem).text();
            });

            $('.pg-headline').each((index, elem)=>{
                title = $(elem).text();
            });

            articles.push({
                url: siteUrl + urls[i],
                author: author,
                title: title
            })
        }
        
    }
    return articles;
}



module.exports = getArticles;