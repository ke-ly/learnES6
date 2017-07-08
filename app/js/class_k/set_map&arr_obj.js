{
    console.info('map和array的区别')
    let map = new Map();
    let arr = [];
    
    //增
    map.set('t',1);
    arr.push({t:1})
    console.log('Map-array-增',map,arr);
    
    //查
    let map_exist = map.has('t');
    let arr_exist = arr.find(item=>item.t);
    
    console.log('Map-array-查',map_exist,arr_exist);
    
    //改
    map.set('t',2);
    arr.forEach(item=>item.t?item.t=2:'')
    console.log('Map-array-改',map,arr);
    
    //删
    map.delete('t');
    let index = arr.findIndex(item=>item.t);//先用findIndex找下标
    arr.splice(index,1);//再用splice删除
    console.log('Map-array-删',map,arr);
}

{
    console.info('Set和array的区别');
    
    let set = new Set();
    let arr = [];
    let obj = {s:'b'};
    
    //增
    set.add(obj)
    arr.push({s:'b'}) 
    console.log('Set-array-增',set,arr);
    
    //查
    let set_exist = set.has(obj); // true
    let arr_exist = arr.find(item=>item.s);
    console.log('Set-array-查',set_exist,arr_exist);
    
    //改
    set.forEach(item=>item.s?item.s='bb':'');
    arr.forEach(item=>item.s?item.s='bb':'');
    console.log('Set-array-改',set,arr);
    
    //删
//    set.delete(obj); //11
    set.forEach(item=>item.s?set.delete(item):'');//22
    let index = arr.findIndex(item=>item.t);//先用findIndex找下标
    arr.splice(index,1);//再用splice删除
    console.log('Set-array-删',set,arr);
}

{
    console.info('map、set、obj三者的比较');
    
    let item = {s:'b'};
    let map = new Map();
    let set = new Set();
    let obj = {};
    
    //增
    map.set('s','b');
    set.add(item);
    obj.s='b';
    console.log('map、set、obj-增',map,set,obj);
    
    //查    
    console.log('map、set、obj-查',{
        map_esist:map.has('s'),
        set_exist:set.has(item),
        obj_exist:'s' in obj
    });
    
    //改    
    map.set('s','bb');
    item.s = 'bb';
    obj.s = 'bb';
    console.log('map、set、obj-改',map,set,obj);
    
    //删
    map.delete('s');
    set.delete(item);
    delete obj.s;
    console.log('map、set、obj-删',map,set,obj);
}