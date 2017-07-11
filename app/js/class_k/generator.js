{
    let tell = function*(){ //generator的基本定义
        
        yield 'a';
        yield 'b';
        return 'c';
    }
    
    let k = tell();
    
    console.log(k.next()); //每调用next()一下执行yield
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{//用generator为object设置iterator借口
    let obj ={};
    
    obj[Symbol.iterator] = function*(){
        yield 1;   
        yield 2;   
        yield 3;   
        yield 4;   
        yield 5;   
    }
    
    console.log(obj)
    for(let val of obj){
        console.log('generator设置iterator',val);
    }
}

{//状态机
    let state = function*(){
        while(1){
            yield "A";
            yield "B";
            yield "C";
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

//{//状态机
//    let state = async function(){
//        while(1){
//            await "A";
//            await "B";
//            await "C";
//        }
//    }
//    let status = state();
//    console.log(status.next());
//    console.log(status.next());
//    console.log(status.next());
//    console.log(status.next());
//    console.log(status.next());
//    console.log(status.next());
//}

{//generator抽奖应用计算抽奖次数
    let draw = function(count){
        //抽奖过程
        console.error(`还可以抽奖${count}次！`)
    }
    
    let jisuan = function*(count){
        while(count>0){
            count--;
            yield draw(count);
        }
    }
    
    let start = jisuan(5);
    let btn = document.createElement('button');
    btn.id = "start";
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    
    document.getElementById('start').addEventListener('click',function(){
        start.next();     
    },false)
    
}

{//generator实现长轮询
    
    let ajax = function*(){ //模拟ajax
        yield new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve({code:0});
            },1000)
        });
    }
    
    let ask = function(){
        let generator = ajax();
        let step = generator.next();
        console.log(step.value);
        
        step.value.then(d=>{
            console.log('d1',d);
            if(d.code!=0){
                setTimeout(function(){
                    console.info('wait...');
                    ask();
                },1000);
            }else{
                console.error('d2',d)    
            }
        })
    }
    
    ask();
    
}