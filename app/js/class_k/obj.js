{//简洁表示法
    let o = 1;
    let k = 2;
    
    let es5_obj = {
        oo:o,
        kk:k
    }    
    let es6_obj = {
        o,k
    }    
    console.log(es5_obj,es6_obj);
    //有方法的：
    
    let es5_method = {
        hello:function(){
            console.log('es5_method!')
        }
    }
    let es6_method = {
        hello(){
            console.log('es6_method!!')
        },
        haha(x){
            console.log(x)
        }
    }
    
    es5_method.hello();
    es6_method.haha('hahha');
    
}

{// 属性表达式
    let key = 'name';
    
    let es6Obj = {
        [key]:'毛毛'
    }
    
    console.log(es6Obj); //{name:'毛毛'}
}

{//常用新增API
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');//判断两个参数是否相等，和===相同
    console.log('数组',Object.is([],[])); //false
    console.log('sb',Object.is(undefined,'undefined'));
    console.log('obj',Object.is({a:'a'},{a:'a'}));// false
    
    let objA = {
        a:'a',
        b:'b',
        c:'c'
    }
    let objB = {
        d:'1',
        e:'2',
        f:'3'
    }
    let objC = Object.assign(objA,objB); //拷贝（合并？），浅拷贝    
    console.log(objC);
    
    let name = '毛毛';
    let age = 10;
    let job = 'lol';
    
    let p = {
        name,age,job
    }
    for(let [k,v] of Object.entries(p)){
        console.log([k,v]);
    }
}

{//扩展运算符（babel支持不好）
    /*let {x,y,...z} = {a:'aaa',b:'bbb',c:'ccc',d:'ddd',e:'eee'};
     z最后等于
     {
         c:'ccc',
         d:'ddd',
         e:'eee'
     }*/
}