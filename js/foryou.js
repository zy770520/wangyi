var tiao_mbod = document.getElementsByClassName("tiao_mbod")[0]
ajax("../js/foyyou.json", function (str) {
    var arr = JSON.parse(str)
    for (let i = 0; i < arr.length; i++) {
        var oa = document.createElement("a")
        oa.className = "tiao_mbod_A"
        oa.innerHTML = `
       <div class="tiao_piv">
       <img src=${arr[i].img1} alt="">
   </div>
   <div class="tiao_con">
       <div class="touxiang">
           <div class="touxiangmain">
               <img src=${arr[i].img} alt="">
           </div>
           <div class="jieshao">${arr[i].title}</div>
           <div class="jieshao1">${arr[i].txt}</div>
           <p class="timea">${arr[i].tx}</p>
       </div>
   </div>
       `
        tiao_mbod.appendChild(oa)

    }
})
// 口碑商品
var koubei_bod = document.getElementsByClassName("koubei_bod")[0]
ajax("../js/koubei.json", function (str) {
    var arr = JSON.parse(str)
    for (let i = 0; i < arr.length; i++) {
        var oa = document.createElement("a")
        oa.className = "koubei_a"
        oa.innerHTML = `
       <div class="koubei_A_img">
       <img src=${arr[i].img} alt="">
   </div>
   <div class="koubei_A_con">
       <h4>${arr[i].title} </h4>
       <p>${arr[i].tx}</p>
   </div>
       `
        koubei_bod.appendChild(oa)

    }
})
// 严选空间
$(".konjian_bd_tit li").click(function () {
    $(this).addClass("nav_A").siblings("li").removeClass("nav_A");
    $(".konjian_bd_bod").eq($(this).index()).show().siblings(".konjian_bd_bod").hide()
})
//严选时刻
$(".jj").click(function(){
    $(".vid").animate({
        "top": "-200px"
    }, function () {
        $(".video2a").first().appendTo($(".vid"))
        $(".vid").css("top", "0px")
    })
})