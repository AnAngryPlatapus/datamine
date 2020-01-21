const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://www.cnn.com/world"
let siteName = "";

const urls = [];

const fetchData = async(url) => {
    const result = await axios.get(url);
    return cheerio.load(result.data);
}

const getUrls = async() => {
    const $ = await fetchData(siteUrl);

    $('.cd__headline a[href]').each((index, elem)=>{
        urls.push($(elem).attr('href'));
    });

    return urls
};

module.exports = getUrls;