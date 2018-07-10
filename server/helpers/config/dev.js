const twitterParams = {
  consumer_key: 'S5cmsQz6a3p7CuTb3PvnMHeOM',
  consumer_secret: '2QTD63kNifcJYqoLqZcskwRGBuZ9niYgasE3K2GNIyyafMCLuS',
  access_token_key: '958191744683782144-tlAS6DJdkaRXSES1UfOYLPulKPFVtEK',
  access_token_secret: 'iAN4m65j9xCSZ7bnKPu27ksn4sRv5u6SFbghIl76FxFLV'
}

const mongoParams = {
  url: 'mongodb://localhost:27017/TwitterAPI',
  dbName: "TwitterAPI",
  collectionName: 'TwitterData'
}

module.exports = {
    twitterParams,
    mongoParams
}