const { ethers, run, network } = require("hardhat")
const { expect, assert } = require("chai")
describe("SimpleStorage", function () {
    // describe takes a name and a function( in this case we dont give the function a name= anonymous funcion)
    // down below is another way of writign the anonymous function
    //describe("SimpleStorage", () => {} )
    let simpleStorageFactory, simpleStorage // here we are defining 2 variables at the same time

    beforeEach(async function () {
        // tells us what to do before the following "it's"

        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })
    it("it should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("Should update when we call store", async function () {
        const expectedValue = "0"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })

    it("able to add a person", async function () {
        const expectedName = "joran"
        const expectedFavoriteNumber = "13"
        const transactionResponse = await simpleStorage.addPerson(
            expectedName,
            expectedFavoriteNumber,
        )
        await transactionResponse.wait(1)

        const currentName = (await simpleStorage.people(0)).name
        assert.equal(currentName, expectedName)

        const currentFavoriteNumber =
            await simpleStorage.nameToFavoriteNumber(currentName)
        assert.equal(currentFavoriteNumber.toString(), expectedFavoriteNumber)
    })
})
