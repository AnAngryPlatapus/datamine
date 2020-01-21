const getUrls = require("../../utils/url-scraper");
const fetcher = require("../../utils/fetcher");
const JSONutil = require("../../utils/JSONutil");

const siteUrl = "https://www.cnn.com";

const getArticles = async(site) => {
    let config = await JSONutil(site);
    console.log("Pulled " + site + " configuration data from repository");
    let urls = await getUrls(config.url, config.siteExtensions, config.excludes, config.baseUrl);
    console.log("Collected articles to be scraped");
    let articles = await fetcher(urls, config.author, config.title, config.baseUrl);
    console.log(articles);
    console.log("Scraped articles for title and author")
    return articles;
}


module.exports = getArticles;