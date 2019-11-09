//banner轮播图
var swiper = new Swiper('.banner-center', {
    autoplay: {
        delay: 1000
    },
    loop: true,
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

//新品首发
var lbt = document.getElementsByClassName("lbt")[0]
console.log(lbt)
ajax("../js/新品首发.json", function (str) {
    var arr = JSON.parse(str)
    for (var i = 0; i < arr.length; i++) {
        var oDiv = document.createElement("div")
        oDiv.className = "product"
        oDiv.innerHTML = `
         <div class="hd">
                            <a>
                                <div class="nih">
                                    <img src="${arr[i].img1}">
                                </div>
                                <div class="ih">
                                <img src="${arr[i].imgHover}">
                                </div>
                                <img src="../img/sh.png" class="tt" />
                            </a>
                        </div>
                        <div class="jg">
                            <div class="kb"></div>
                            <h4>${arr[i].h4}</h4>
                            <p>￥${arr[i].price}</p>
                        </div>
         `
        lbt.appendChild(oDiv)
    }
})
var num = 0
$(".sc-lun .bu1").click(function () {
    if (num == 0) {
        num = 3
    } else {
        num--
    }
    $(".product").last().appendTo($(".lbt"))
    console.log($(".lbt"))
    $(".lbt").css("left", "-1100px").animate(1000, function () {
        $(this).animate({
            "left": "0px"
        })
    })
})
$(".sc-lun .bu2").click(function () {
    if (num == 3) {
        num = 0
    } else {
        num++
    }
    $(".lbt").animate({
        "left": "-1100px"
    }, function () {
        $(this).css("left", 0)
    })
    $(".product").first().appendTo($(".lbt"))
})
//人气推荐
var renqi = document.getElementsByClassName("renqi_bod")[0]
console.log(renqi)
ajax("../js/人气推荐.json", function (str) {
    var arr = JSON.parse(str)
    for (var i = 0; i < arr.length; i++) {
        var oDiv = document.createElement("div")
        oDiv.className = "reqi_body_B"
        oDiv.innerHTML = `
                        <div class="Bs">
                        <div class="At2"><img src="${arr[i].img}"> 
                        </div>
                        <img src="../img/sh.png" class="yx">
                        <div class="ct">
                            <div class="ctz">
                                <span class="span1">超级疯抢</span>
                                <span class="span2">¥${arr[i].price}起</span>
                            </div>
                            <div class="xg">${arr[i].txts}</div>
                        </div>
                    </div>
                    <div class="Bx">
                        <div class="cj">
                            <span class="span1">${arr[i].txt1}</span>
                            <h4 class="h4">${arr[i].tit}</h4>
                            <p class="pe">￥${arr[i].price1}</p>
                        </div>
                    </div>
             `
        renqi.appendChild(oDiv)
    }
})
//限时购
var flashItemList = document.getElementsByClassName("flashItemList")[0]
console.log(renqi)
ajax("../js/限时购.json", function (str) {
    var arr = JSON.parse(str)
    for (var i = 0; i < arr.length; i++) {
        var oDiv = document.createElement("div")
        oDiv.className = "l1"
        oDiv.innerHTML = `
        <div class="lt">
        <img src="${arr[i].img}">
    </div>
    <div class="rt">
        <h2 class="itemName">${arr[i].title}</h2>
        <p>${arr[i].txt}</p>
        <div class="jdt">
            <div class="numBar">
               <div class="numBarIn"></div>
            </div>
            <div class="numTips">${arr[i].js}</div>
        </div>
        <div class="itemPrice">
            <span class="aPrice">
                限时价
                <span class="aPriceIn">￥${arr[i].price}</span>
            </span>
            <span class="oPrice"><span class="oPriceIn">${arr[i].price1}</span></span>
        </div>
        <a>立即抢购</a>
    </div>
             `
        flashItemList.appendChild(oDiv)
    }
})
//运动旅行
var center = document.getElementsByClassName("it-center1")[0]
console.log(center)
ajax("../js/lv.json", function (str) {
    var arr = JSON.parse(str)
    for (var i = 0; i < arr.length; i++) {
        var oDiv = document.createElement("div")
        oDiv.className = " pp"
        oDiv.innerHTML = `
        <div class="hd">
                            <a>
                                <div class="nih">
                                    <img  src="${arr[i].img}">
                                </div>
                                <div class="ih">
                                    <img src="${arr[i].img1}">
                                </div>
                                <img src="../img/sh.png" class="tt" />
                                <div class="ct">
                                    <div class="ctz">
                                        <span class="span1">${arr[i].title}</span>
                                        <span class="span2">${arr[i].txt}起</span>
                                    </div>
                                    <div class="xg">${arr[i].txts}</div>
                                </div>
                            </a>
                        </div>
                        <div class="jg">
                            <div class="kb"></div>
                            <h4>${arr[i].tit}</h4>
                            <p>￥${arr[i].price}</p>
                        </div>
             `
        center.appendChild(oDiv)
    }
})
//数码
var center2 = document.getElementsByClassName("it-center2")[0]
console.log(center)
ajax("../js/sm.json", function (str) {
    var arr = JSON.parse(str)
    for (var i = 0; i < arr.length; i++) {
        var oDiv = document.createElement("div")
        oDiv.className = " pp"
        oDiv.innerHTML = `
        <div class="hd">
                            <a>
                                <div class="nih">
                                    <img  src="${arr[i].img}">
                                </div>
                                <div class="ih">
                                    <img src="${arr[i].img1}">
                                </div>
                                <img src="../img/sh.png" class="tt" />
                                <div class="ct">
                                    <div class="ctz">
                                        <span class="span1">${arr[i].title}</span>
                                        <span class="span2">${arr[i].txt}起</span>
                                    </div>
                                    <div class="xg">${arr[i].txts}</div>
                                </div>
                            </a>
                        </div>
                        <div class="jg">
                            <div class="kb"></div>
                            <h4>${arr[i].tit}</h4>
                            <p>￥${arr[i].price}</p>
                        </div>
             `
        center2.appendChild(oDiv)
    }
})
//全球
var center3 = document.getElementsByClassName("it-center3")[0]
ajax("../js/qq.json", function (str) {
    var arr = JSON.parse(str)
    for (var i = 0; i < arr.length; i++) {
        var oDiv = document.createElement("div")
        oDiv.className = " pp"
        oDiv.innerHTML = `
        <div class="hd">
                            <a>
                                <div class="nih">
                                    <img  src="${arr[i].img}">
                                </div>
                                <div class="ih">
                                    <img src="${arr[i].img1}">
                                </div>
                                <img src="../img/sh.png" class="tt" />
                                <div class="ct">
                                    <div class="ctz">
                                        <span class="span1">${arr[i].title}</span>
                                        <span class="span2">${arr[i].txt}起</span>
                                    </div>
                                    <div class="xg">${arr[i].txts}</div>
                                </div>
                            </a>
                        </div>
                        <div class="jg">
                            <div class="kb"></div>
                            <h4>${arr[i].tit}</h4>
                            <p>￥${arr[i].price}</p>
                        </div>
             `
        center3.appendChild(oDiv)
    }
})
//大家都在说
var swiper2 = new Swiper('.lbt2', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        }
})

$(".y5").click(function(){
    $("html,body").animate({scrollTop:0},500,function(){
    })
})

