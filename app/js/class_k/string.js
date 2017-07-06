{
    console.log('a',`\u0061`);
    console.log('c',`\u20BB7`);
    
    console.log('c',`\u{20BB7}`);
}

{
    let s = '𠮷';
    
    console.log('长度：',s.length);
    console.log('0：',s.charAt(0)); //取第一个字符
    console.log('1：',s.charAt(1));
    console.log('at0：',s.charCodeAt(0)); //ES5获取Unicode的码值
    console.log('at1：',s.charCodeAt(1));
    
    let s1 = '𠮷a';
    
    console.log('长度：',s1.length);
    console.log('code0：',s1.codePointAt(0)); //第一个字符，10进制
    console.log('code0：',s1.codePointAt(0).toString(16));  //16进制
    
     console.log('code1：',s1.codePointAt(1));
     console.log('code2：',s1.codePointAt(2));
}

{
    console.log("es5",String.fromCharCode('0x20bb7'));
    console.log("es6",String.fromCodePoint('0x20bb7'));
    
}
//字符串的遍历
{
    let str = '\u{20bb7}abc';
    for(let i =0;i<str.length;i++){
        console.log('es5',str[i])
    }
    
    for(let code of str){
        console.log("es6",code)
    }
}
//判断字符串中是否包含某些字符
{
    let str = 'string';
    
    console.log('字符串中是否包含r',str.includes('r'));
    console.log('字符串是否以str开始的',str.startsWith('str'));
    console.log('字符串是否以ing结束的',str.endsWith('ing'));
}
//重复字符串
{
    let a = 'sb';
    
    console.log('将sb重复3次：',a.repeat(3))
}

//模板字符串
{
    let name,info;
    [name,info] = ['毛毛','Hello word'];
    
    let m = `你的名字是${name}吗?如果是请说${info}`;
    
    console.log(m);    
}
//字符串补白，ES7
{
    console.log('将字符串用第二个参数补到长度为第一个参数，向前补','2'.padStart(2,'0'))
    console.log('将字符串用第二个参数补到长度为第一个参数，向后补','2'.padEnd(2,'0'))
}
//标签模板；防止xss攻击？多语言？
{
    let user = {
        name:'毛毛',
        info:'hello word'
    }
       
    console.log(xyz`我是${user.name},我要说${user.info}`);
    
    function xyz(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}
//raw ,转译斜杠
{
    console.log(String.raw`Hi \n${5+2}`);
    console.log(`Hi \n${5+2}`);
}


















