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

//$(window).resize(sectionHeight);

$(function () {
	$("section h1, section h2, section h3").each(function () {
		let parent = "nav";
		console.log($(this).text().toLowerCase());
		for (let i = 1; "h" + i !== this.nodeName.toLowerCase(); ++i) {
			parent += " .tag-h" + i + ":last-child";
		}
		parent += " > ul";
		console.log(parent);
		$(parent).append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + "'>" + $(this).text() + "</a><ul></ul></li>");
		$(this).attr("id", $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
	});

	$("nav ul li").on("click", "a", function (event) {
		var position = $($(this).attr("href")).offset().top - 190;
		$("html, body").animate({ scrollTop: position }, 400);
		event.preventDefault();
	});

	//sectionHeight();

	//$('img').on('load', sectionHeight);
});
