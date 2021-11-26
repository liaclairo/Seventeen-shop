function validate(){
            
            var password1=document.getElementById("t2").value;
            var password2=document.getElementById("t3").value;
            if (password1.length>8 || password1.length<6 ){
                alert("设置的密码不符要求！"); return false;}
                if(password1!=password2){
                    alert("确认密码与前面设置的密码不符！"); return false;}
                
               

            /*var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写         
            if(inputCode.length <= 0) { //若输入的验证码长度为0   
                alert("请输入验证码！"); //则弹出请输入验证码   
            }else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时   
                alert("验证码输入错误！@_@"); //则弹出验证码输入错误   
                createCode();//刷新验证码   */ 
                 
         //输入正确时   
                alert("注册成功！");  document.getElementById("input").value = "";//清空文本框
             return true;
        }
