// var Contest = artifacts.require("./Contest.sol");

// contract("Contest",function(accounts){

// 	it("initializes with two contestants",function(){
// 		return Contest.deployed().then(function(instance){
// 			return instance.contestantsCount();
// 		}).then(function(count){
// 			assert.equal(count,2);   
// 		});
// 	});

// });


const assert = require('assert');
const ganache = require('ganache');
const { beforeEach } = require('mocha');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile")


// updated ganache and web3 imports added for convenience

// contract test code will go here

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Contest", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
