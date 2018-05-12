/**
 * Created by Administrator on 2018/5/2.
 */
//点击开始游戏 --> 动态生成100个小格 -->  100个div
//leftClick  没有雷  -->  显示数字（代表以当前小格为中心周围8个格的雷数）
//扩散 （当前周围八个格没有雷）  有雷 --> game over
//rightClick  没有标记 -->  进行标记  有标记 -- > 取消标记  --> 标记是否正确。 10 个都正确标记，提示成功
//已经出现数字 --> 无效果

var startBtn = document.getElementById('btn');//5 * 5
var startBtn1 = document.getElementById('btn1');//10 * 10
var startBtn2 = document.getElementById('btn2');//15 * 15
var box = document.getElementById('box');
var box1 = document.getElementById('box1');//5 * 5
var box2 = document.getElementById('box2');//15 * 15
var flagBox = document.getElementById('flagBox');
var alertBox = document.getElementById('alertBox');
var alertImg = document.getElementById('alertImg');
var closeBtn = document.getElementById('close');
var closeBtn1 = document.getElementById('close1');
var closeBtn2 = document.getElementById('close2');
var score = document.getElementById('score');
var minesNum;
var mineOver;
var block;
var mineMap = [];
var startGameBool = true;
var k;

// 10 * 10
bindEvent();
function bindEvent(){
    startBtn.onclick = function () {
        k = 1;
        if(startGameBool){
            box.style.display = 'block';
            flagBox.style.display = 'block';
            init();
            startGameBool = false;
        }
    };
    box.oncontextmenu = function () {
        return false;
    };
    box.onmousedown = function(e){
        var event = e.target;
        if(e.which == 1){
            leftClick(event);
        }else if(e.which == 3){
            rightClick(event);
        }
    };
    closeBtn.onclick = function () {
        alertBox.style.display = 'none';
        flagBox.style.display = 'none';
        box.style.display = 'none';
        box.innerHTML = '';
        startGameBool = true;
    }
}

function init(){
    minesNum = 10;
    mineOver = 10;
    score.innerHTML = mineOver;
    for(var i = 0; i < 10; i ++){
        for(var j = 0; j < 10; j ++){
            var con = document.createElement('div');
            con.classList.add('block');
            con.setAttribute('id',i + '-' + j);
            box.appendChild(con);
            mineMap.push({mine:0});
        }
    }
    block = document.getElementsByClassName('block');
    while(minesNum){
        var mineIndex = Math.floor(Math.random() * 100);
        if(mineMap[mineIndex].mine === 0){
            mineMap[mineIndex].mine = 1;
            block[mineIndex].classList.add('isLei');
            minesNum --;
        }

    }
}

// 5 * 5
bindEvent1();
function bindEvent1(){
    startBtn1.onclick = function () {
        k = 2;
        if(startGameBool){
            box1.style.display = 'block';
            flagBox.style.display = 'block';
            init1();
            startGameBool = false;
        }
    };
    box1.oncontextmenu = function () {
        return false;
    };
    box1.onmousedown = function(e){
        var event = e.target;
        if(e.which == 1){
            leftClick(event);
        }else if(e.which == 3){
            rightClick(event);
        }
    };
    closeBtn1.onclick = function () {
        alertBox.style.display = 'none';
        flagBox.style.display = 'none';
        box1.style.display = 'none';
        box1.innerHTML = '';
        startGameBool = true;
    }
}

function init1(){
    minesNum = 5;
    mineOver = 5;
    score.innerHTML = mineOver;
    for(var i = 0; i < 5; i ++){
        for(var j = 0; j < 5; j ++){
            var con = document.createElement('div');
            con.classList.add('block');
            con.setAttribute('id',i + '-' + j);
            box1.appendChild(con);
            mineMap.push({mine:0});
        }
    }
    block = document.getElementsByClassName('block');
    while(minesNum){
        var mineIndex = Math.floor(Math.random() * 25);
        if(mineMap[mineIndex].mine === 0){
            mineMap[mineIndex].mine = 1;
            block[mineIndex].classList.add('isLei');
            minesNum --;
        }

    }
}

