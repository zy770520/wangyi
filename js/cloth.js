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

ajax("../js/详情页.json", function (str) {
    var arr = JSON.parse(str)
    var con = document.getElementsByClassName("contant")[0]
    for (let i = 0; i < arr.length; i++) {
        for (let a = 0; a < arr[i].item.length; i++) {
            var oDiv = document.createElement("div")
            oDiv.className = "co1"
            oDiv.innerHTML = `
            <div class="cTitle">
                        <h1>${arr[i].item[a].head}</h1>
                        <p>${arr[i].item[a].head1}</p>
                    </div>
            `
            con.appendChild(oDiv)

            var co1 = document.getElementsByClassName("co1")
            var oDiv2 = document.createElement("div")
            oDiv2.className = "cm"
            co1[i].appendChild(oDiv2)

            for (let j = 0; j < arr[i].item[a].li.length; j++) {
                var oDiv3 = document.createElement("div")
                oDiv3.className = "cm1"
                oDiv3.innerHTML = `
               <div class="hd">
                                <a>
                                    <div class="nih">
                                        <img
                                            src="${arr[i].item[a].li[j].img}">
                                    </div>
                                    <div class="ih">
                                        <img
                                            src="${arr[i].item[a].li[j].imgs}">
                                    </div>
                                    <img src="../img/sh.png" class="tt">
                                    <div class="ct">
                                        <div class="ctz">
                                            <span class="span1">${arr[i].item[a].li[j].titles}</span>
                                            <span class="span2">${arr[i].item[a].li[j].txt}</span>
                                        </div>
                                        <div class="xg">${arr[i].item[a].li[j].title}</div>
                                    </div>
                                </a>
                            </div>
                            <div class="jg">
                                <div class="kb"></div>
                                <h4>${arr[i].item[a].li[j].head}</h4>
                                <p class="pric">
                                    <span class="p1">${arr[i].item[a].li[j].price}</span>
                                    <span class="p2">${arr[i].item[a].li[j].change}</span>
                                </p>
                                <div class="desc">
                                    <hr/>
                                    <p>${arr[i].item[a].li[j].foot}</p>
                                </div>
                            </div>
               `
                oDiv2.appendChild(oDiv3)
            }
        }
    }

})