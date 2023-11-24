db.createCollection('rpg');

db.createUser({
  user: 'user',
  pwd: 'pass1234',
  roles: [
    {
      role: 'readWrite',
      db: 'rpg',
    },
  ],
});
