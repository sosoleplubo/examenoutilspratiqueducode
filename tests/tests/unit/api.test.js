const request = require("supertest");
const app = require("../../backend/server");

let token = "";

beforeAll(async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({
      email: "admin@test.com",
      password: "password"
    });

  token = res.body.token;
});

describe("Tests API gestionnaire de tâches", () => {
  test("should login successfully with valid credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "admin@test.com",
        password: "password"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.user.email).toBe("admin@test.com");
  });

  test("should return 401 when accessing tasks without token", async () => {
    const res = await request(app).get("/api/tasks");

    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe("Token d'accès requis");
  });

  test("should return all tasks with valid token", async () => {
    const res = await request(app)
      .get("/api/tasks")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("should create a new task with valid token", async () => {
    const newTask = {
      title: "Nouvelle tâche test",
      description: "Description de test",
      priority: "high"
    };

    const res = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send(newTask);

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Nouvelle tâche test");
    expect(res.body.status).toBe("todo");
    expect(res.body.priority).toBe("high");
  });

  test("should return 400 when creating task without title", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({
        description: "Tâche sans titre"
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Le titre est requis");
  });
});