var oUl = document.getElementsByClassName("ul2")[0]
console.log(oUl)
ajax("../js/众筹.json", function (str) {
    var arr = JSON.parse(str)
    for (let i = 0; i < arr.length; i++) {
        var oLi = document.createElement("li")
        oLi.className = "m-item"
        oLi.innerHTML = `
        <div class="m-img">
                        <img src="${arr[i].img}">
                    </div>
                    <div class="m-text">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].txts}</p>
                        <div class="mt2">
                            <div class="line">
                                <div class="line2"></div>
                            </div>
                            <span class="bai">${arr[i].txt}%</span>
                            <ul>
                                <li>
                                    <p>￥${arr[i].price}</p>
                                    <p>已筹金额</p>
                                </li>
                                <li>
                                    <p>${arr[i].txt1}</p>
                                    <p>支持人数</p>
                                </li>
                                <li>
                                    <p>${arr[i].price1}</p>
                                    <p>剩余时间</p>
                                </li>
                            </ul>
                        </div>
                    </div>
        `
        oUl.appendChild(oLi)
    }
})

var oUl2 = document.getElementsByClassName("ul3")[0]
console.log(oUl2)
ajax("../js/结束zc.json", function (str) {
    var arr = JSON.parse(str)
    for (let i = 0; i < arr.length; i++) {
        var oLi1 = document.createElement("li")
        oLi1.className = "m-item"
        oLi1.innerHTML = `
        <div class="m-img">
                        <img src="${arr[i].img}">
                    </div>
                    <div class="m-text">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].txts}</p>
                        <div class="mt2">
                            <div class="line">
                                <div class="line2"></div>
                            </div>
                            <span class="bai">${arr[i].txt}%</span>
                            <ul>
                                <li>
                                    <p>￥${arr[i].price}</p>
                                    <p>已筹金额</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
        `
        oUl2.appendChild(oLi1)
    }
})