module.exports = function() {
  var faker = require('faker');
  var _ = require('lodash');

  return {
    users: _.times(10, function(n) {
      return {
        id: n,
        firstName: faker.name.findName(),
        lastName: faker.name.lastName(),
        avatar: faker.internet.avatar(),
        age: faker.random.number(60),
        companyId: faker.random.number(5)
      };
    }),
    companies: _.times(5, function(n) {
      return {
        id: n,
        name: faker.company.companyName(),
        desciptions: faker.company.catchPhraseDescriptor()
      };
    })
  };
};
