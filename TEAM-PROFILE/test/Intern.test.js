const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "UMN";
    const e = new Intern("Karen", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    const e = new Intern("Karen", 1, "test@test.com", "UMN");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UMN";
    const e = new Intern("Karen", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});