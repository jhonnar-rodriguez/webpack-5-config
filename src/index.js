const receipt = {
  ironIngot: 1,
  leatherStrips: 2,
  refinedMoonstone: 4,
};

const gauntletReceipt = {
  ...receipt,
  leather: 1,
  refinedMoonstone: 4,
}

console.log(receipt);
console.log(gauntletReceipt);