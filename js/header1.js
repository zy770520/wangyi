var a = -1
var bdlist = document.getElementsByClassName("uul")[0]
var oUrl =window.location.search.substring(1)
ajax("../js/头部分类 (2).json", function (str) {
    var arr = JSON.parse(str)
    for (let i = 0; i < arr.length; i++) {
        var oLi = document.createElement("li")
        oLi.className = "lli"
        if (i == 0) {
            oLi.innerHTML = `<a class="as" onclick="javascript: window.open('首页.html?')">${arr[i].title}</a>`
            bdlist.appendChild(oLi)
        } else {
            oLi.innerHTML = `<a class="a" data="${arr[i].id}">${arr[i].title}</a>`
            bdlist.appendChild(oLi)
        }
        if (i > 0 && i < 9) {
            var oDiv1 = document.createElement("div")
            oDiv1.className = "menu_xl"
            oLi.appendChild(oDiv1)
            for (let j = 0; j < arr[i].fenlei.length; j++) {
                var oDiv2 = document.createElement("div")
                oDiv2.className = "menu_xl_li"
                oDiv2.innerHTML = `
                <p> ${arr[i].fenlei[j].fenlei1}</p>
                `
                oDiv1.appendChild(oDiv2)
                a++
                for (let c = 0; c < arr[i].fenlei[j].image.length; c++) {
                    var ool = document.createElement("ol")
                    ool.className = "olem"
                    ool.innerHTML = `<em>
                <img src="${arr[i].fenlei[j].image[c]}">${arr[i].fenlei[j].fenlei2[c]}
                </em>
                `
                    oDiv2.appendChild(ool)
                }
            }
        }
    }
    $(".lli").eq(9).click(function(){
        window.open("choose.html?")
    })
    $(".lli").eq(10).click(function(){
        window.open("zc.html?")
    })
    $(".lli").eq(0).children().removeClass("as")
    $(".lli").eq(oUrl).children().removeClass("a")
    $(".lli").eq(oUrl).children().addClass("as")

})

//跳转
bdlist.onclick = function (ev) {
    var target = ev.target || ev.srcElement
    if (target.nodeName.toLowerCase() == "a") {
        var data = target.getAttribute("data")
        window.open("life.html?" + data)
    }
}



//nav-banner
setInterval(function () {
    $(".pm-center").animate({
        "top": "-10px"
    }, function () {
        $(".pm1").first().appendTo($(".pm-center"))
        $(".pm-center").css("top", "0px")
    })
}, 1000)
//回到顶部
$(".y5").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 500, function () {})
})
//吸顶效果
