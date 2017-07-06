{
    console.log('===symbol===')
    //声明
    let a1 = Symbol();
    let a2 = Symbol();    
    console.log(a1 === a2); //false
    
    let a3 = Symbol.for('sb');
    let a4 = Symbol.for('sb');
    console.log(a3 === a4); // true
}

{
    let symA = Symbol.for('a');
    let symB = Symbol.for('b');
    
    let obj = {
        [symA]:'111',
        [symB]:'222',
        c:'333',
        d:'444',
    }
    
    for(let i in obj){
        console.log('for-in:',obj[i]) // 333,444
    }
    
    for(let [k,v] of Object.entries(obj)){
        console.log('for-of:',[k,v]) //["c", "333"],["d", "444"]
    }
    
    //for-in和for-of不能获取到symbol
    
    Object.getOwnPropertySymbols(obj).forEach((item)=>{ //Object.getOwnPropertySymbols(obj)返回一个数组
        console.log('getOwnPropertySymbols:',obj[item]); //111,2222    
    })
    //getOwnPropertySymbols只能获取symbol而不能获取其他的
    
    Reflect.ownKeys(obj).forEach((item)=>{//Reflect.ownKeys(obj) 也返回一个数组
         console.log('Reflect.ownKeys:',obj[item]); //333,444,111,222   
    });
    
//    Reflect.ownKeys(obj) 就可以获取所有的值
}