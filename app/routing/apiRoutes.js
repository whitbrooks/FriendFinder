// ===============================================================================
// LOAD DATA
// Linking routes to friends data source
// ===============================================================================

var friendsArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

  module.exports = function(app){
    //a GET route that displays JSON of all possible friends
    app.get('/api/friends', function(req,res){
      res.json(friendsArray);
      console.log(friendsArray);
    });
  
    app.post('/api/friends', function(req,res){
      //grabs the new friend's scores to compare with friends in friendsArray
      var newFriendScores = req.body.scores;
      var scoresDifArray = [];
      var bestMatch = 0;
  
      //runs through all friends in friendsArray
      for(var i=0; i<friendsArray.length; i++){
        var scoresDif = 0;
        //runs through new friend scores to compare to existing friends
        for(var j=0; j<newFriendScores.length; j++){
          scoresDif += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
        }
  
        //push score differences into scoresDifArray
        scoresDifArray.push(scoresDif);
      }
  
      //loop through scoresDifArray to find best friend match
      for(var i=0; i<scoresDifArray.length; i++){
        if(scoresDifArray[i] <= scoresDifArray[bestMatch]){
          bestMatch = i;
        }
      }
  
      //return bestMatch data
      var newFriend = friendsArray[bestMatch];
      res.json(newFriend);
  
      //pushes new submission into the friendsList array
      friendList.push(req.body);
    });
  };

};
