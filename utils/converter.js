const fs = require('fs');
const getArticles = require('../scraper');
const getUrls = require('../url-scraper');
(async () => {
    let results = await getArticles()
    let jsonString = JSON.stringify(results);
    fs.writeFileSync('./output.json', jsonString, 'utf-8');
})()