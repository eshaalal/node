var fs =require("fs");
var data='';
var reader =fs.createReadStream('test.txt');
reader.setEncoding('UTF8');
reader.on('data',function(chunk){
    data=chunk;
});
reader.on('end',function(){
    console.log(data);
});
reader.on('error',function(err)     {
    console.error(err);
});