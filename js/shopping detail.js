// 放大镜
// 1.鼠标放在商品图上，阴影图和放大图都展示
var preview=document.querySelector('.preview')
var fangda=document.getElementById('fangda')
var fangdaImg=document.getElementById('fangdaImg')
var realImg=document.querySelector('.realImg')
console.log(preview.offsetLeft)
preview.addEventListener('mouseover',e=>{
    fangda.style.display='block'
    fangdaImg.style.display='block'
    // 2.阴影图随鼠标移动，其实就是阴影图的坐标改变
    preview.addEventListener('mousemove',e=>{
        // console.log(e.pageX,' ',e.pageY)
        var x=e.pageX-preview.offsetLeft
        var y=e.pageY-preview.offsetTop
        var halfWidth=fangda.offsetWidth/2
        // 阴影的移动距离
        var fangdaX=x-halfWidth
        var fangdaY=y-halfWidth
        // console.log(fangda.offsetLeft)
        if(fangdaX<=0  ){
            fangdaX=0
        }else if(fangdaX>=(preview.offsetWidth-fangda.offsetWidth)){
            fangdaX=preview.offsetWidth-fangda.offsetWidth
        }
        if(fangdaY<=0  ){
            fangdaY=0
        }else if(fangdaY>=400){
            fangdaY=400
        }
        fangda.style.left=fangdaX+'px'
        fangda.style.top=fangdaY+'px'
        // fangdaImg.style.left=-(x-halfWidth)*2+'px'
        // fangdaImg.style.top=-(y-halfWidth)*2+'px'
       
       // 大图片的移动距离=阴影的移动距离*大图片最大移动距离/阴影的最大移动距离
       realImg.style.left=-fangdaX*(realImg.offsetWidth-fangdaImg.offsetWidth)/(preview.offsetWidth-fangda.offsetWidth)+'px'
       realImg.style.top=-fangdaY*(realImg.offsetHeight-fangdaImg.offsetHeight)/(preview.offsetHeight-fangda.offsetHeight)+'px'
       
        
    })
    // 3.鼠标移出，隐藏阴影图和放大图
    preview.addEventListener('mouseout',e=>{
        fangda.style.display='none'
        fangdaImg.style.display='none'
    })
})
// 切换图片
var fj =document.querySelector('#fj')
var imgs=fj.querySelectorAll('img')

var bigImg=document.getElementById('big-img')
console.log(imgs)
for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',e=>{
        var src=e.target.src
        bigImg.src=src
        realImg.src=src
    })
}
// 尺码选中效果
var btns=document.querySelectorAll('.btn0')
for(let i=0;i<btns.length;i++){ 
   
    
    btns[i].addEventListener('click',e=>{
    // 如果鼠标选中的之前已经被选中，就取消高亮效果
    if(e.target.getAttribute('isSelected')==='true'){
            e.target.classList.remove('active')
            e.target.setAttribute('isSelected','false')
    }else{
         // 取消之前已经选中的，控制单选
        for(let j=0;j<btns.length;j++){
            if(btns[j].classList.contains('active')){
               btns[j].classList.remove('active')
               btns[j].setAttribute('isSelected','false')
            }
        }
        e.target.setAttribute('isSelected','true')
        e.target.classList.add('active')
    }
    console.log(e.target)
    })
    // // 鼠标放上去高亮
    // btns[i].addEventListener('mouseover',e=>{
    //     btns[i].style.borderColor='#C2625F'
    //      btns[i].addEventListener('mouseout',e=>{
    //          if(e.target.getAttribute('isSelected')==='false')
    //          {btns[i].style.borderColor='black'}   
    //      })
    //  })
}
// 看谁被选中
// function whichSelect(arr){
//     var select=[]
//     for(let i=0;i<arr.length;i++){
//         select.push(arr[i].getAttribute('isSelected'))
//     }
//     console.log(select.indexOf('true'))
//     return select.indexOf('true')
// }

//购买和购物车按钮特效
// var btn1=document.querySelector('.btn1') 
// var btn2=document.querySelector('.btn2') 
// btn1.addEventListener('mouseover',e=>{
//     btn1.style.border='3px outset #7e6368'
//     btn1.addEventListener('mouseout',e=>{
//         btn1.style.border='2px inset #7e6368'
        
//     })
// })
// btn2.addEventListener('mouseover',e=>{
//     btn2.style.border='3px outset #F3CE71'
//     btn2.addEventListener('mouseout',e=>{
//         btn2.style.border='2px inset #F3CE71'
        
//     })
// })