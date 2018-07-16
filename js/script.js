var body = $('body');
$('#lien1').on('click', function () {

    var block1 = document.getElementById('block4');
    var pb1 = block1.offsetTop;

    TweenLite.to(body, 1, {
        scrollTop: pb1,
        ease: Power2.easeOut
    });
});

$('#lien2').on('click', function () {

    var block3 = document.getElementById('block3');
    var pb3 = block3.offsetTop;

    TweenLite.to(body, 1, {
        scrollTop: pb3,
        ease: Power2.easeOut
    });
});

$('#lien3').on('click', function () {

    var block2 = document.getElementById('block2');
    var pb2 = block2.offsetTop;

    TweenLite.to(body, 1, {
        scrollTop: pb2,
        ease: Power2.easeOut
    });
});

$('#lien4').on('click', function () {

    var block4 = document.getElementById('block1');
    var pb4 = block4.offsetTop;

    TweenLite.to(body, 1, {
        scrollTop: pb4,
        ease: Power2.easeOut
    });
});


// ----------
var dis = 200;
var cir = 20.1;
var speed = 0.01;
var ab, ac, bb, bc, cb, cc, db, dc, eb, ec;
var a = cir * 0;
var b = cir * 1;
var c = cir * 2;
var d = cir * 3;
var e = cir * 4;

var profile = document.querySelector('.profile');
var icon = document.querySelector('.icon');
var boot = document.querySelector('#boot');
var php = document.querySelector('#php');
var ang = document.querySelector('#ang');
var css = document.querySelector('#css');
var node = document.querySelector('#node');

var pl = profile.offsetLeft;
var pt = profile.offsetTop;
var pw = profile.offsetWidth;
var ph = profile.offsetHeight;

var axeTop = pt + (ph / 2);
var axeLeft = pl + (pw / 2);
var mit = icon.offsetHeight / 2;
var mil = icon.offsetWidth / 2;

var diam = 200;

function rotation () {

    a += speed;
    ab =  Math.cos(a) * diam;
    ac =  Math.sin(a) * diam;
    boot.style.left = axeLeft + ab - mil + 'px';
    boot.style.top = axeTop + ac - mit + 'px';

    b += speed;
    bb =  Math.cos(b) * diam;
    bc =  Math.sin(b) * diam;
    php.style.left = axeLeft + bb - mil + 'px';
    php.style.top = axeTop + bc - mit + 'px';

    c += speed;
    cb =  Math.cos(c) * diam;
    cc =  Math.sin(c) * diam;
    ang.style.left = axeLeft + cb - mil + 'px';
    ang.style.top = axeTop + cc - mit + 'px';

    d += speed;
    db =  Math.cos(d) * diam;
    dc =  Math.sin(d) * diam;
    css.style.left = axeLeft + db - mil + 'px';
    css.style.top = axeTop + dc - mit + 'px';

    e += speed;
    eb =  Math.cos(e) * diam;
    ec =  Math.sin(e) * diam;
    node.style.left = axeLeft + eb - mil + 'px';
    node.style.top = axeTop + ec - mit + 'px';
}

setInterval(function (){ rotation();}, 10);
// -----------------------------

