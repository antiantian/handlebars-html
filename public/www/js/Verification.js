function verification(){
    //文本框失去焦点 验证姓名 必须中文
    $('#name').blur(function(){
        var idCard = $('#name').val();
        if(!(/^[\u4E00-\u9FA5]{1,6}$/.test(idCard))){ 
            $('.error_msg').html('请输入持卡人中文姓名');
        }else{
            $('.error_msg').html('');
        }
    }); 
    
    //验证身份证 18位
    $('#idCard').blur(function(){
        var idCard = $('#idCard').val();
        if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard))){ 
            $('.error_msg').html('请输入正确的身份证');
        }else{
            $('.error_msg').html('');
        }
    }); 

    //验证银行卡号 16-19位
    $('#bankCard').blur(function(){
        var idCard = $('#bankCard').val();       
        if(!(/^[0-9]{16,19}$/.test(idCard))){ 
            $('.error_msg').html('请输入正确的银行卡号');
        }else{
            $('.error_msg').html('');
        }
    }); 

    //验证手机号 11位
    $('#phone').blur(function(){
        var idCard = $('#phone').val();
        if(!(/^1[34578]\d{9}$/.test(phone))){ 
            $('.error_msg').html('请输入正确的手机号');
        }else{
            $('.error_msg').html('');
        }
    }); 

    //信用卡日期格式 月/年
    $('#expirationDate').blur(function(){
        var expirationDate = $('#expirationDate').val();
        if(!(/^(?:0?\d|1[12])\/(\d{2})$/.test(expirationDate))){ 
            $('.error_msg').html('请输入正确的日期格式');
        }else{
            $('.error_msg').html('');
        }
    }); 

    //cvn2卡号背后3位
    $('#cvn2').blur(function(){
        var cvn2 = $('#cvn2').val();
        if(!(/^[0-9]{3}$/.test(cvn2))){ 
            $('.error_msg').html('请输入正确的cvn2卡号');
        }else{
            $('.error_msg').html('');
        }
    }); 

}
verification();

