const Twitter = require("twitter");
const keys = require("./config/keys");
const twitterClient = new Twitter(keys.twitterParams);
const { Tweet } = require("./models/tweet");
const trackers = require("./config/trackers");

const twitterHelper = (tweet_trackers) => {
    //const filtered = tweet_trackers.map((tweet) => tweet.account);
    // eventually pass filtered into stream function
  twitterClient.stream("statuses/filter", trackers.param, function(stream){
     stream.on("data", function(data) {
          const tweet_obj = {};
          tweet_obj.name = data.user.screen_name;
          tweet_obj.followers = data.user.followers_count;
          tweet_obj.time = data.created_at;
          tweet_obj.text = data.text;
          tweet_obj.id = data.id;
          var tweet = new Tweet(tweet_obj);
          tweet.save()
              .then(() => {
                 console.log(`Tweet saved from: ${tweet.name}`);
              })
              .catch((e) => console.log(e));
     });
     stream.on("error", err => {
         throw err;
     });
  });

  return Promise.resolve();
};

const courtCaseHelper = (court_case_trackers) => {
  return Promise.resolve();
}

const legislationHelper = (legislation_trackers) => {
  return Promise.resolve();
}

module.exports = { twitterHelper, courtCaseHelper, legislationHelper };