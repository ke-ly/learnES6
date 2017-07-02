{  // ES5 
    let rex1 = new RegExp('xyz','i');
    let rex2 = new RegExp(/xyz/i);
    
    console.log(rex1.test('xyz123'),rex2.test('xyz123'));
    
    //ES6
    
    let rex3 = new RegExp(/xqre/ig,'i');  //后面的i会覆盖掉前面的ig；
    
    console.log(rex3.flags)
}

{
    let s = 'bbb_bb_b';
    let rex1 = /b+/g;
    let rex2 = /b+/y;
    
    console.log('one',rex1.exec(s),rex2.exec(s));//exec接收字符串，返回第一个匹配项信息的数组；没有匹配返回null
    console.log('two',rex1.exec(s),rex2.exec(s));
    
    console.log(rex1.sticky,rex2.sticky);  //sticky判断是否开启粘连模式
}