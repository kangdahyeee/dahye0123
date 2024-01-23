$(function () {
    // ====================================== logo, btnTop 클릭시 최상단
    $(".logo, .btnTop").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });

    // ====================================== 스크롤 500px 이상 내릴때 btnTop 나타남 
    $(window).scroll(() => {
        if ($(this).scrollTop() > 500) {
            $(".btnTop").fadeIn();
        } else {
            $(".btnTop").fadeOut();
        }
    });


    // ====================================== header menu 
    // 메인 메뉴가 클릭되었는지 여부를 추적하는 새로운 변수 추가
    let isMainMenuClicked = false;

    function updateStyles(isScrolled, isHovered = false) {
        // let imgSrc = isHovered || isScrolled ? './images/main_logo.png' : './images/main_logo.png';

        let headerStyles = {
            'height': isHovered || isScrolled || isMainMenuClicked ? '160px' : '',
            'width': '100%',
            'background-color': isScrolled || isMainMenuClicked ? 'rgba(255, 255, 255, 0.8)' : (isHovered ? 'rgba(255, 255, 255, 0.8)' : '')      
        };

        $("header").css(headerStyles);
        // $("ul.searchLang li:nth-child(1) a i, ul.searchLang li:nth-child(3) a ").css('color', linkStyles.color);
        // $(".nav-list>li>a, .submenu>li>a").css(linkStyles);
    }

    $(function () {
        // 변수 추가
        let isHovered = false;

        $(window).scroll(() => {
            let scrollTop = $(window).scrollTop();
            let isScrolled = scrollTop > 160;

            let headerStyles = {
                'height': isScrolled ? '160px' : '',
                'width': '100%',
                'background-color': isScrolled ? 'rgba(255, 255, 255, 0.8)' : ''
            };
            $("header").css({
                ...headerStyles,
                'box-shadow': isScrolled ? '0 5px 5px rgba(0, 0, 0, 0.1)' : ''
            });
            updateStyles(isScrolled, isHovered);
        });
        // 대메뉴에 마우스 오버 및 아웃 이벤트 처리
        $("ul#menu, .headerInner").hover(
            () => {
                $(".submenu, .smenu_bar").stop().slideDown('fast');
                isHovered = true; // 마우스가 올라갔음을 표시
                updateStyles($(window).scrollTop() > 160, isHovered);
            },
            () => {
                $(".submenu, .smenu_bar").stop().fadeOut('fast');
                isHovered = false; // 마우스가 나갔음을 표시
                updateStyles($(window).scrollTop() > 160, isHovered);
            }
        );

        // // nav-list의 a에 hover 했을 때 a.active 색 나오도록 수정
        // $(".nav-list>li").hover(
        //     function () {
        //         $(this).find(">a").addClass("active");
        //     },
        //     function () {
        //         $(this).find(">a").removeClass("active");
        //     }
        // );

        $("ul#menu").slicknav();
    });


    $(".submenu>li>a").mouseenter(function () {
        $(this).addClass("submenu-hovered");
        $(this).css({
            "color": "#999"
        });
    });

    $(".submenu>li>a").mouseleave(function () {
        $(this).removeClass("submenu-hovered");
        $(this).css({
            "color": ""
        });
    });

    $(window).scroll(updateStyleOnScroll);

    function updateStyleOnScroll() {
        let scrollTop = $(window).scrollTop();
        let isScrolled = scrollTop > 160;

        let headerStyles = {
            'height': isScrolled ? '160px' : '',
            'width': '100%',
            'background-color': isScrolled ? 'rgba(255, 255, 255, 0.8)' : '',

        };

        $("header").css({
            ...headerStyles,
            'box-shadow': isScrolled ? '0 5px 5px rgba(0, 0, 0, 0.1)' : ''
        });

        updateStyles(isScrolled);
    }


// ====================================== 신제품 (수정필요)

$(".inner_new li").click(function () {
    let $this = $(this);
    let index = $this.index();
    $this.addClass("active");
    $this.siblings(".inner_new li.active").removeClass("active");

    let $wrap = $this.closest(".inner_new");
    let $current = $wrap.find("> .tabs > .tab.active");
    let $post = $wrap.find("> .tabs > .tab").eq(index);

    $current.removeClass("active");
    $post.addClass("active");

    $(".slider").slick("setPosition");
});

// $(".slider").slick({
//     dots: true, // 페이지 번호 표시 (true 또는 false)
//     arrows: true, // 화살표 표시 (true 또는 false)
//     slidesToShow: 1, // 보여질 슬라이드 개수

//     responsive: [{
//             breakpoint: 1025, // 화면 폭 1025px 이하일 때 적용
//             settings: {
//                 slidesToShow: 2, // 보여질 슬라이드 개수 변경
//             }
//         },

//         {
//             breakpoint: 769, // 화면 폭 769px 이하일 때 적용
//             settings: {
//                 slidesToShow: 1, // 보여질 슬라이드 개수 변경
//                 centerMode: true, // 슬라이드 중앙 정렬 활성화
//                 centerPadding: '60px', // 중앙 정렬 시 양쪽 여백 설정
//             }
//         }
//     ]
// });

});

//toggle
function openNav(){
    document.getElementById("myNav").style.width = "400px";
}
// close
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

// //popup
// $(function(){
//     $(".toggleBtn").on("click",function(){
//         $("#myNav, .mobileBg").fadeIn();
//     });
//     $(".mobileBg").on("click",function(){
//         $("#myNav, .mobileBg").fadeOut();
//     });

//     //배경 클릭시 팝업과 배경 사라짐
//     $(".mobileBg").on("click", function(){
//         $("#myNav, .mobileBg").fadeOut(); //사라짐
//     });
// });

