const twitterParams = {
    consumer_key: process.env.CONSUMER_KEY
    consumer_secret: process.env.CONSUMER_SECRET
    access_token_key: process.env.TOKEN_KEY
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const mongoParams = {
  url: process.env.URL,
  dbName: process.env.DB_NAME,
  collectionName: process.env.COLLECTION_NAME
};

module.exports = {
    twitterParams,
    mongoParams
}