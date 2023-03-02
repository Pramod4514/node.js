var fs=require('fs');

var content='This is the first file';

fs.open('mynote.txt','w',function(err){
    if (err)
        throw err;
    console.log('the existing file is opened.');
}) 

fs.writeFile('mynote.txt',content,function(err){
    if (err)
        throw err;
    console.log('my first is created');
})

fs.appendFile('mynote.txt','append the new content',function(err){
    if (err)
        throw err;
    console.log('this is my updated file..');
})