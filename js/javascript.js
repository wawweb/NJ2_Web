//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})

    $('.multiple-items').slick({
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    })
})

//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
            $(".goTop")
            .addClass("display")
        } else{
            $(".goTop")
            .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
            scrollTop: 0
        },500)
    })
})

//mainWrap遊戲列滑動
$(function(){
    $(".typeList .typeBox").each(function(){
        if($(this).find("li").length > 4)
        {
            $(this).find(".next")
            .addClass("active");
        }

        if($(this).hasClass("hotGame"))
        {
            if($(this).find("li").length > 5)
            {
                $(this).find(".next")
                .addClass("active");
            }
            else
            {
                $(this).find(".next")
                .removeClass("active");
            }
        }
    })

    var hotN = 0;
    var slotN = 0;
    var liveN = 0;
    var sportN = 0;
    var fishN = 0;
    var boardN = 0;

    $(".typeBox .pageBtn").on("click",function(){
        var total = $(this).closest(".typeBox").find("li").length;
        var n = Math.round((total - 4) / 2 + 1);
        
        if($(this).closest(".typeBox").hasClass("hotGame"))
        {
            if($(this).hasClass("next"))
            {
                hotN ++;

                $(".typeBox.hotGame ol")
                .css("transform","translateX("+ (-563 * hotN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(hotN == n)
                {
                    hotN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                hotN --;

                $(".typeBox.hotGame ol")
                .css("transform","translateX("+ (-563 * hotN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(hotN == 0)
                {
                    hotN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("slotGame"))
        {
            if($(this).hasClass("next"))
            {
                slotN ++;

                $(".typeBox.slotGame ol")
                .css("transform","translateX("+ (-704 * slotN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(slotN == n)
                {
                    slotN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                slotN --;

                $(".typeBox.slotGame ol")
                .css("transform","translateX("+ (-704 * slotN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(slotN == 0)
                {
                    slotN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("liveGame"))
        {
            if($(this).hasClass("next"))
            {
                liveN ++;

                $(".typeBox.liveGame ol")
                .css("transform","translateX("+ (-704 * liveN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(liveN == n)
                {
                    liveN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                liveN --;

                $(".typeBox.liveGame ol")
                .css("transform","translateX("+ (-704 * liveN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(liveN == 0)
                {
                    liveN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("fishGame"))
        {
            if($(this).hasClass("next"))
            {
                fishN ++;

                $(".typeBox.fishGame ol")
                .css("transform","translateX("+ (-704 * fishN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(fishN == n)
                {
                    fishN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                fishN --;

                $(".typeBox.fishGame ol")
                .css("transform","translateX("+ (-704 * fishN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(fishN == 0)
                {
                    fishN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("sportGame"))
        {
            if($(this).hasClass("next"))
            {
                sportN ++;

                $(".typeBox.sportGame ol")
                .css("transform","translateX("+ (-704 * sportN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(sportN == n)
                {
                    sportN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                sportN --;

                $(".typeBox.sportGame ol")
                .css("transform","translateX("+ (-704 * sportN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(sportN == 0)
                {
                    sportN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("boardGame"))
        {
            if($(this).hasClass("next"))
            {
                boardN ++;

                $(".typeBox.boardGame ol")
                .css("transform","translateX("+ (-704 * boardN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(boardN == n)
                {
                    boardN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                boardN --;

                $(".typeBox.boardGame ol")
                .css("transform","translateX("+ (-704 * boardN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(boardN == 0)
                {
                    boardN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }
    })
})

//jumpWindow news 點擊展開
$(function(){
    $(".jumpWindow.news .smallTitle,.jumpWindow.rules .smallTitle").on("click",function(){
        $(this).closest(".infoBox")
        .toggleClass("active");
    })

    $(".jumpWindow.rules .allBtn").on("click",function(){
        $(".infoBox")
        .toggleClass("active");
    })
})

//.transferInfo display
$(function(){
    $('.moneyTotal').click(function(){
        $('.transferInfo').toggleClass('display');
    })
})

//gameWrap廠商遊戲切換
$(function(){
    $(".gameWrap .platformBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".gameWrap .platformBox .all").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .addClass("display");
    })

    $(".gameWrap .platformBox .liked").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .liked")
        .addClass("display");
    })

    $(".gameWrap .platformBox .boo").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .boo")
        .addClass("display");
    })

    $(".gameWrap .platformBox .pp").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .pp")
        .addClass("display");
    })

    $(".gameWrap .platformBox .gh").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .gh")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ifun").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ifun")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ag").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ag")
        .addClass("display");
    })

    $(".gameWrap .platformBox .net").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .net")
        .addClass("display");
    })

    $(".gameWrap .platformBox .mg").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .mg")
        .addClass("display");
    })

    $(".gameWrap .platformBox .evo").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .evo")
        .addClass("display");
    })

    $(".gameWrap .platformBox .evo").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .evo")
        .addClass("display");
    })

    $(".gameWrap .platformBox .relax").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .relax")
        .addClass("display");
    })

    $(".gameWrap .platformBox .tpg").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .tpg")
        .addClass("display");
    })

    $(".gameWrap .platformBox .pgs").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .pgs")
        .addClass("display");
    })

    $(".gameWrap .platformBox .png").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .png")
        .addClass("display");
    })

    $(".gameWrap .platformBox .redTiger").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .redTiger")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ygg").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ygg")
        .addClass("display");
    })

    $(".gameWrap .platformBox .bp").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .bp")
        .addClass("display");
    })

    $(".gameWrap .platformBox .pls").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .pls")
        .addClass("display");
    })

    $(".gameWrap .platformBox .redrake").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .redrake")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ftp").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ftp")
        .addClass("display");
    })

    $(".gameWrap .platformBox .elk").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .elk")
        .addClass("display");
    })

    $(".gameWrap .platformBox .qs").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .qs")
        .addClass("display");
    })

    $(".gameWrap .platformBox .rsg").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .rsg")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ely").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ely")
        .addClass("display");
    })

    $(".gameWrap .platformBox .sp").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .sp")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ava").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ava")
        .addClass("display");
    })

    $(".gameWrap .platformBox .noLimit").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .noLimit")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ha").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ha")
        .addClass("display");
    })

    $(".gameWrap .platformBox .jili").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .jili")
        .addClass("display");
    })
})

