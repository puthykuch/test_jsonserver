var faker = require('faker');
var _ = require('lodash');

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter);

db.defaults({ users: [], companies: [], movies: [] }).write();

_.times(10, function(n) {
  db.get('users')
    .push({
      id: n + 1,
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      avatar: faker.internet.avatar(),
      age: faker.random.number(60),
      companyId: faker.random.number(5)
    })
    .write();
});

_.times(5, function(n) {
  db.get('companies')
    .push({
      id: n + 1,
      name: faker.company.companyName(),
      desciptions: faker.company.catchPhraseDescriptor()
    })
    .write();
});

_.times(20, function(n) {
  db.get('movies')
    .push({
      id: n + 1,
      name: faker.lorem.words(),
      date: faker.date.future()
    })
    .write();
});
