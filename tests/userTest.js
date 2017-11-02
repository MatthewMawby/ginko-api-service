const chai = require("chai")
const expect = chai.expect
const assert = chai.assert

const ginko = require("../index")

describe("User Functions", () => {

  it("should retrieve all user objects", (done) => {
    ginko.getUser().then((users) => {
      expect(users).to.not.be.null
      expect(users).to.be.a('array')
      expect(users[0]).to.have.property("email")
      done()
    }).catch(done)
  })

})
