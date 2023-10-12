var mainHeight = function () {
	var total = $(window).height(),
		$main = $('main').css('height', 'auto');

	if ($main.outerHeight(true) < total) {
		var margin = $main.outerHeight(true) - $main.height();
		$main.height(total - margin - 20);
	} else {
		$main.css('height', 'auto');
	}
}

//$(window).resize(mainHeight);

$(function () {
	$("main h1, main h2, main h3, main h4").each(function () {
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
		$("html, body").stop().animate({ scrollTop: position }, 400);
		event.preventDefault();
	});

	//mainHeight();

	//$('img').on('load', mainHeight);
});
