
// 对方的id
var your_name = '牧牧';

window.addEventListener('load',function(){


    // 设置聊天内容的高度 - start
    // var my_msg = document.querySelectorAll('.my_msg');
    // for(var i = 0 ; i < my_msg.length ; i++) {
    //     my_msg[i].style.height = my_msg[i].querySelector('.msg_contine').offsetHeight + 50 + 'px';
    // }
    // var my_msg = document.querySelectorAll('.msg');
    // for(var i = 0 ; i < my_msg.length ; i++) {
    //     my_msg[i].style.height = my_msg[i].querySelector('.msg_contine').offsetHeight + 50 + 'px';
    // }
    // 设置聊天内容的高度 - end

    


    // 设置对方名字
    var your_msg = document.querySelectorAll('.chat_name');
    for(var i = 0 ; i < your_msg.length ; i++) {
        your_msg[i].innerHTML = your_name;
    }
    var your_msg = document.querySelectorAll('.msg .msg_user');
    for(var i = 0 ; i < your_msg.length ; i++) {
        your_msg[i].innerHTML = your_name;
    }
    


    change_style();

})



window.addEventListener('resize',function(){
    change_style();
})


function change_style() {
    
    

    // 设置 msg_contine 的max-width
    var msg_contine = document.querySelectorAll('.msg_contine');
    var chat_window = document.querySelector('.chat_window');
    for(var i = 0 ; i < msg_contine.length ; i++) {
        msg_contine[i].style.maxWidth = chat_window.offsetWidth * 0.63 + 'px';
    }
    


    chat_window.style.height = document.querySelector('.chat').offsetHeight * 0.9 + 'px';

}