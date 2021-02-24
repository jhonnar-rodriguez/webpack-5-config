import './styles/index.scss';

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

console.log('receipt', receipt);
console.log('gauntletReceipt', gauntletReceipt);