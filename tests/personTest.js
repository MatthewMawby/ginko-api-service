const chai = require("chai")
const expect = chai.expect
const assert = chai.assert

const ginko = require("../index")

describe("Person Functions", () => {

  it("should retrieve all person objects", (done) => {
    ginko.getPerson().then((people) => {
      expect(people).to.not.be.null
      expect(people).to.be.a('array')
      expect(people[0]).to.have.property("id")
      expect(people[0]).to.have.property("first_name")
      expect(people[0]).to.have.property("last_name")
      done()
    }).catch(done)
  })

})
