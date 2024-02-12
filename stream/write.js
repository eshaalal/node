var fs=require('fs');
var data='This is node.js class';
var writer=fs.createWriteStream('test.txt');
writer.write(data,'UTF8');
writer.end();
writer.on('finish',function(){
    console.log("Write completed");
});

writer.on('error',function(err){
    console.error(err);
});