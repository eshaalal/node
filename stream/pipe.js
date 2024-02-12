var fs =require("fs");
var reader=fs.createReadStream('test.txt');
var writer=fs.createWriteStream('test2.txt');
writer.on('pipe',() => {
    console.log('Something is piping into the writer.');
});
reader.pipe(writer);