// 15 * 15
bindEvent2();
function bindEvent2(){
    startBtn2.onclick = function () {
        k = 3;
        if(startGameBool){
            box2.style.display = 'block';
            flagBox.style.display = 'block';
            init2();
            startGameBool = false;
        }
    };
    box2.oncontextmenu = function () {
        return false;
    };
    box2.onmousedown = function(e){
        var event = e.target;
        if(e.which == 1){
            leftClick(event);
        }else if(e.which == 3){
            rightClick(event);
        }
    };
    closeBtn2.onclick = function () {
        alertBox.style.display = 'none';
        flagBox.style.display = 'none';
        box2.style.display = 'none';
        box2.innerHTML = '';
        startGameBool = true;
    }
}

function init2(){
    minesNum = 15;
    mineOver = 15;
    score.innerHTML = mineOver;
    for(var i = 0; i < 15; i ++){
        for(var j = 0; j < 15; j ++){
            var con = document.createElement('div');
            con.classList.add('block');
            con.setAttribute('id',i + '-' + j);
            box2.appendChild(con);
            mineMap.push({mine:0});
        }
    }
    block = document.getElementsByClassName('block');
    while(minesNum){
        var mineIndex = Math.floor(Math.random() * 225);
        if(mineMap[mineIndex].mine === 0){
            mineMap[mineIndex].mine = 1;
            block[mineIndex].classList.add('isLei');
            minesNum --;
        }

    }
}

function leftClick(dom){
    var isLei = document.getElementsByClassName('isLei');
    if(dom && dom.classList.contains('isLei')){
        for(var i = 0; i < isLei.length; i ++){
            isLei[i].classList.add('show');
        }
        setTimeout(function () {
            alertBox.style.display = 'block';
            alertImg.style.backgroundImage = 'url("over.jpg")';
            //解决 游戏结束时 图片的覆盖问题
            if(k == 1){
                closeBtn1.style.display = 'none';
                closeBtn2.style.display = 'none';
            }else if(k == 2){
                closeBtn.style.display = 'none';
                closeBtn2.style.display = 'none';
            }else{
                closeBtn.style.display = 'none';
                closeBtn1.style.display = 'none';
            }
        },800)
    }else{
        var n = 0;
        var posArr = dom && dom.getAttribute('id').split('-');
        var posX = posArr && +posArr[0];
        var posY = posArr && +posArr[1];
        dom && dom.classList.add('num');
        for(var p = posX - 1; p <= posX + 1; p ++){
            for(var j = posY - 1; j <= posY + 1; j ++){
                var aroundBox = document.getElementById(p + '-' + j);
                if(aroundBox && aroundBox.classList.contains('isLei')){
                    n ++;
                }
            }
        }
        dom && (dom.innerHTML = n);
        if(n == 0){
            for(var h = posX - 1; h <= posX + 1; h ++){
                for(var m = posY - 1; m <= posY + 1; m ++){
                    var nearBox = document.getElementById(h + '-' + m);
                    if(nearBox && nearBox.length != 0){
                        if(!nearBox.classList.contains('check')){
                            nearBox.classList.add('check');
                            leftClick(nearBox);
                        }
                    }
                }
            }
        }
    }
}

function rightClick(dom){
    if(dom.classList.contains('num')){
        return;
    }
    dom.classList.toggle('flag');
    if(dom.classList.contains('isLei') && dom.classList.contains('flag')){
        mineOver --;
    }
    if(dom.classList.contains('isLei') && !dom.classList.contains('flag')){
        mineOver ++;
    }
    score.innerHTML = mineOver;
    if(mineOver == 0){
        alertBox.style.display = 'block';
        alertImg.style.backgroundImage = 'url("success.png")';
    }
}