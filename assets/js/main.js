var sectionHeight = function () {
	var total = $(window).height(),
		$section = $('section').css('height', 'auto');

	if ($section.outerHeight(true) < total) {
		var margin = $section.outerHeight(true) - $section.height();
		$section.height(total - margin - 20);
	} else {
		$section.css('height', 'auto');
	}
}

$(window).resize(sectionHeight);

$(function () {
	$("section h1, section h2, section h3").each(function () {
		let parent = "nav ul:first-child";
		console.log($(this).text().toLowerCase());
		for (let i = 1; "h" + i !== this.nodeName.toLowerCase(); ++i) {
			parent += " tag-h" + i + ":last-child ul";
		}
		console.log(parent);
		$(parent).append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + "'>" + $(this).text() + "</a><ul></ul></li>");
		$(this).attr("id", $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
		$("nav ul:first-child li:first-child a").parent().addClass("active");
	});

	$("nav ul li").on("click", "a", function (event) {
		var position = $($(this).attr("href")).offset().top - 190;
		$("html, body").animate({ scrollTop: position }, 400);
		$("nav ul li a").parent().removeClass("active");
		$(this).parent().addClass("active");
		event.preventDefault();
	});

	sectionHeight();

	$('img').on('load', sectionHeight);
});
