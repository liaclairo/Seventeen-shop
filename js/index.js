window.onload=function(){
    var audio=document.getElementsByTagName('audio')[0]
    // audio.addEventListener("canplaythrough", function(){

    //     document.addEventListener('click',function(){
    //        audio.play()
    //        document.removeEventListener('click',arguments.callee)
    //     })    
      
    //     document.addEventListener('mousewheel',function(){
    //        audio.play()
    //        document.removeEventListener('mousewheel',arguments.callee)
    //     })
          
    //     document.addEventListener('touchstart',function(){
    //       //增加一个touchstart交互事件，触屏后播放音乐
    //       audio.play()
    //       //播放音频后移除touchstart事件的当前匿名函数
    //       document.removeEventListener('touchstart',arguments.callee)
    //     })
    //   })
    window.addEventListener('click',e=>{
        audio.play()
        
    })
}
