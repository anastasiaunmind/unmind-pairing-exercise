const request = require("supertest");
const app = require("./server");
const DAO = require("./libs/dao");
let spy;

beforeEach(() => {
    DAO.reset();

    const mockDates = [
        new Date(2021, 7, 15),
        new Date(2021, 7, 16),
    ];
    
    spy = jest
        .spyOn(global, "Date")
        .mockImplementation(() => mockDates.shift());
});

afterEach(() => {
    spy.mockRestore();
});

describe("POST /check-in", () => {
    it("should record data for check-in", async () => {
        const res = await request(app)
            .post("/check-in")
            .send({
                score: 7,
                feelings: ["anxious", "excited"],
                notes: "I am happy",
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            score: 7,
            feelings: ["anxious", "excited"],
            notes: "I am happy",
            created: "2021-08-14T23:00:00.000Z",
        });
    });

    it("should return 400 error when score is not valid", async () => {
        const res = await request(app)
            .post("/check-in")
            .send({
                score: 10,
                feelings: ["anxious", "excited"],
                notes: "I am happy",
            });

        expect(res.statusCode).toEqual(400);
    });

    it("should return 400 error when feelings array is missing", async () => {
        const res = await request(app)
            .post("/check-in")
            .send({
                score: 5,
            });

        expect(res.statusCode).toEqual(400);
    });

    it("should return 400 error when notes value is not a string", async () => {
        const res = await request(app)
            .post("/check-in")
            .send({
                score: 5,
                feelings: [],
                notes: [],
            });

        expect(res.statusCode).toEqual(400);
    });
});


describe("GET /insights", () => {
    it("should return empty array", async () => {
        const res = await request(app)
            .get("/insights");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });

    it("should return insights sorted DESC by date", async () => {
        await request(app)
            .post("/check-in")
            .send({
                score: 7,
                feelings: ["anxious", "excited"],
                notes: "I am happy",
            });

        await request(app)
            .post("/check-in")
            .send({
                score: 5,
                feelings: ["joy"],
                notes: "I am very happy",
            });
        const res = await request(app)
            .get("/insights");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([
            {
                score: 5,
                feelings: ["joy"],
                notes: "I am very happy",
                created: "2021-08-15T23:00:00.000Z",
            },
            {
                score: 7,
                feelings: ["anxious", "excited"],
                notes: "I am happy",
                created: "2021-08-14T23:00:00.000Z",
            },
        ]);
    });
});