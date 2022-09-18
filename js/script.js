$(document).ready(function () {

	//burger script================================================
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
	});
	//contiune burger script
	$('.header__link').click(function () {
		if ($('.header__burger, .header__menu').hasClass('active')) {
			$('.header__burger, .header__menu').removeClass('active');
		}
	});

	//ibg script=====================================================
	function ibg() {

		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}

	ibg();

	// tabs script ==================================================
	const tabN = $('.projects__tab.projects__tab-active').data('tab');
	$('.projects__row').hide();
	$('.projects__row.tab-' + tabN).show();

	$('.projects__tab').click(function () {
		const currentTab = $(this).data('tab');
		$('.projects__row').hide();
		$('.projects__row.tab-' + currentTab).show();

		$('.projects__tab.projects__tab-active').removeClass('projects__tab-active');
		$(this).addClass('projects__tab-active');
	});

});