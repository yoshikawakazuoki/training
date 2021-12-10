/**
 * javascript for stockManegement (在庫一覧機能)
 */

//在庫一覧機能

$(function() {

	$('a[id=stockManegement]').click(function() {
		$('#datafield').empty();
		document.getElementById("ebase6_submenu").innerHTML = "在庫一覧";
		$('#ebase6_submenu').css('background-color', '#BDD7EE');
		$('#ebase6_menubottom').hide();
		$('#table_item').show();
		$('#ebase6_top').show();

		var field = document.getElementById("datafield");

		var table = document.createElement("table");
		field.appendChild(table);
		table.className = "tablesorter";
		table.id = "dataTable";
		table.style.cssText = 'position:absolute;top:30px';

	});
});
