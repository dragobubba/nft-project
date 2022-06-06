module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Uncanny", {
    from: deployer,
    args: [ "Uncanny", "UCC", "https://uncanny.mypinata.cloud/ipfs/QmPLUxmkduQpxuNH4MPp3g71anDN6MhGxtZ4prgmogKqZW/"],
    log: true,
  });
};
module.exports.tags = ["Uncanny"];
