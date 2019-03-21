var findMatch = function(newFriend, oldFriends){
    var currentBestFriend = {
        index: null,
        difference: 10000
    }
    for(var i=0;i<oldFriends.length;i++){
        var currentDifference =0
        for(var j=0;j<10;j++){
            currentDifference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriend.scores[j]))
        }
        if(parseInt(currentDifference) < parseInt(currentBestFriend.difference)){
            currentBestFriend.difference = currentDifference;
            currentBestFriend.index = i;
            currentDifference = 0;
        } else {
            currentDifference =0;
        }
    }
    return currentBestFriend;
}

var friends = [
    {
    name: "Barack Obama",
    photo: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg",
    scores: [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
    },
    {
    name: "Charlie Chaplin",
    photo: "https://m.media-amazon.com/images/M/MV5BNDcwMDc0ODAzOF5BMl5BanBnXkFtZTgwNTY2OTI1MDE@._V1_.jpg",
    scores: [
    "4",
    "2",
    "5",
    "1",
    "3",
    "2",
    "2",
    "1",
    "3",
    "2"
    ]
    },
    {
    name: "Madonna",
    photo: "https://media.wmagazine.com/photos/5b60e87d8f99613bfbdf2e44/4:3/w_1536/madonna-closeup.jpg",
    scores: [
    "5",
    "2",
    "2",
    "2",
    "4",
    "1",
    "3",
    "2",
    "5",
    "5"
    ]
    },
    {
    name: "Nelson Mandela",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela-2008_%28edit%29.jpg/220px-Nelson_Mandela-2008_%28edit%29.jpg",
    scores: [
    "3",
    "3",
    "4",
    "2",
    "2",
    "1",
    "3",
    "2",
    "2",
    "3"
    ]
    },
    {
    name: "Your local Ralph's Cashier",
    photo: "https://www.ihadla.org/wp-content/uploads/Tom-thumbs-up-at-camera-1200.jpg",
    scores: [
    "4",
    "3",
    "4",
    "1",
    "5",
    "2",
    "5",
    "3",
    "1",
    "4"
    ]
    },
    {
    name: "The Mailman",
    photo: "http://www.trailjournals.com/images/about/2014mailman_16134.jpg",
    scores: [
    "4",
    "4",
    "2",
    "3",
    "2",
    "2",
    "3",
    "2",
    "4",
    "5"
    ]
    },
    {
    name: "Lucifer ",
    photo: "https://media.beliefnet.com/~/media/photos-with-attribution/faith/devil/devil-1_credit-shutterstock.jpg?as=1&w=400",
    scores: [
    "5",
    "1",
    "1",
    "1",
    "5",
    "5",
    "1",
    "1",
    "1",
    "1"
    ]
    },
    {
    name: "That jerk who cut you off last week",
    photo: "https://d24xizqmfkqp5b.cloudfront.net/articles/images/000/001/203/large/102_road_rage.jpg?2016",
    scores: [
    "1",
    "3",
    "3",
    "4",
    "2",
    "3",
    "2",
    "5",
    "3",
    "2"
    ]
    },
    {
    name: "The local crossing guard",
    photo: "http://kmherald.com/clients/kmherald/3-15-2017-1-28-30-PM-6886760.png",
    scores: [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1"
    ]
    },
    {
    name: "Freida Pinto",
    photo: "http://im.rediff.com/movies/2010/aug/23look2.jpg",
    scores: [
    "2",
    "3",
    "3",
    "2",
    "3",
    "3",
    "3",
    "3",
    "4",
    "2"
    ]
    },
    {
    name: "Kevon Looney",
    photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png&w=350&h=254",
    scores: [
    "2",
    "2",
    "3",
    "3",
    "2",
    "3",
    "2",
    "3",
    "3",
    "3"
    ]
    },
    {
    name: "Jimmy Buffet",
    photo: "https://fun1071.fm/wp-content/uploads/2018/04/jimmy-buffet.jpg",
    scores: [
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5"
    ]
    },
    {
    name: "Lou Reed",
    photo: "https://www.udiscovermusic.com/wp-content/uploads/2014/10/Lou-Reed.jpg",
    scores: [
    "1",
    "1",
    "3",
    "3",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2"
    ]
    },
    {
    name: "Bill Nye The Science Guy",
    photo: "https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2014/04/18/Production/LocalLiving/Images/DC_Bill-Nye_globe.jpg&w=1484",
    scores: [
    "5",
    "3",
    "5",
    "1",
    "5",
    "5",
    "5",
    "1",
    "1",
    "3"
    ]
    },
    {
    name: "The Squirrel from Ice Age",
    photo: "https://i.dlpng.com/static/png/34883_thumb.png",
    scores: [
    "5",
    "3",
    "5",
    "1",
    "5",
    "5",
    "5",
    "1",
    "1",
    "3"
    ]
    },
    {
    name: "MM",
    photo: "http://cimg.tvgcdn.net/i/r/2015/09/21/b6335653-f456-47b2-a55b-e2f80eebf713/thumbnail/1300x867/ab98b2214aa92b6eba098522fc79899e/150921-news-the-muppets-animal.jpg",
    scores: [
    "5",
    "3",
    "5",
    "1",
    "5",
    "5",
    "5",
    "1",
    "1",
    "3"
    ]
    },
    {
    name: "Raichu",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    scores: [
    "2",
    "3",
    "5",
    "2",
    "3",
    "3",
    "5",
    "2",
    "3",
    "3"
    ]
    },
    {
    name: "The Dragon from Sleeping Beauty",
    photo: "https://s.yimg.com/ny/api/res/1.2/2Y9Uu0cArLD.ieTLE.JRFw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjE4O2g9NDEy/http://media.zenfs.com/en_US/News/TheWrap/Maleficent_Dragon_Float_Catches_Fire-615a0ab9cf11e2430fec6443a188dabc",
    scores: [
    "2",
    "2",
    "4",
    "2",
    "3",
    "2",
    "4",
    "4",
    "3",
    "1"
    ]
    },
    {
    name: "Aladdin",
    photo: "http://energy106.ca/wp-content/uploads/2018/01/Aladdin-Bread.jpg",
    scores: [
    "2",
    "2",
    "4",
    "2",
    "3",
    "2",
    "4",
    "4",
    "3",
    "1"
    ]
    },
    {
    name: "Patrick",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png",
    scores: [
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5"
    ]
    }    
    ]

    module.exports = {
        findMatch: findMatch,
        friends: friends
    }