//gameWrap愛心
$(function(){
    $(".gameWrap .gameBox .love").on("click",function(){
        $(this)
        .toggleClass("active");
    })
})

//moneyList切換
$(function(){
    $(".openBtn").on("click",function(){
        $(".moneyList")
        .toggleClass("active");

        var n = $(".moneyList li").length;
        var total = Math.ceil(n / 3);

        $(".moneyList")
        .css("height","62px");

        $(".moneyList.active")
        .css("height",""+ (total * 85 + 124) +"");
    })

    $(".closeBtn").on("click",function(){
        $(".moneyList")
        .removeClass("active");

        $(".moneyList")
        .css("height","62px");
    })
})

//交易紀錄切換
$(function(){
    $(".dealRecord .topList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $(".dealRecord .applyBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//紅利會員切換
$(function(){
    $(".rightSide.point .topList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $(".point .applyBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//投注記錄開啟
$(function(){
    $(".betRecord .fakeTable .openBtn").on("click",function(){
        $(this).closest(".row")
        .toggleClass("active");
    })
})

//優惠申請切換
$(function(){
    $(".eventApply .topList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $(".eventApply .bigBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//個人資料切換
$(function(){
    $(".member .topList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $(".member .applyBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//站內信切換
$(function(){
    $(".mailBox .editBtn").on("click",function(){
        $(".mailBox .btnBox,.mailBox .mail li")
        .addClass("editing");

        $(".mailBox .btnBox .editBox")
        .addClass("display")
        .siblings("div").removeClass("display");

        $(".mailBox .btnBox .inputBox")
        .addClass("display");
    })

    $(".mailBox .editBox .check").on("click",function(){
        $(".mailBox .btnBox,.mailBox .mail li")
        .removeClass("editing");

        $(".mailBox .btnBox .normal")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".mailBox .mail div").on("click",function(){
        $(".mailBox .mailCnt")
        .addClass("display");

        $(".mailBox .mail,.mailBox .pageCnt")
        .removeClass("display");

        $(".mailBox .btnBox .backBox")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".mailBox .btnBox .backBox .backBtn").on("click",function(){
        $(".mailBox .mailCnt")
        .removeClass("display");

        $(".mailBox .mail.choose,.mailBox .pageCnt")
        .addClass("display");

        $(".mailBox .btnBox .normal")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".mailBox .post div").on("click",function(){
        $(".mailBox .postCnt,.mailBox .btnBox")
        .addClass("display");

        $(".mailBox .post,.mailBox .pageCnt")
        .removeClass("display");

        $(".mailBox .btnBox .postBackBox")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".mailBox .btnBox .postBackBox .backBtn").on("click",function(){
        $(".mailBox .postCnt,.mailBox .btnBox")
        .removeClass("display");

        $(".mailBox .post.choose,.mailBox .pageCnt")
        .addClass("display");

        $(".mailBox .btnBox .normal")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".rightSide.mail .bigBtnBox button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        $(".mailBox .mailCnt,.mailBox .postCnt")
        .removeClass("display");

        $(".mailBox .pageCnt")
        .addClass("display");

        if($(this).index() == 0)
        {
            $(".mailBox .mail.choose,.mailBox .topList:eq(0)")
            .addClass("display")
            .siblings("ul").removeClass("display");

            $(".mailBox .btnBox")
            .addClass("display");

            $(".mailBox .btnBox .normal")
            .addClass("display")
            .siblings().removeClass("display");

            $(".mailBox .btnBox,.mailBox .mail li")
            .removeClass("editing");
        }
        else
        {
            $(".mailBox .post.choose,.mailBox .topList:eq(1)")
            .addClass("display")
            .siblings("ul").removeClass("display");

            $(".mailBox .btnBox")
            .removeClass("display");
        }
    })

    $(".mailBox .topList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        if($(".mailBox .mail").hasClass("display"))
        {
            $(".mailBox .mail:eq("+ n +")")
            .addClass("choose display")
            .siblings(".mail").removeClass("choose display");
        }
        else if($(".mailBox .post").hasClass("display"))
        {
            $(".mailBox .post:eq("+ n +")")
            .addClass("choose display")
            .siblings(".post").removeClass("choose display");
        }
        else if($(".mailBox .mailCnt").hasClass("display"))
        {
            $(".mailBox .mail:eq("+ n +")")
            .addClass("choose display")
            .siblings(".mail").removeClass("choose display");

            $(".mailBox .mailCnt")
            .removeClass("display");

            $(".mailBox .btnBox .normal")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(".mailBox .postCnt").hasClass("display"))
        {
            $(".mailBox .post:eq("+ n +")")
            .addClass("choose display")
            .siblings(".mail").removeClass("choose display");

            $(".mailBox .postCnt")
            .removeClass("display");
        }
    })
})

//優惠頁切換
$(function(){
    $(".eventWrap .listBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//help
$(function(){
    $(".help .moreList li .smallTitle").on("click",function(){
        $(this).closest("li")
        .toggleClass("active");
    })
    $(".help .moreList .allBtn").on("click",function(){
        $(this)
        .siblings("li").toggleClass("active");
    })

    $(".help .leftSide li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass('active')
        
        $(this).next(".innerBox")
        .addClass("display")
        .siblings(".innerBox").removeClass("display");

        if($(this).hasClass("new"))
        {
            $(".help .rightSide.new")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("often"))
        {
            $(".help .rightSide.often")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("about"))
        {
            $(".help .rightSide.about")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })

    $(".help .innerBox.often button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".help .rightSide.often .helpInfo:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".help .innerBox.about button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".help .rightSide.about .helpInfo:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//deposit
$(function(){
    $(".depList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })
    $(".jumpWindow.betWindow .enterGame button").click(function(){
        $('.filter')
        .removeClass('display');
    })

    $(".unLogin").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");
        $(".filter,.plsGo")
        .addClass("display");
    })

    $(".openNews").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");
        $(".filter,.news")
        .addClass("display");
    })

    $(".forget").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.forgetPassword')
        .addClass('display');
    })

    $(".callSlot").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.slotGame')
        .addClass('display');
    })

    $(".callLive").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.liveGame')
        .addClass('display');
    })

    $(".callBoard").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.boardGame')
        .addClass('display');
    })

    $(".callFish").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.fishGame')
        .addClass('display');
    })

    $(".callSport").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.sportGame')
        .addClass('display');
    })

    $(".rightSide.eventApply .checkEvent").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.applyWindow')
        .addClass('display');
    })

    $(".rightSide.eventApply .applyEvent").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".eventWrap .eventBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.eventWindow')
        .addClass('display');
    })

    $(".eventWindow .eventCheck").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".rightSide.dealRecord .waterBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.waterRecord')
        .addClass('display');
    })
    
    $(".rightSide.dealRecord .recordBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.recordWindow')
        .addClass('display');
    })

    $(".rightSide.point .pointCheck").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.pointWindow')
        .addClass('display');
    })

    $(".rightSide.point .partnerCheck").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.pointPartner')
        .addClass('display');
    })

    $(".register .getCode").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".register .ruleBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.rules')
        .addClass('display');
    })

    $(".rightSide.member .changePwdBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.changePassword')
        .addClass('display');
    })

    $(".rightSide.member .check_ic").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".rightSide.member .nocheck_ic").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.changePhone')
        .addClass('display');
    })

    $(".help .rightSide .sendBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $("header .agent button,.agentWrap .agentCenter button").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.agentRegister')
        .addClass('display');
    })

    $(".agentRegister .bottom p").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.rules')
        .addClass('display');
    })

    $(".register .btnBox .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo_2')
        .addClass('display');
    })
})

