
ajax("../js/详情页.json", function (str) {
    var arr = JSON.parse(str)
    // console.log(arr);
    var num = window.location.search.substring(1)
    console.log(num)
    var sh = document.getElementsByClassName("sh")[0]
    var sp = document.createElement("span")
    sp.className = 'span2'
    sp.innerHTML =
        `
        ${arr[num].title}
        `
    sh.appendChild(sp)

    for (let b = 0; b < arr[num].img.length; b++) {
        // console.log(arr[num].img)
        var sw = document.getElementsByClassName("swiper-wrapper")[0]
        var ss = document.createElement("div")
        ss.className = 'swiper-slide'
        ss.innerHTML = `
            <img src="${arr[num].img[b]}">
            `
        sw.appendChild(ss)
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
    }
    for (let c = 0; c < arr[num].list.length; c++) {

        var cate = document.getElementsByClassName("categoryGroup")[0]
        // console.log(cate)
        var qa = document.createElement("a")
        qa.className = 'qa'
        qa.innerHTML = `
            ${arr[num].list[c]}
            `
        cate.appendChild(qa)
    }
    for (let a = 0; a < arr[num].item.length; a++) {
        console.log(arr[num].item)
        var con = document.getElementsByClassName("contant")[0]
        var oDiv = document.createElement("div")
        oDiv.className = "co1"
        oDiv.innerHTML = `
                <div class="cTitle">
                            <h1>${arr[num].item[a].head}</h1>
                            <p>${arr[num].item[a].head1}</p>
                        </div>
                `
        con.appendChild(oDiv)

        var co1 = document.getElementsByClassName("co1")
        var oDiv2 = document.createElement("div")
        oDiv2.className = "cm"
        co1[a].appendChild(oDiv2)

        for (let j = 0; j < arr[num].item[a].li.length; j++) {
            var oDiv3 = document.createElement("div")
            oDiv3.className = "cm1"
            oDiv3.innerHTML = `
                   <div class="hd">
                                    <a>
                                        <div class="nih">
                                            <img
                                                src="${arr[num].item[a].li[j].img}">
                                        </div>
                                        <div class="ih">
                                            <img
                                                src="${arr[num].item[a].li[j].imgH}">
                                        </div>
                                        <img src="../img/sh.png" class="tt">
                                        <div class="ct">
                                            <div class="ctz">
                                                <span class="span1">${arr[num].item[a].li[j].title1}</span>
                                                <span class="span2">${arr[num].item[a].li[j].price}</span>
                                            </div>
                                            <div class="xg">${arr[num].item[a].li[j].time}</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="jg">
                                    <div class="kb"></div>
                                    <h4>${arr[num].item[a].li[j].sname1}</h4>
                                    <p class="pric">
                                        <span class="p1">${arr[num].item[a].li[j].price1}</span>
                                        <span class="p2">${arr[num].item[a].li[j].price2}</span>
                                    </p>
                                    <div class="desc">
                                        <hr/>
                                        <p>${arr[num].item[a].li[j].sname2}</p>
                                    </div>
                                </div>
                   `
            oDiv2.appendChild(oDiv3)
        }
    }

})