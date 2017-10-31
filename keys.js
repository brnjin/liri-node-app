var Twitter = require("twitter");

var twitterKeys = new Twitter ({
  consumer_key: '4TB6h3ypJsGqj61Dly6EF4aR1',
  consumer_secret: 'n6x2I0TMI8lID5qPntUwHyZWmTTat8mU4AqJZLRquBWVDqvOYB',
  access_token_key: '922561725228027905-6YUIxEofBMp7jcRE8dQLJbPwJVY72uh',
  access_token_secret: 'tSxXxJ9JjUquCvajU0P2fFV6iAHpZB9alJqnnKk2D8FI5',
});

module.exports.twitterKeys = twitterKeys;