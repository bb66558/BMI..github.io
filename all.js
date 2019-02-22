var send = document.querySelector('.send');
var list = document.querySelector('.list');
var del = document.querySelector('.del');
var deta = JSON.parse(localStorage.getItem('thing')) || [];
update(deta);


function add(e) {
    var height = document.querySelector('.hei').value;
    var width = document.querySelector('.wid').value;
    var BMI = width / ((height / 100) * (height / 100));
    var time = new Date();
    var year = time.getFullYear();
    var mon = time.getMonth() + 1;
    var day = time.getDay();
    if (day.toString().length == 1) {
        day = "0" + day;
    };
    if (mon.toString().length == 1) {
        mon = "0" + mon;
    };
    BMI = Math.round(BMI * 10) / 10;
    var h = { hei: height, wid: width, body: BMI, toyear: year, tomonth: mon, today: day };
    deta.push(h);
    var detastring = JSON.stringify(deta);
    localStorage.setItem('thing', detastring);
    update(deta);
    /* change(deta);*/
}

send.addEventListener('click', add, false);

/*function change(items) {
    var len = items.length;
    for (i = 0; i < len; i++) {
        if (items[i].body >= 35) {

        }
    }
}*/


function update(items) {
    var str = '';
    var len = items.length;
    for (i = 0; i < len; i++) {
        if (items[i].body >= 35) {
            str += '<li style = "border-left:5px solid #FF1200">' + '<b>重度肥胖</b>' + '<span>BMI</span>' + '<strong>' + items[i].body + '</strong>' + '<span>weight</span>' + '<strong>' + items[i].wid + 'kg</strong>' + '<span>height</span>' + '<strong>' + items[i].hei + 'cm</strong>' + '<span>' + items[i].tomonth + '-' + items[i].today + '-' + items[i].toyear + '</span>' + '</li>';
        } else if (items[i].body < 35 && items[i].body >= 30) {
            str += '<li style = "border-left:5px solid #FF6C02">' + '<b>中度肥胖</b>' + '<span>BMI</span>' + '<strong>' + items[i].body + '</strong>' + '<span>weight</span>' + '<strong>' + items[i].wid + 'kg</strong>' + '<span>height</span>' + '<strong>' + items[i].hei + 'cm</strong>' + '<span>' + items[i].tomonth + '-' + items[i].today + '-' + items[i].toyear + '</span>' + '</li>';

        } else if (items[i].body < 30 && items[i].body >= 27) {
            str += '<li style = "border-left:5px solid #FF6C02">' + '<b>輕度肥胖</b>' + '<span>BMI</span>' + '<strong>' + items[i].body + '</strong>' + '<span>weight</span>' + '<strong>' + items[i].wid + 'kg</strong>' + '<span>height</span>' + '<strong>' + items[i].hei + 'cm</strong>' + '<span>' + items[i].tomonth + '-' + items[i].today + '-' + items[i].toyear + '</span>' + '</li>';
        } else if (items[i].body < 27 && items[i].body >= 24) {
            str += '<li style = "border-left:5px solid #FF982D">' + '<b>過重</b>' + '<span>BMI</span>' + '<strong>' + items[i].body + '</strong>' + '<span>weight</span>' + '<strong>' + items[i].wid + 'kg</strong>' + '<span>height</span>' + '<strong>' + items[i].hei + 'cm</strong>' + '<span>' + items[i].tomonth + '-' + items[i].today + '-' + items[i].toyear + '</span>' + '</li>';
        } else if (items[i].body < 24 && items[i].body >= 18.5) {
            str += '<li style = "border-left:5px solid #86D73F">' + '<b>理想</b>' + '<span>BMI</span>' + '<strong>' + items[i].body + '</strong>' + '<span>weight</span>' + '<strong>' + items[i].wid + 'kg</strong>' + '<span>height</span>' + '<strong>' + items[i].hei + 'cm</strong>' + '<span>' + items[i].tomonth + '-' + items[i].today + '-' + items[i].toyear + '</span>' + '</li>';
        } else if (items[i].body < 18.5) {
            str += '<li style = "border-left:5px solid #31BAF9">' + '<b>過輕</b>' + '<span>BMI</span>' + '<strong>' + items[i].body + '</strong>' + '<span>weight</span>' + '<strong>' + items[i].wid + 'kg</strong>' + '<span>height</span>' + '<strong>' + items[i].hei + 'cm</strong>' + '<span>' + items[i].tomonth + '-' + items[i].today + '-' + items[i].toyear + '</span>' + '</li>';
        } else { return };

    }
    list.innerHTML = str;

}

del.addEventListener('click', dele, false);

function dele(e) {
    e.preventDefault();
    for (var i = 0; i < deta.length; i++) {
        deta.splice(0, deta.length);
        var detastring = JSON.stringify(deta);
        localStorage.setItem('thing', detastring);
        update(deta);
    }
}