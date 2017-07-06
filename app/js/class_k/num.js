{ //多进制
    console.log('二进制',0B110101);
    console.log('八进制',0o767);
}

{ //检查其参数是否是无穷大。
    console.log('15',Number.isFinite(15))
    console.log('1',Number.isFinite(1))
    console.log('1/0',Number.isFinite('true'/0))
    console.log('NaN',Number.isFinite(NaN))
    
    Number.isNaN()// 判断是否是数
    console.log(Number.isNaN(NaN)) // true
    console.log(Number.isNaN(1)) // false
}

{//判断是否是整数
    Number.isInteger();
    
    console.log('25',Number.isInteger(25))
    console.log('25.0',Number.isInteger(25.0))
    console.log('25.1',Number.isInteger(25.1))
    console.log('www',Number.isInteger('www'))
}

{ //是否在-2的53次方到2的53次方之间；超出该范围js储存就不准
    console.log(Number.MAX_SAFE_INTEGER);//2的53
    console.log(Number.MIN_SAFE_INTEGER);//-2的53
    
    console.log("10",Number.isSafeInteger(10));//是否在安全的范围内
    console.log("a",Number.isSafeInteger("a"));
}

{//返回一个小数的整数部分
    console.log('4.1',Math.trunc(4.1))
    console.log('4.9',Math.trunc(4.9))
}

{//判断一个数是正数、负数还是0
    console.log('-5',Math.sign(-5)); // -1,负数
    console.log('0',Math.sign(0)); //0,就是0
    console.log('5',Math.sign(5)); //1，就是正数
    console.log('50',Math.sign('50')); //1，会转换成数字
    console.log('qww',Math.sign('qww')); //NaN
}
{//立方根,开根号
    console.log(Math.cbrt(-1))//-1
    console.log(Math.cbrt(8))//2
}
