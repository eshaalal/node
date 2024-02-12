var fs = require("fs");
var reader = fs.createReadStream('test.txt');

var writer = fs.createWriteStream('text4.txt');

writer.on('unpipe',() =>{
    console.log('Something is piping into the writer');
});
reader.unpipe(writer);