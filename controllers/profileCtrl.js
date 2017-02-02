var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  profile: function(req, res, next){
    var profileObj ={}
    profileObj.friends = []
    for(var i = 0; i < req.session.currentUser.friends.length; i++){
      for(var f = 0; f < profiles.length; f++){
        if(req.session.currentUser.friends[i] == profiles[f].name ){
          profileObj.friends.push(profiles[f])
        }
      }
    }
    profileObj.currentUser = req.session.currentUser.name
    console.log(profileObj)
    res.status(200).json(profileObj)
  }
}
