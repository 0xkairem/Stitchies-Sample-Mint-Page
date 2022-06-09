// Deploy contract
async function main() {
  const StitchiesCollection = await hre.ethers.getContractFactory(
    "StitchiesCollection"
  );
  // Format: collection.deploy("Constructor argument 1", "Constructor argument 2")
  const stitchiesCollection = await StitchiesCollection.deploy(
    "https://gateway.pinata.cloud/ipfs/QmXJz2o9JULDJrDALN2KGTcaiJpA4P5qyVZz6JizeG8r7R/",
    "test"
  );

  await stitchiesCollection.deployed();

  console.log("StitchiesCollection deployed to:", stitchiesCollection.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
