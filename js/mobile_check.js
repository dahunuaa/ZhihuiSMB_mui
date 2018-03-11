    function validatemobile(mobile) 
       { 
           if(mobile.length==0) 
           { 
              alert('please enter mobile number！'); 
              document.getElementById("mobile").focus(); 
              return false; 
           }     
           if(mobile.length!=11) 
           { 
               alert('mobile number illegal！'); 
               document.getElementById("mobile").focus(); 
               return false; 
           } 
//          
//         var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
//         if(!myreg.test(mobile)) 
//         { 
//             alert('请输入有效的手机号码！'); 
////             document.form1.mobile.focus(); 
//             return false; 
//         } 
       } 