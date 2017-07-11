console.log('iterator');
{
    let arr = ['ss','bb'];
    let map = arr[Symbol.iterator]();
    console.log(map.next())
    console.log(map.next())
    console.log(map.next())
}
{
    let str = "hello world";
    for(let i of str){
        console.log('for-of-string:',i)
    }
}

{
    let arr = [1,2,54,78,55,1,2,3,'aa'];
    for(let [key,val] of arr.entries()){//array 没得values
        console.log('for-of-array:',[key,val]);
    }
}

{
    let sb = 'ssbb'
    let obj = {
        name:[1,6,4,5,8],
        age:['a','b','c','d'],
        _r:'sb',
        [sb](){
            alert('sbb')
        }
        ,
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.name.concat(self.age);
            let len = arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    } else{
                        return{
                            value:arr[index++],
                            done:true    
                        }
                    }   
                }
            }
        }
    }
    
    for(let key of obj){
        console.log('obj的for-of',key)
    }
    
    
}

