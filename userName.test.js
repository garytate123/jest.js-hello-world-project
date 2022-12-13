const userName = require('./userName');

test('Return users full name as a string', () => {
    expect(userName("First", "Last")).toBe("First Last 42");
});