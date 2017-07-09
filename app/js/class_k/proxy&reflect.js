{
    console.info('proxy&reflct');
    
    let obj = {
        name:'毛毛',
        age:24,
        time:'2017-07-09',
        _r:123
    }
    
    let monitor = new Proxy(obj,{
        //拦截读取数据
        get(target,key){
            return target[key].replace('2017','2015')
        },
        //拦截设置数据
        set(target,key,value){
            if(key == 'name'){
                return target[key] = value;
            }else{
                return target[key] // '该值不能修改，返回它自己';   
            }
        },
        // 拦截key in obj
        has(target,key){
            if(key === 'name'){
                return true;
            }else{
                return false;
            }    
        },
        //拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;  //必须要加
            }else{
                return target[key] // '该值不能修改，返回它自己';      
            }    
        },
        //拦截Object.keys, Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target,key){
            return Object.keys(target).filter(item => item != 'time');  //filter 过滤  
        }
    })
    console.log('get',monitor.time);
    monitor.name='sbbb';
    monitor.time='2018-01-01';
    console.log('set',monitor);
    console.log('has','name' in monitor,'time' in monitor);
    
    delete monitor.name;
    delete monitor._r;
    console.log('deleteProperty',monitor);
    
    console.log('Object.keys',Object.keys(obj));
    
    console.log('ownKeys',Object.keys(monitor));  //["name", "age"]
}

{
    let sym = Symbol.for('t');
    let obj = {
        name:'毛毛',
        age:24,
        time:'2017-07-09',
        _r:123,
        [sym]:'Symbol'
    }
    
    console.log('Reflect.get',Reflect.get(obj,'time'));
    Reflect.set(obj,'name','sbbb');
    console.log('Reflect.set',obj);
    
    console.log('Reflect.has',Reflect.has(obj,'_r'));
    
    Reflect.deleteProperty(obj,'_r');
    console.log('Reflect.deleteProperty',obj);
    
    console.log('Reflect.ownKeys',Reflect.ownKeys(obj))
}