{//函数默认值;默认值后面不能再有没有默认值的参数
    function test(x,y='word'){
        console.log('默认值:',x,y);
    }
    
    test('hello');
    test('hello','sb');
}

{//作用域
    let x = 'word';
    
    function test2 (x,y=x){
        console.log('作用域:',x,y)            
    }
    
    test2('sb'); // sb sb;如果调用时传了值，就是传的值，反之则是变量
}

{//rest 参数，在不确定有多少个参数时，将你的参数转化为数组其后也不能加参数
    function test3(...a){
        for(let i of a){
            console.log('rest:',i);
        }    
    }
    
    test3(1,'sv','sb',4,5,6,undefined);
}

{
    console.log(...[5,'sb','aa',44]); //5 "sb" "aa" 44;将数组转化为几个离散的值
}

{//箭头函数
    let arrow1 = v => v*5;
    console.log('arrow1',arrow1(2));
    
    let arrow2 = ()=> alert('arrow2');    
//    arrow2();
    
    let arrow3 = (v,b) => {
        console.log(v,b*2)
    }
    arrow3(5,'2') //5,4
}

{//尾调用  
    let tall = v => console.log('tall:',v);
    function fx(v){
        return tall(v);
    }
    
    fx(125);
}

