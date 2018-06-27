$(document).ready(function(){
		var width = 0;
		$('#next').click(function(){
			if (width > -1684) {
				$('#sli1').animate({left:"-=842"}, 'slow');
				width -= 842;
			}
			else if (width > -1944) {
				$('#sli1').animate({left:"-=260"}, 'slow');
				width -= 260;
			}
			if (width == -842) {
				$(".preview").css("display", "block");
			}
			if (width == -1944) {
				$(".ne").css("display", "none");
			}
    	});
		$('#pre').click(function(){
			if (width < -260) {
				$('#sli1').animate({left:"+=842"}, 'slow');
				width += 842;
			}
			else if (width == -260) {
				$('#sli1').animate({left:"+=260"}, 'slow');
				width += 260;
			}
			if (width == -1102) {
				$(".ne").css("display", "block");
			}
			if (width == 0) {
				$(".preview").css("display", "none");
			}
    	});
		$(".img>img").click(function() {
			$(".box2").css("display","block");
			$(".box1").css("display","block");
			var src = $(this).attr("src");
			var src_new = src.replace("small","big");
			document.getElementById("big").src = src_new;
			var tenhinh = src.replace("images/small/","");
			document.getElementById("h2").innerHTML = tenhinh;
		})
		
		$(".box2").click(function() {
			$(this).css("display","none");
			$(".box1").css("display","none");
		})
	});