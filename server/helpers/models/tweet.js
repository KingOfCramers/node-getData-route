const { mongoose } = require("../../db/mongoose");
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    name: String,
    followers: Number,
    time: Date,
    link: String,
    text: String
});

const Tweet = mongoose.model("tweet", TweetSchema);

module.exports = {
  Tweet
}