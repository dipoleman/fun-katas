// Please do not change the name of this function
function getTweetData (tweet) {

  
  const tweetData = { 
    tags: [], 
    mentions: [], 
    tagCount: 0, 
    mentionCount: 0, 
    length: tweet.length 
  }
  // Mentions >>>>>>>>>
  const regMentions = /@[a-zA-Z0-9]*/g;
  const mentions = tweet.match(regMentions)
  const uniqueMentions = [...new Set(mentions)]
 
  if (uniqueMentions!== null){
    tweetData.mentions = uniqueMentions;
    tweetData.mentionCount = uniqueMentions.length;
  }
  // Tags >>>>>>>>>>>
  const regTags = /#[a-zA-Z0-9]*/g;
  const tags = tweet.match(regTags)
  const uniqueTags = [... new Set(tags)]
  
  if (uniqueTags!==null){
    tweetData.tags = uniqueTags;
    tweetData.tagCount = uniqueTags.length
  }


  return tweetData
};

module.exports = getTweetData;
