// eachTextAnime縺ｫappeartext縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ莉倥￠繧句ｮ夂ｾｩ
function EachTextAnimeControl() {
	$('.eachTextAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appeartext");

		} else {
			$(this).removeClass("appeartext");
		}
	});
}

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
	EachTextAnimeControl();/* 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ逕ｨ縺ｮ髢｢謨ｰ繧貞他縺ｶ*/
});// 縺薙％縺ｾ縺ｧ逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ

// 逕ｻ髱｢縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).on('load', function () {
	//span繧ｿ繧ｰ繧定ｿｽ蜉�縺吶ｋ
	var element = $(".eachTextAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	EachTextAnimeControl();/* 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ逕ｨ縺ｮ髢｢謨ｰ繧貞他縺ｶ*/
});// 縺薙％縺ｾ縺ｧ逕ｻ髱｢縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