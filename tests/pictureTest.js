const chai = require("chai")
const expect = chai.expect
const assert = chai.assert

const ginko = require("../index")

describe("Picture Functions", () => {

  it("should retrieve all pictures", (done) => {
    ginko.getPicture().then((pictures) => {
      expect(pictures).to.not.be.null
      expect(pictures).to.be.a('array')
      expect(pictures[0]).to.have.property("image_string")
      expect(pictures[0]).to.have.property("file_extension")
      expect(pictures[0]).to.have.property("owner")
      done()
    }).catch(done)
  })

})
