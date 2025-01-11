const Election = artifacts.require("Election");
const election_authority = "0x33F10327DC86D562cCa0a7c16d36Eb9f28cE92CD";
const election_name = "Ernst VP Election";
const election_description = "Election to select Vice President";

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Election, election_authority, election_name, election_description, { gas: 3000000});
};
