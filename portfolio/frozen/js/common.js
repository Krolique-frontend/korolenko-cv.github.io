jQuery(document).ready(function() {
    $('.btn_menu').click(function () {
        $('.nav_items').slideToggle(300);
    });
});

// Dynamically changing the margin/padding of elements on window/viewport resize
//
// let vieportWidth = window.innerWidth;
//
// document.getElementsByTagName('body')[0].onresize = function(){
//     let items = document.getElementsByClassName('item');
//     let rightCols = document.getElementsByClassName('right_cols')[0];
//     let delta = window.innerWidth - vieportWidth;
//     let initMargin, initPadding;
//
//
//     if (vieportWidth >= 320 && vieportWidth < 414) {
//         initMargin = 10;
//         initPadding = 38;
//
//         for (i = 10; i <= 20; i++) {
//             items[i].style.margin = delta / 7 + initMargin + 'px 0';
//         }
//
//         rightCols.style.paddingTop = delta/7 + initPadding + 'px';
//     }
//     else if (vieportWidth >= 414 && vieportWidth < 481) {
//         initMargin = 15;
//         initPadding = 50;
//
//         for (i = 10; i <= 20; i++) {
//             items[i].style.margin = delta / 7 + initMargin + 'px 0';
//         }
//
//         rightCols.style.paddingTop = delta/7 + initPadding + 'px';
//     }
// };
