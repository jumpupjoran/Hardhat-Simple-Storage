// imports
const { verifyMessage, TransactionReceipt } = require("ethers")
const { ethers, run, network } = require("hardhat")

//async main
async function main() {
    const SimpleStorageFactory =
        await ethers.getContractFactory("SimpleStorage")
    console.log("Deploying contract..")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.waitForDeployment() // wait to make sure it is deployed
    console.log(`Deployed contract to : ${simpleStorage.target}`)

    // we can only verify if we are on a real testnet , hardhat you cant verify
    // if { we are on sepolia  "and" etherscan api key exists } then...
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        // 4 == 4 --> true
        // 4 == "4" --> true
        // 4 ==="4" --> false
        console.log("waiting for block txes...")
        await simpleStorage.deploymentTransaction().wait(6) // wait 6 blocks to give etherscan the time to process it
        await verify(simpleStorage.target, []) //[]= constructor arg but these are blanc for now
    }

    //reading the favorite number
    const currentValue = await simpleStorage.retrieve()
    console.log(`current value is :"${currentValue}`)

    // update current value
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`updated value is : ${updatedValue}`)
}

// function to automatically verify a contract after it is deployed
async function verify(contractAddress, args) {
    // (" verify, subtask,"{object with the actual parameters})
    try {
        console.log("verifying contract..")
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        }) // sometimes we get an error that the contract is already verified, because simpelstorage is a common contract that etherscan automatically verifies it
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

//main()
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
