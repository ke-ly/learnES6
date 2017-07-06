{
    let a,b,c;
    [a,b,c] = ['maomao','xm','sb']
    
    console.log(a,b,c)
}

{
    let x,y,z;
    [x,y,...z] = [1,2,3,4,5,6]
    
    console.log(x,y,z)
}

{
    let a,b;
    ({a,b} = {a:11,b:22})
    
    console.log(a,b)
}

{
    function f1(){
        return [5,6,7,8,9];
    }
    
    let a,b;
    [a,,,b] = f1()
    
    console.log(a,b) // 5,8
}

{
    function f1(){
        return [5,6,7,8,9,88,10,48,45];
    }
    
    let a,b;
    [a,,...b] = f1()
    
    console.log(a,b) //5,[6, 7, 8, 9, 88, 10, 48, 45]
}



{
    let o = {p:45,q:true};
    
    let {p,q} = o;
    
    console.log(p,q);
}

{
    let data = {
        title:"mingc",
        list:[
            {
                title:"sb1",
                desc:'描述'
            }
        ]
    }
    
    let {title:t,list:[{title:l}]} = data;
    console.log(t,l)
    
}