import {A,f1,Hello} from './export'; //方法1;必须和export的一样
console.log(A,f1,Hello);


import * as foo from './export'; //方法2;
console.log(foo.A,foo.f1,foo.Hello);

import ssbb from './export'; //方法3; 在导出时使用export default {}

ssbb.f2();
