const { ethers, run, network } = require("hardhat")
const { expect, assert } = require("chai")

describe("simpleStorage testing", async function () {
    let simpleStorage, simpleStorageFactory

    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("it should start with a favorite number of 0", async function () {
        const expectedFavoriteNumber = "0"
        const actualFavoriteNumber = await simpleStorage.retrieve()
        assert.equal(expectedFavoriteNumber, actualFavoriteNumber.toString())
    })

    it("should update when we call store", async function () {
        const expectedFavoriteNumber = "13"
        await simpleStorage.store("13")
        const actualFavoriteNumber = await simpleStorage.retrieve()
        assert.equal(expectedFavoriteNumber, actualFavoriteNumber.toString())
    })

    it("able to add a person", async function () {
        expectedname = "joran"
        expectedNumber = "5"
        await simpleStorage.addPerson(expectedname, expectedNumber)

        actualname = (await simpleStorage.people(0)).name
        assert.equal(actualname, expectedname)

        actualNumber = (await simpleStorage.people(0)).favoriteNumber
        assert.equal(actualNumber.toString(), expectedNumber)
    })
})
