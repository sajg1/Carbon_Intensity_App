use mern_practice_login;
db.dropdatabase();

db.users.insert({
  first_name: "Stephen",
  last_name: "Gossip",
  email: "stephengossip@gmail.com",
  password: "123456",
  date: 1529644667834
})
