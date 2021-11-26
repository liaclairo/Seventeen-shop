function validate(){
            
            var password2=document.getElementById("t3").value;
           
                 if (password2.length<6 || password2.length>8 ){
                alert("密码错误，请重新输入！"); return false;}
               

            /*var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写         
            if(inputCode.length <= 0) { //若输入的验证码长度为0   
                alert("请输入验证码！"); //则弹出请输入验证码   
            }else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时   
                alert("验证码输入错误！@_@"); //则弹出验证码输入错误   
                createCode();//刷新验证码   */ 
                 
         //输入正确时   
                alert("已成功登录！");  document.getElementById("input").value = "";//清空文本框
             return true;
        }