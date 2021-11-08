# IP Range Check
This app is using the npm package ip-range-check to check if a list of IP addresses is included in a list of IP ranges. It returns only the IP addresses that are out of bounds.

## Setup
1. Install the dependencies `npm install`
2. Add the IP adresses in **files/ipAdresses.txt**
3. Add the IP ranges in **files/ipRanges.txt**
3. Run the app `npm start`

## Format in the files
Each txt file must be formatted as shown below:
> 192.168.2.1  
> 192.168.2.2  
> 192.168.2.3  