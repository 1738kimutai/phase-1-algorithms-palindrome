
const chai = require("chai");
global.expect = chai.expect;
const isPalindrome = require("../index");
@@ -18,4 +20,4 @@ describe("isPalindrome", () => {
  it("returns false for 'ab'", () => {
    expect(isPalindrome("ab")).to.be.false;
  });
});
;