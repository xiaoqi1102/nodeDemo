/**
 * Created by xiaoqi on 16/8/20.
 */
var  fs =require('fs');
var path=require('path')
let readFile=(src)=>{
    let data=fs.readFileSync(src);
    console.log(data);
    return data
};

//readFile(path.join(__dirname,'../File.json'));
function copy(src, dest) {
    fs.writeFileSync(dest,readFile(src))
};

copy(path.join(__dirname,'../File.json'),path.join(__dirname,'copy.json'))