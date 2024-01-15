var a=8;
var count=0;
for(var i=2;i<(a/2);i++){
    if(a%i==0){
    console.log("not a prime");
    count ++;
    break;
    }
}
if(count==0){
    console.log("prime");
}