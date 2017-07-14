class Timer {
    countDown (end,update,handle){
        const now = new Date().getDate();
        const self = this;
        if(now - end){
            handle.call(self);
        }else{
            let last_time = end - now;
            const px_d = 1000*60*60*24;
            const px_h = 1000*60*60;
            const px_m = 1000*60;
            const px_s = 1000;
            let d = Math.floor(last_time/px_d); //天
            let h = Math.floor((last_time - d*px_d)/px_h);
            let m = Math.floor((last_time - d*px_d - h*px_h)/px_m);
            let s = Math.floor((last_time - d*px_d - h*px_h - m*px_m)/px_s);
            let arr = [];
            
            if(d>0){
                arr.push(`<em>${d}</em>天`);
            }
            if(arr.length || (h>0)){
                arr.push(`<em>${h}</em>时`);   
            }
            if(arr.length || (m>0)){
                arr.push(`<em>${m}</em>分`);   
            }
            if(arr.length || (s>0)){
                arr.push(`<em>${s}</em>秒`);   
            }
            
            self.last_time  = arr.join('');
            update.call(self,arr.join(''));
            
            setTimeout(function(){
                self.countDown(end,update,handle);
            },1000);
        }
    }
}

export default Timer;

