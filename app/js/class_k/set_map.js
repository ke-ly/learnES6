{
    console.log('---set,map----')    
}

{
    let list = new Set(); //方法1
    list.add(1);
    list.add(2);
    
    console.log('个数size',list.size);
    
    let arr = [1,2,3,4,5];//方法2
    let list2 = new Set(arr);
    
    console.log('size:',list2.size)
}
{//set的值不能重复，可用来去重，但是不能进行数据类型的转换
    let arr = [1,2,3,4,5,1,"2"];
    let list = new Set(arr);
    
    console.log(list) // 1,2,3,4,5,'2';
}
{//set 的方法
    let methods = ['add','delete','clear','has'];
    let setMethods = new Set(methods);
    
    console.log('set的方法',setMethods);
    console.log('has',setMethods.has('add'));
    console.log('del',setMethods.delete('add'),setMethods);
    setMethods.clear();
    console.log('clear',setMethods);
}
{//set的遍历
    let methods = ['add','delete','clear','has'];
    let setMethods = new Set(methods);
     
    for(let key of setMethods.keys()){
        console.log('keys',key);
    }
    
    for(let val of setMethods.values()){
        console.log('values',val);
    }
    
    for(let [key,val] of setMethods.entries()){
        console.log('entries',[key,val]);
    }
    
    setMethods.forEach((item)=>{
        console.log('forEach',item)
    })
}

{//WeakSet
    
    let obj = {};
    let weakList = new WeakSet();
    weakList.add(obj); //只能这么加，并且weakset的值只能是对象不能是其他数据类型
    console.log('weakList',weakList)
    //weakList没有size和clear方法，并且不能遍历
}


{//Map
    let map1 = new Map(); //定义方式1
    let k = ['a','a']
    map1.set(k,123); //key值可以为各种数据类型
    map1.set('b',456);
    console.log('map.set()',map1);
    
    let map2 = new Map([['a',1],['b',2],['c',3],['d',4]]); //定义方式2
    //只能是一个数组且在里面必须嵌套数组，嵌套的数组必须要有两个值，一个key，一个val。
    console.log('map[]',map2);
    
    console.log('get',map2.get('b'))
    console.log('size属性',map2.size)
    console.log('has方法',map2.has('a'))
    console.log('del',map2.delete('a'),map2)
    console.log('clear',map2.clear(),map2)
    //遍历和Set相同
}
{//weakmap
    //其于Map的区别和weakSet于Set的区别是相同的：key值必须为对象、没有size属性、clear方法和不能遍历
    let o = new WeakMap();
    let obj = {'a':'aaa'};
    o.set(obj,111);//不要忘了val
    console.log('weakmap',o)
}











