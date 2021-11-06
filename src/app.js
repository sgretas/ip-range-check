const ipRangeCheck = require('ip-range-check');
const fs = require('fs');

const readFileToArray = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data.split('\r\n');
  } catch (err) {
    console.log(err);
  }
}

const ipAddresses = readFileToArray('./files/ipAddresses.txt');
const ipRanges = readFileToArray('./files/ipRanges.txt');

const result = ipAddresses.map(ipAddress => {
  let checkedIp = ipAddress;
  ipRanges.forEach(ipRange => {
    if (ipRangeCheck(ipAddress, ipRange)) checkedIp = 'In Range';
  });
  return checkedIp;
}).filter(ipAddress => ipAddress !== 'In Range').toString();

fs.writeFileSync('./files/ipOutOfBounds.txt', result);
console.log(result);