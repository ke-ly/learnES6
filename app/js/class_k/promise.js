console.log('promise解决异步操作的')
{//es5
    let ajax = function(cb){
        console.log('开始');
        setTimeout(function(){
            cb&&cb.call();
        },1000)
    }
    
    ajax(function(){
        console.log('cbbb')
    })
}

{//promise基本调用
    let ajax = function(){
        console.log('又开始啦');
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve();
            },1000)
        });
    };
    
    ajax().then(function(){
        console.log('promise的resolve-1');
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve();
            },2000)
        })
    }).then(()=>{
        console.log('promise的resolve-2');
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve();
            },3000)
        })
    }).then(()=>{
        console.log('promise的resolve-over')
    })
}

{//捕获错误
    let ajax = function(num){
        return new Promise((resolve,reject)=>{            
            if(num>5){
                resolve() ;    
            }else{
                throw new Error('出错啦，sb！');
            }
        });
    }
    
    ajax(6).then(()=>{
        console.log('num is',6);
    }).catch(err=>{
        console.log('catch',err);
    })
    
    ajax(3).then(()=>{//小于5，不执行resolve();
        console.log('num is',3);
    }).catch(err=>{
        console.log('catch',err);
    })
    
}

{
    function loadImg(src){        
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            
            img.onload = function(){
                resolve(img);  
            } 
            img.onerror = function(err){
                reject(err);
            }
            
        })     
    }
    
    function showImgs (imgs){ 
        imgs.forEach(item=>{
            document.body.appendChild(item);
        })    
    }
    
    function showImg (img){    
        let div = document.createElement('div');
        div.appendChild(img);
        document.body.appendChild(div);
    }
    
    
    Promise.all([ //三个都加载完才执行       
     loadImg('http://img95.699pic.com/photo/2016/08/26/97d2cfe5-b8f9-4cfe-ac3b-f6a945f1510e.jpg_wh300.jpg'),  
     loadImg('http://img95.699pic.com/photo/2016/08/26/1ba2f350-d2b2-459b-aab1-25bd4f0951f9.jpg_wh300.jpg'),    
     loadImg('http://img95.699pic.com/photo/2016/08/27/8295177e-441a-4624-a858-8c48fb8e2a02.jpg_wh300.jpg'),    
    ]).then(showImgs)
    
    Promise.race([   //一个加载完就执行        
     loadImg('http://img95.699pic.com/photo/2016/08/26/97d2cfe5-b8f9-4cfe-ac3b-f6a945f1510e.jpg_wh300.jpg11'),  
     loadImg('http://img95.699pic.com/photo/2016/08/26/1ba2f350-d2b2-459b-aab1-25bd4f0951f9.jpg_wh300.jpg'),    
     loadImg('http://img95.699pic.com/photo/2016/08/27/8295177e-441a-4624-a858-8c48fb8e2a02.jpg_wh300.jpg'),    
    ]).then(showImg)
}