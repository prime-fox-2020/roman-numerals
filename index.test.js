const main = require("./index.js");

test("4 -> IV ", () => {
  expect(main(4)).toBe("IV");
});

test("49 -> XLIX ", () => {
  expect(main(49)).toBe("XLIX");
});

test("774 -> DCCLXXIV ", () => {
  expect(main(774)).toBe("DCCLXXIV");
});

test("1453 -> MCDLIII ", () => {
  expect(main(1453)).toBe("MCDLIII");
});

test("1646 -> MDCXLVI ", () => {
  expect(main(1646)).toBe("MDCXLVI");
});
