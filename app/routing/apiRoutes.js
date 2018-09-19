// ===============================================================================
// DEPENDENCIES
// ===============================================================================

var path = require("path");
var friendsArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

  // export API routes
  module.exports = function(app){
    
    //a GET route that displays JSON of all possible friends
    app.get('/api/friends', function(req,res){
      res.json(friendsArray);
      console.log(friendsArray);
    });
  
  // add new friend
    app.post('/api/friends', function(req,res){
      console.log(req.body);
      var newFriend = req.body
      var newFriendScores = newFriend.scores;
      var totalDif = 100;
      var matchName = "";
      var matchImage = "";
 
  
      //runs through all friends in friendsArray
      for(var i=0; i<friendsArray.length; i++){
        var scoresDif = 0;
        //runs through new friend scores to compare to existing friends
        for(var j=0; j<newFriendScores.length; j++){
          scoresDif += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriendScores[j])));
        }

        //if score difference is lowest, record match
        if (scoresDif < totalDif) {
          // console.log('Closest match found = ' + scoresDif);
          // console.log('Friend name = ' + friendsArray[i].name);
          // console.log('Friend image = ' + friendsArray[i].photo);
          
          totalDif = scoresDif;
          matchName = friendsArray[i].name;
          matchImage = friendsArray[i].photo;
        }
  
      }
    

      //pushes new submission into the friendsList array
      friendsArray.push(newFriend);
  
    // send response
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
  
    }); 
  };