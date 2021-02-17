var csv = require( "fast-csv" );
var request = require('request');

export default class csvReaderAndDisplay {
static async fast_csv_read_url(url:string):Promise<number>
{
    var myPromise = await csvReaderAndDisplay.promiseFunction(url);
      
    return myPromise;



}

static promiseFunction(url:string):Promise<number>
{
    return new Promise((resolve, reject) => {
    var i:number=0;
    csv.parseStream(request(url),{headers : true})
      .on("data", function(data:string){
        //console.log("current data: ");
        if(i==0){
            var temp=JSON.stringify(data);
            var arraySplit=temp.split(':');
            //console.log("spliited: "+arraySplit[0]); 
        }
        i++;
        //console.log(data);
      })
      .on("end", function(){
        resolve(i);
      });
      });
      
   



}
static getSize(url:string):Promise<number>{
    
    return new Promise((resolve, reject) => {
    request({
        url: url,
        method: "HEAD"
    }, function(err: Error, response: Response, body: Body) {
        //console.log("Size in Bytes"+response.headers['content-length']);

        resolve(parseInt(response.headers['content-length']) );

    });
});
}
static getHeaderNames(url:string):Promise<string[]>{
    
    return new Promise((resolve, reject) => {
        var i:number=0;
        var resultArray:string[]; 
       // var headerName:string;
       var parseStream= csv.parseStream(request(url));
       parseStream.on("data", function(data:string){
            //console.log("current data: ");
            if(i==0){
                resultArray=JSON.stringify(data).split(';');
                resolve(resultArray);
            }
            i++;
            //console.log(data);
          })
          .on("end", function(){
            resolve(resultArray);
          })
          .on('destroy', function (err) {
            resolve(resultArray);
         });
          });
          
}
}