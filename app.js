const ipRangeCheck = require('ip-range-check');
const fs = require('fs');

const ipAddresses = fs.readFileSync('./files/ipAddresses.txt', 'utf8', (err, data) => err ? console.log(err) : data);
const ipRanges = fs.readFileSync('./files/ipRanges.txt', 'utf8', (err, data) => err ? console.log(err) : data);

const ipAddressArray = ipAddresses.split('\r\n');
const ipRangeArray = ipRanges.split('\r\n');

const result = ipAddressArray.map(ipAddress => {
  let checkedIp = ipAddress;
  ipRangeArray.forEach(ipRange => {
    if (ipRangeCheck(ipAddress, ipRange)) checkedIp = 'In Range';
  })
  return checkedIp;
}).filter(ipAddress => ipAddress !== 'In Range').toString()

console.log(result);