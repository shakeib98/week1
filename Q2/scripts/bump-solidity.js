const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

let contentM3 = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedM3 = contentM3.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedM3 = bumpedM3.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumpedM3);

let contentM3P = fs.readFileSync("./contracts/Multiplier3VerifierPlonk.sol", { encoding: 'utf-8' });
let bumpedM3P = contentM3P.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumpedM3P = bumpedM3P.replace(verifierRegex, 'contract Multiplier3VerifierPlonk');

fs.writeFileSync("./contracts/Multiplier3VerifierPlonk.sol", bumpedM3P);