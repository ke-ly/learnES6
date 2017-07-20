import $ from 'jquery';

class Interface{
    getOmit(issue){ //遗漏
        let self = this;
        return new Promise((resolve,reject) => {
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOmit(res.data);
                    resolve.call(self,res);     
                },
                error:function(err){
                    reject.call(err);
                }
            })    
        })
    }
    
    getOpenCode(issue){//获取开奖号
        let self = this;
        return new Promise((resolve,reject) => {
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOpenCode(res.data);  
                    resolve.call(self,res);          
                },
                error:function(){
                    reject.call(err);    
                }
            })     
        })
    }
    
    getState(issue){//获取当前状态
        let self = this;
        return new Promise((resolve,reject) => {
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){ 
                    resolve.call(self,res);          
                },
                error:function(){
                    reject.call(err);    
                }
            })     
        });     
    }
}

export default Interface;