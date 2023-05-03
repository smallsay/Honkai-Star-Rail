
// 对方的id
var your_name = '娜塔莎';


// 前面有空格是自己说话，没空格是对方说话
var all_msg = [
    '在吗？',
    ' 我在',
    '最近地火发现一批形迹可疑的陌生人，在镇子里游荡，希儿将他们打晕了，从他们身上搜出了一张纸条',
    ' 纸条？',
    '对，只有一张纸条，上面是一句意义不明的话：v我50',
    '对此你有什么头绪吗？',
    ' ...我想我大概知道是什么回事了，这事交给我',
]





var temp_my_msg = null;
var temp_your_msg = null;

function set_msg() {
    var msg_end = document.querySelector('.msg_end');
    var chat_window = document.querySelector('.chat_window');
    
    
    chat_window.innerHTML = '';
    
    for (var i = 0 ; i < all_msg.length ; i++) {
        var msg_str = '';
        var temp_msg = null;
        if (all_msg[i][0] == ' ') {
            msg_str = all_msg[i].substring(1);
            temp_msg = temp_my_msg.cloneNode(true);
            
        }else {
            msg_str = all_msg[i];
            temp_msg = temp_your_msg.cloneNode(true);
        }
        temp_msg.querySelector('.msg_contine').innerHTML = msg_str;
        chat_window.appendChild(temp_msg);
    }
    chat_window.appendChild(msg_end);
}






window.addEventListener('load',function(){

   
    var my_msg = document.querySelector('.my_msg');
    var your_msg = document.querySelector('.msg');
  
    temp_my_msg = my_msg.cloneNode(true);
    temp_your_msg = your_msg.cloneNode(true);


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

    set_msg();
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



// 设置聊天记录模块
window.addEventListener('load',function(){

    // hide button
    var hide_button = document.querySelector('.set_text .hide');
    hide_button.addEventListener('click',function(){
        console.log(hide_button.parentElement.style.transform)
        
        if(hide_button.parentElement.style.transform != '' ) {
            hide_button.parentElement.style.transform =  ""; 
            hide_button.parentElement.style.opacity =  "1"; 
        }else {
            hide_button.parentElement.style.transform =  "translateY(-90%)"; 
            hide_button.parentElement.style.opacity =  "0"; 
        }
    })

    var all_text = document.querySelector('.set_text textarea');
    this.setInterval(function(){
        
        var temp = all_text.value.split('\n');
        
        
        all_msg = []
        for(var i = 0 ; i < temp.length ; i++) {
            if(temp[i]=='') continue;
            else {
                all_msg.push(temp[i])
            }
        }

        set_msg();
        
        var your_msg = document.querySelectorAll('.msg .msg_user');
        for(var i = 0 ; i < your_msg.length ; i++) {
            your_msg[i].innerHTML = your_name;
        }
    },1000)

})
