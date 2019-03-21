var importedFriends = require('../data/friends.js')

module.exports = function(app) {
    app.get('/api/friends', function(req,res){
        res.json(friends)
    })
    app.post('/api/friends', function(req,res){
        var bestFriend = importedFriends.friends[importedFriends.findMatch(req.body, importedFriends.friends).index]
        importedFriends.friends.push(req.body)
        res.json(bestFriend)
    })
  
  };