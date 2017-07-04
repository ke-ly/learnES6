{
    console.log('=========数组=========');
    
    //将一组值转化为数组
    let arr = Array.of(1,2,3,4,'5','sb');
    console.log('arr=',arr); //[1, 2, 3, 4, "5", "sb"]
    
    let empty = Array.of();
    console.log('empty=',empty); //[]
}

{// 将伪数组转化为正真的数组如：NodeList
    let div = document.querySelectorAll('div');
    let divArr = Array.from(div);
    div.forEach(function(i){
        console.log(i.textContent)
    });
    //和map相似
    console.log('映射q',Array.from([1,2,3],function(i){
        return i*2
    }))
    
}

{//填充数组
    console.log('fill-7',['a',1,undefined].fill(7))
    console.log('fill-7',['a','b','c','d','e','f','g'].fill(7,1,4))
}

{//遍历
    let arr = [1,2,'a','c',undefined];
    
    for(let index of arr.keys()){
        console.log('keys',index);//返回下标
    }
    
    for(let val of arr.values()){
        console.log('values',val);//返回值
    }
    
    for(let [index,val] of arr.entries()){
        console.log('entries',index,val);//返回下标和值
    }
    
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4))
}

{//查找
    console.log([1,2,3,4,5,'a'].find(function(i){//只找第一个,返回的值
        return i>3;
    }));
     console.log([1,2,3,4,5,'a'].findIndex(function(i){//只找第一个,返回下标
        return i>3;
    }))
}

{
    console.log('num',[1,2,NaN].includes(1));//是否包含1
    console.log('as',[1,'a',NaN].includes('as'));//是否包含as
    console.log('NaN',[1,'a',NaN].includes(NaN));//是否包含NaN
}