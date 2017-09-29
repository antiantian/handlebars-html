// JavaScript Document

// JavaScript Document
Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});
//隐藏头部
Handlebars.registerHelper('agree_button',function(hideheader) {
    if (hideheader) {
        return 'hide'
    }else{
        return ''
    }
})
//订单结果状态 
Handlebars.registerHelper('PAY_CREATED',function(status,options) {
    if(status==0){
      return options.fn(this);
    } 
})
Handlebars.registerHelper('PAY_PENDING',function(status,options) {
    if(status==1){
      return options.fn(this);
    } 
})
Handlebars.registerHelper('PAY_SUCCESS',function(status,options) {
    if(status==2){
      return options.fn(this);
    } 
})
Handlebars.registerHelper('PAY_FAI',function(status,options) {
    if(status==3){
      return options.fn(this);
    } 
})
//自定义模块  javascript
Handlebars.registerHelper('section',function(name, context) {
     if(!this._sections){
        this._sections = {};
        this._sections[name]='';
    }  
    this._sections[name]+=context.fn(this);
    return null;
})
//自定义模块  head
Handlebars.registerHelper('head',function(name, context) {
     if(!this._head){
        this._head = {};
        this._head[name]='';
    }  
    this._head[name]+=context.fn(this);
    return null;
})
//自定义模块  是否信用卡 index页面
Handlebars.registerHelper('iscredit',function(msg) {
     if(msg){
      return 'iscredit'
    }
})
Handlebars.registerHelper('initIndexClass',function(index) {
    if(index===0){
      return 'click'
    }
})
Handlebars.registerHelper('isFirst',function(v2,options) {
     if(v2==0){
      return options.fn(this);
    }else{
       return options.inverse(this); 
    }
})