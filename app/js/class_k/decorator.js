console.dir('decorator修饰器');

{
    let readonly = function(target,name,desc){ //定义修饰器函数
        desc.writable = false;
        return desc;
    }
    
    class Test{
        tt(){
            return 'tt'
        }
        @readonly  // 不能加;
        
        time(){
            return '2017-07-12';
        }
    }
    
    let test = new Test();
    
    test.tt = function(){  //test.time就不能修改会报错
        return 'sb11b'
    }
    
    console.log(test.tt())
    
}

{
    let typeName = function(target,name,desc){ //用修饰器给类增加静态属性
        target.myname = '毛毛';    
    }
    
    @typeName
    class Test{
        
    }

    console.log(Test.myname)//静态属性直接用类调用，不能用实例
}

{//案例
    let log = (type) => {
        return (target,name,desc) => {
            let src_method = desc.value;
            desc.value = (...arg) => {
                src_method.apply(target,arg);
                console.dir(`log:${type}`);
            }
        }
    }
    
    class AD {
        @log('show')
        show(){
            console.error('ad is show!');
        }
         @log('click')
        click(){
            console.error('ad is click!');
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();
}