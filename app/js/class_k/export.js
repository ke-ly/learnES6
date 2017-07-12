export let A = '123';
export function f1 (){
    console.error('this is f1')
}
export class Hello {
    world(){
        console.error('this is hello world')
    }
}

let B = '456';

function f2(){
    console.error('this is f2')
}
class Hello1 {
    world(){
        console.error('this is hello1 world1')
    }
}

export default {
    B,
    f2,
    Hello1
}