//agent
$(function(){
    var arr = [];
    var i = 0;
    $("header .gameNav.forAgent li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index() - 1;

        $("main>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".rule .box .smallTitle").each(function(){
            var ori = $(".rule .rightSide").offset().top;
            arr[i] = $(this).offset().top - ori - 37;

            i ++;
        })
    })

    $(".agentHelp .leftSide li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $('.agentHelp.rule .leftSide li').click(function(){
        var n = $(this).index();
        var target = $(".rule .box:eq("+ n +") .smallTitle").offset().top - 36;
        var ori = $(".rule .rightSide").offset().top;
        var scrollVal = $(".rule .rightSide").scrollTop();

        $(".rule .rightSide").animate({
            scrollTop: target - ori + scrollVal,
        },300)
    });

    $('.agentHelp.normal .leftSide li').click(function(){
        var n = $(this).index();
        var target = $(".normal .lineTitle:eq("+ n +")").offset().top - 10;
        var ori = $(".normal .rightSide").offset().top;
        var scrollVal = $(".normal .rightSide").scrollTop();

        $(".normal .rightSide").animate({
            scrollTop: target - ori + scrollVal,
        },300)
    });

    $(function(){
        $(".rule .rightSide").scroll(function () {
            var scrollVal = $(this).scrollTop();
            if(scrollVal >= arr[3])
            {
                $(".leftSide li:eq(3)")
                .addClass("active")
                .siblings().removeClass("active");
            }
            else if(scrollVal >= arr[2])
            {
                $(".leftSide li:eq(2)")
                .addClass("active")
                .siblings().removeClass("active");
            }
            else if(scrollVal >= arr[1])
            {
                $(".leftSide li:eq(1)")
                .addClass("active")
                .siblings().removeClass("active");
            }
            else if(scrollVal >= arr[0])
            {
                $(".leftSide li:eq(0)")
                .addClass("active")
                .siblings().removeClass("active");
            }
        })
    })
})