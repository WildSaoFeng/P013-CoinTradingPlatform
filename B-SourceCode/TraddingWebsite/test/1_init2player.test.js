const request = require('supertest');

const app = require('../TraddingWebsite/server');

describe("register 2 players", function () {
    it("should register WildSaoFeng and Fish", function (done) {
        request(app).post("/users/register")
            .send({
                "name":"Li Jiafeng",
                "email":"wildsaofeng@gmail.com",
                "username":"WildSaoFeng",
                "password":"lynch"
            })
            .expect(200, function () {
                request(app).post("/users/register")
                    .send({
                        "name":"Gong Chengyu",
                        "email":"fishfish@gmail.com",
                        "username":"Fish",
                        "password":"fish"
                    })
                    .expect(200, done);
            });
    });
});

