const ElectionFact = artifacts.require("ElectionFact");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(ElectionFact);
};
