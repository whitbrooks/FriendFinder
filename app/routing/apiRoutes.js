// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var path = require("path");

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

//  A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    // Capture the user input object
    var userInput = req.body;
        console.log('userInput = ' + JSON.stringify(userInput));

    var userResponses = userInput.scores;
        console.log('userResponses = ' + userResponses);
    
    
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
};
