var users = [
  {
    name: 'Ryan Rasmussen',
    password: 'password',
    friends: ['Lindsay Mayer', 'Terri Ruff', 'Preston McNeil']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res, next){
    for(var i = 0; i < users.length; i++){
      if(users[i].name == req.body.user.name && users[i].password == req.body.user.password){
        req.session.currentUser = users[i]
        res.status(200).send({userFound: true})
        return ;

      }
    } res.send({userFound: false})
  }
}
