// get the current blocknumber of whatever blockchain we are working with

//1. import the task function
const { task } = require("hardhat/config")

//2. define the task
task("block-number", "Prints the current block number").setAction(
    // we are not giving folowing function a name, this is how you do that , 9:13:06
    async (taskArg, hre) => {
        // hre is a package similar like hardhat
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block numebr : ${blockNumber}`)
    },
)

// export the task
module.exports = {}
