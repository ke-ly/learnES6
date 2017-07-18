import $ from 'jquery';
class Base {
    /**
     *[initPlayList 初始化奖金和玩法及说明]     
     *  
     */
    initPlayList(){
        this.play_list.set('r2',{
            bonus:6,
            tips:'从01～11中任选2个或多个号码，所选号码与开奖任意两个号码相同，即中奖<em class="red">6</em>元',
            name:'任二'
        })
        .set('r3',{
            bonus:19,
            tips:'从01～11中任选3个或多个号码，所选号码与开奖任意三个号码相同，即中奖<em class="red">19</em>元',
            name:'任三'   
        })
        .set('r4',{
            bonus:78,
            tips:'从01～11中任选4个或多个号码，所选号码与开奖任意四个号码相同，即中奖<em class="red">78</em>元',
            name:'任四'   
        })
        .set('r5',{
            bonus:540,
            tips:'从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
            name:'任五'   
        })
        .set('r6',{
            bonus:90,
            tips:'从01～11中任选6个或多个号码，所选号码与开奖五个号码相同，即中奖<em class="red">90</em>元',
            name:'任六'   
        })
        .set('r7',{
            bonus:26,
            tips:'从01～11中任选7个或多个号码，选号与奖号五个号码相同，即中奖<em class="red">26</em>元',
            name:'任七'   
        })
        .set('r8',{
            bonus:9,
            tips:'从01～11中任选8个或多个号码，选号与奖号五个号码相同，即中奖<em class="red">9</em>元',
            name:'任八'   
        });        
    }
    /**
     *[initNumber 初始化号码]     
     *  
     */
    initNumber(){
        for(let i=0;i<12;i++){
            this.number.add((''+i).padStart(2,'0'));
        }     
    }
     /**
     *[setOmit 设置遗漏数据]     
     *   
     */
    setOmit(omit){
        let self = this;
        self.omit.clear();
        for(let [index,item] of omit.entries()){
            self.omit.set(index,item);
        }
        
        $(self.omit_el).each(function(index,item){
            $(item).text(self.omit.get(index));    
        })
    }
    /**
     *[setOpenCode 设置开奖]     
     * 
     */
    setOpenCode(code){
        let self = this;
        self.open_code.clear(); 
        for(let item of code.values()){
            self.open_code.add(item);
        }
        
        self.updateOpenCode&&self.undateOpenCode.call(self,code);
    }
    
    /**
     *[toggleCodeActive 号码选中取消]     
     * 
     */
    toggleCodeActive(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.toggleClass('btn-boll-active');
        self.getCount();
    }
    
    /**
     *[changePlayNav 切换玩法]     
     * 
     */
    changePlayNav(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.addClass('active').siblings().removeClass('active');
        self.cur_play = $cur.attr('desc').toLocaleLowerCase();
        
        $('#zx_sm span').html(self.play_list.get(self.cur_play).tips);
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        self.getCount();
    }
    /**
     *[assistHandle 操作区]     
     * 
     */
    assistHandle(e){
        e.preventDefault();     
        let self = this;
        let $cur = $(e.currentTarget);
        let index - $cur.index(); 
        
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        if(index === 0){
            $('.boll-list .btn-boll').addClass('btn-boll-active');     
        }
        if(index === 1){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent-5>0){
                    $(t).addClass('btn-boll-active');    
                }    
            })    
        }
        if(index === 2){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent-6<0){
                    $(t).addClass('btn-boll-active');    
                }    
            })    
        }
        if(index === 3){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent%2==1){
                    $(t).addClass('btn-boll-active');    
                }    
            })    
        }
        if(index === 4){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent%2==0){
                    $(t).addClass('btn-boll-active');    
                }    
            })    
        }
        self.getCount();
    }
    
    /**
     *[getName 获取当前彩票名称]     
     * 
     */
    getName(){
        return this.name();    
    }
    
    /**
     *[addCode 添加号码]     
     * 
     */
    addCode(){
        let self = this;
        let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g);
        let active = $active?$active.length:0;
    }
}