{
    console.log('class类')
    //基本定义是生成实例
    class Parent {
        constructor(name = "毛毛") {
            this.b = name;
        }
    }

    let v_parent = new Parent('v');

    console.log('构造函数', v_parent);
}

//继承
{
    class Parent {
        constructor(name = "毛毛") {
            this.b = name;
        }
    }

    class Child extends Parent {

    }

    console.log('继承', new Child())
}
//继承传递参数
{
    class Parent {
        constructor(name = "毛毛") {
            this.b = name;
            this.c = 'cc';
        }
    }

    class Child extends Parent {
        constructor(b = 'child') {
            super(b); // 一定放在第一行
            this.type = 'child';
        }
    }

    console.log('继承传递参数', new Child())
}
//getter,setter
{
    class Parent {
        constructor(name = "毛毛") {
            this.b = name;
            this.c = 'cc';
        }

        get longName() { //这里是属性，不是方法
            return 'mk_' + this.b;
        }

        set longName(val) {
            this.b = val;
        }
    }

    let v = new Parent();

    console.log('get', v.longName);
    v.longName = 'sb啊';
    console.log('set过后', v.longName);

}
// 静态方法
{
    class Parent {
        constructor(name = "毛毛") {
            this.b = name;
            this.c = 'cc';
        }
        
        static tell (){
            console.log('静态方法tell');
        }
    }
    
    Parent.tell(); //通过类去调用，而不是通过类的实例去调用

}

// 静态属性
{
    class Parent {
        constructor(name = "毛毛") {
            this.b = name;
            this.c = 'cc';
        }
        
        static tell (){
            console.log('静态方法tell');
        }
    }
    
    Parent.test1 = '静态属性test1'; //直接在类外面定义静态属性
    Parent.test2 = '静态属性test2';
    
    console.log(Parent.test2); //通过类去调用，而不是通过类的实例去调用

}
