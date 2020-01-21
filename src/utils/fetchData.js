const cheerio = require("cheerio");
const axios = require("axios");

const fetchData = async(siteUrl) => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
}

module.exports = fetchData;