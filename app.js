var cart = 0;
var main = function () {
	$(".add").on("click", function () {
		$('button').html("CART: "+ cart);
		cart +=1;
	});
}
$(document).ready(main);

