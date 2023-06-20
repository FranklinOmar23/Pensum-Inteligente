import request from "supertest";
import app from "../App";

describe("GET /ping", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/ping").send();
      expect(response.statusCode).toBe(200);
    });

})