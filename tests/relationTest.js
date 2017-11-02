const chai = require("chai")
const expect = chai.expect
const assert = chai.assert

const ginko = require("../index")

describe("Relation Functions", () => {

  it("should retrieve all relation objects", (done) => {
    ginko.getRelation().then((relations) => {
      expect(relations).to.not.be.null
      expect(relations).to.be.a('array')
      expect(relations[0]).to.have.property("classification")
      expect(relations[0]).to.have.property("related_to")
      expect(relations[0]).to.have.property("related_from")
      done()
    }).catch(done)
  })

})
