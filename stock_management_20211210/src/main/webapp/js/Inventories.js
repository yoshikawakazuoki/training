/**
 * javascript for Inventories (棚卸機能)
 */

//棚卸機能

$(function() {

	$('a[id=Inventories]').click(function() {
		$('#datafield').empty();
		document.getElementById("ebase6_submenu").innerHTML = "棚卸";
		$('#ebase6_submenu').css('background-color', '#FFE699');
		$('#ebase6_menubottom').hide();
		$('#table_item').show();
		$('#ebase6_top').show();

		var field = document.getElementById("datafield");
	});
});
