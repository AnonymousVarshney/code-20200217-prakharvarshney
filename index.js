import csvReaderAndDisplay from '../controller/csvReadAndDisplay';


var testUrl= "https://raw.githubusercontent.com/vamstar/challenge/master/Dataset3.csv";

console.log("Number of Rows of Data: "+csvReaderAndDisplay.fast_csv_read_url(testUrl));
console.log("Size of Data: "+csvReaderAndDisplay.getSize(testUrl));
console.log("Header/Column Names: "+csvReaderAndDisplay.getHeaderNames(testUrl));