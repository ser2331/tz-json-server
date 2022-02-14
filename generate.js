module.exports = function(){
    const { faker } = require('@faker-js/faker');
    const _ = require("lodash");
    return {
        people: _.times(50, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
                status: faker.git.commitMessage(),
            }
        }),

        user: {
            login: 'test@gmail.com',
            password: '123456',
        }
    }
}