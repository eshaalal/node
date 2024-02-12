var fs =require("fs");
var data='This is node js file and i am writing into it';
var writer=fs.createWriteStream('test.txt');
var reader =fs.createReadStream('test.txt');
writer.write(data,'UTF8');
writer.end();
writer.on('finish',function(){
    console.log("Write completed");
});

var data='';
reader.setEncoding('UTF8');

reader.on('data',function(chunk){
    data=chunk;
});
reader.on('end',function(){
    console.log(data);
});
writer.on('error',function(err){
    console.error(err);
});
