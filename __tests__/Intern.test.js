const Intern = require("../lib/Intern");

test("Set school via constructor", () => {
  const testValue = "JHU";
  const e = new Intern("Wilson", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Wilson", 1, "test@test.com", "JHU");
  expect(e.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
  const testValue = "JHU";
  const e = new Intern("Wilson", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});