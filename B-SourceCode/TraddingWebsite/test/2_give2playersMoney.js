const request = require('supertest');

const app = require('../TraddingWebsite/server');

describe("register 2 players", function () {
    it("should give WildSaoFeng and Fish enough money to play", function (done) {
        request(app).post("/users/add/b")
            .send({
                "id":"WildSaoFeng",
                "delta":"10"
            })
            .expect(200, function () {
                request(app).post("/users/add/a")
                    .send({
                        "id":"Fish",
                        "delta":"10"
                    })
                    .expect(200, done);
            });
    });
});

