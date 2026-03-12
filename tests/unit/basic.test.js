describe("createTask", () => {
  test("should create a task with todo status", () => {
    const task = { title: "Test task", status: "todo" };

    expect(task.title).toBe("Test task");
    expect(task.status).toBe("todo");
  });
});