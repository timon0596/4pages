$(document).ready(function () {
	$(".form").on("click", ".tab", function() {
		
		$(".form").find(".active").removeClass("active");
		$(this).addClass("active");
		$(".tabform").eq($(this).index()).addClass("active");	
	});
});
/*<input type="radio" name="sign" id="enter" checked><label for="enter" class="tab active">вход</label>
			<input type="radio" name="sign" id="reg"><label for="reg" class="tab">регистрация</label>*/