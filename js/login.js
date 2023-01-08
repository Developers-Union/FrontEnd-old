
// let _state = 0;
// /*
// * 0 : 未登录
// * 1 : 已登录
// */
// var _server = "";
// function req(){
//     $.ajax({
//         type : "get",
//         url : _sever,
//         async: false ,
//         data : {username:$("#username").val(),password:$("#password").val()},
//         dataType : "Boolean",
//         success : function(returnedData){
//             if (returnedData){
//                 _state = 1;
//                 alert("login success");
//                 window.location = "../index.html";
//                 var regist = document.getElmentById("register");
//                 var log = document.getElmentById("login");
//                 log.style.display = "none";
//                 regist.value = comment["username"];
//             }else{
//                 _state = 0;
//                 alert("username or password is wrong");
//             }
//         }
//     })
// }

