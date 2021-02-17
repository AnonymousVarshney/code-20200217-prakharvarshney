import csvReaderAndDisplay from '../controller/csvReadAndDisplay';

describe('testCases', function() {
  it('read', async function() {
    let result = await csvReaderAndDisplay.fast_csv_read_url("https://raw.githubusercontent.com/vamstar/challenge/master/Dataset3.csv");
    expect(result).toBe(51);   
  });
  it('size', async function() {
    let result = await csvReaderAndDisplay.getSize("https://raw.githubusercontent.com/vamstar/challenge/master/Dataset3.csv");
    expect(result).toBe(3441);   
  });
  it('headerNames', async function() {
    let result = await csvReaderAndDisplay.getHeaderNames("https://raw.githubusercontent.com/vamstar/challenge/master/Dataset3.csv");
    expect(result).toStrictEqual(["[\"No", "Country", "Level of development", "European Union Membership", "Currency", "Women Entrepreneurship Index", "Entrepreneurship Index", "Inflation rate", "Female Labor Force Participation Rate\"]"]);   
  });
});