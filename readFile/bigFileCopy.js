/**
 * Created by xiaoqi on 16/8/20.
 */
const path=require('path');
const  fs=require('fs');

let copy=(src,dest)=>{
  fs.createReadStream(src).pipe(fs.createWriteStream(dest))
};

copy(path.join(__dirname,'../File.json'),path.join(__dirname,'../CopyBigFile.json'));