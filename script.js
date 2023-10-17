$(function () {
	var doch = $(document).height();
	var winw = $(window).width();
	var winh = $(window).height();
	var max_scroll = doch - winh;

	$(window).scroll(function () {
		var current_pos = $(window).scrollTop();
		var new_left = (current_pos / max_scroll) * winw;
		$("#statusbar").css("left", new_left);
	});
});