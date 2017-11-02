const chai = require("chai")
const expect = chai.expect
const assert = chai.assert

const ginko = require("../index")

describe("Tag Functions", () => {

  it("should retrieve all tag objects", (done) => {
    ginko.getTag().then((tags) => {
      expect(tags).to.not.be.null
      expect(tags).to.be.a('array')
      expect(tags[0]).to.have.property("person")
      expect(tags[0]).to.have.property("picture")
      done()
    }).catch(done)
  })

})
