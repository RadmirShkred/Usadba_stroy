
$( document ).ready(function() {


		if($(window).width() > 1280) {
			$('.s4_wrapper').slick({
				rows: 2,
				slidesPerRow: 3,
				slidesToShow: 1,
				slidesToScroll: 1,
  				dots: true,
  				infinite: false,
				responsive: [ {
				    breakpoint: 1280,
				    settings: {
				    	rows: 1,
						slidesPerRow: 1,
						slidesToShow: 1,
						slidesToScroll: 1
				    }
				}
				]
			});

		} else {
		$('.s4_wrapper').slick({
			rows: 1,
			slidesPerRow: 1,
			slidesToShow: 1,
			slidesToScroll: 1,
  			dots: true,
  			infinite: true,
			responsive: [ {
			    breakpoint: 1280,
			    settings: {
			    	rows: 1,
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1
			    }
			}
			]
		});
		}


	if($(window).width() > 1280) {
		$('.s4_wrapper').addClass('flex-block');
	}

	$(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
        	$('.header').addClass('header_fixed');
        }
        if ($(window).scrollTop() < 100) {
        	$('.header').removeClass('header_fixed')
        }
 	});


	/* Модалка */

	/* Прячем модалку */
	$('.modal').hide();

	/* При нажатии на элемент открывается модалка */
	$('.head_call_me, .book-call, .button-call').on('click', function() {
		$('.modal').fadeIn(300);
		$('.modal_bg').css("display", "flex");
	});

	/* Вкладываем в скрытый инпут название блока, по которому произведено нажатие */
	$('.request1').on('click', function(){
		$('.modal').fadeIn(300);
		$('.modal_bg').css("display", "flex");
		let text = $(this).siblings('.item_descr').text();
		$('#hidden').val(text);
	});
	$('.request2').on('click', function(){
		$('.modal').fadeIn(300);
		$('.modal_bg').css("display", "flex");
		let text = $(this).siblings('.item_descr1').text();
		$('#hidden').val(text);
	});
	$('.request3').on('click', function(){
		$('.modal').fadeIn(300);
		$('.modal_bg').css("display", "flex");
		let text = $(this).siblings('.item_descr1').text();
		$('#hidden').val(text);
	});
	$('.request4').on('click', function(){
		$('.modal').fadeIn(300);
		$('.modal_bg').css("display", "flex");
		let text = $(this).siblings('.item_descr1').text();
		$('#hidden').val(text);
	});
	$('.request5').on('click', function(){
		$('.modal').fadeIn(300);
		$('.modal_bg').css("display", "flex");
		let text = $(this).siblings('.item_descr1').text();
		$('#hidden').val(text);
	});

	/* При нажатии не по блоку - прячем модалку */
	$(document).mouseup(function (e){ // событие клика по веб-документу
     	var div = $(".modal");
        var bg = $(".modal_bg");
        var close = $(".icon_close"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
           && div.has(e.target).length === 0 && bg.is(e.target) || close.is(e.target)) { // и не по его дочерним элементам
           	$('.modal').fadeOut(300);
        	$('.modal_bg').fadeOut(300);
        	/*if ($('.obratnii').hasClass('zamershik')) {
				$('.obratnii').removeClass('zamershik');
				$('.obratnii').html('Обратный звонок');
			}*/
        }
    });

	/* Делаем хедер fixed */
	$(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
        	$('.phone_menu').addClass('phone_menu_active');
        	$('.phone_menu_white').addClass('phone_menu_white_a');
        }
        if ($(window).scrollTop() < 100) {
        	$('.phone_menu').removeClass('phone_menu_active');
        	$('.phone_menu_white').removeClass('phone_menu_white_a')
        }
 });

	/* Боковая менюшка адаптив */
	$('.menu_bg').hide();
	$('.phone_menu').on('click', function(){
		$('.left_menu').addClass('menu_active');
		$('.left_menu').removeClass('nonactive');
		$('.menu_bg').fadeIn();
	});

	/* Закрыть левое меню */
	$(document).mouseup(function (e){ // событие клика по веб-документу
     	var div = $(".left_menu");
        if (!div.is(e.target) // если клик был не по нашему блоку
           && div.has(e.target).length === 0) { // и не по его дочерним элементам
           $('.left_menu').addClass('nonactive');
       		$('.menu_bg').fadeOut();
        }
    });

    $('.menu_close').on('click', function(){
    	$('.left_menu').addClass('nonactive');
       	$('.menu_bg').fadeOut();
    });


    $(".header_menu a, .the_left_menu a, .first_screen a").on("click", function (e) {
    	$('.left_menu').addClass('nonactive');
       	$('.menu_bg').fadeOut();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 777);
		e.preventDefault();
		return false;
	});

	/* Политика конфиденциальности */
	$('.putting_button span, .s5_book_call div:nth-child(3)').on('click', function(){
		$('.empty1').css("display", "flex");
		$('.modal_bg2').css("display", "flex");
	});

	$('.our_advantages').on('click', function(){
		$('.empty2').css("display", "flex");
		$('.modal_bg3').css("display", "flex");
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".empty1"); // тут указываем ID элемента
        let bg = $('.modal_bg2');
       	if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 && bg.is(e.target)) { // и не по его дочерним элементам
        $('.empty1').fadeOut(300);
        $('.modal_bg2').fadeOut(300);
        }
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".empty2"); // тут указываем ID элемента
        let bg = $('.modal_bg3');
       	if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 && bg.is(e.target)) { // и не по его дочерним элементам
        $('.empty2').fadeOut(300);
        $('.modal_bg3').fadeOut(300);
        }
    });

    $('.icon_close1').on('click', function() {
		$('.empty1').fadeOut(300);
		$('.modal_bg2').fadeOut(300);
	});

	$('.icon_close2').on('click', function() {
		$('.empty2').fadeOut(300);
		$('.modal_bg3').fadeOut(300);
	});


	/* AJAX ОТПРАВКА ПИСЬМА */

			$(".s6_main_modal").on("submit", function(eo){
			eo.preventDefault();

			if ($('#phone').val().length < '2') {
    			alert('Не все поля заполнены, заявка не оставлена');
    		} else {
				var $that = $(this);
				var $formData = new FormData($that.get(0));
				jQuery.ajax({
					url: $that.attr("action"),
					type: $that.attr("method"),
					contentType: false,
					processData: false,
					data: $formData,
					dataType: "text", //"json",
					success: function(data) {
						  //$('.modal-message').fadeIn();
						$('.s6_main_modal input').val('');
						$('form')[ 0 ].reset();
						$('.modal').fadeOut(300);
						$('.modal_bg').fadeOut(300);
						$('#submit').val('ОТПРАВИТЬ ЗАЯВКУ');
						  alert('Ваша заявка успешно отправлена!');
					},
				});
			};
    	});

			$(".s5_book_call").on("submit", function(eo){
			eo.preventDefault();

			if ($('.your_phone').val().length < '2') {
    			alert('Не все поля заполнены, заявка не оставлена');
    		} else {
				var $that = $(this);
				var $formData = new FormData($that.get(0));
				jQuery.ajax({
					url: $that.attr("action"),
					type: $that.attr("method"),
					contentType: false,
					processData: false,
					data: $formData,
					dataType: "text", //"json",
					success: function(data) {
						  //$('.modal-message').fadeIn();
						$('.s6_main_modal input').val('');
						$('form')[ 0 ].reset();
						$('.modal').fadeOut(300);
						$('.modal_bg').fadeOut(300);
						$('#submit').val('ОТПРАВИТЬ ЗАЯВКУ');
						  alert('Ваша заявка успешно отправлена!');
					},
				});
			};
    	});


			

//
});