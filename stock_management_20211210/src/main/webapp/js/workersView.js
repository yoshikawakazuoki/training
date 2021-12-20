/**
 * javascript for workersView (従業員登録機能)
 */

//従業員登録機能トップ

$(function() {

	$('a[id=workersView]').click(function() {
		$('#datafield').empty();
		$('#ebase6_shadow').css('display', 'none');
		$('#ebase6_menulist').css('display', 'none');
		$('#table_item').show();
		$('#ebase6_top').show();
		$('#ebase6_menubottom').hide();
		document.getElementById("ebase6_submenu").innerHTML = "従業員登録";
		$('#ebase6_submenu').css('background-color', '#D0CECE');

		var field = document.getElementById("datafield");

		var btn1 = document.createElement("input");
		field.appendChild(btn1);
		btn1.setAttribute('type', "button");
		btn1.setAttribute('value', "新規登録");
		btn1.setAttribute('id', "new_sample");
		btn1.setAttribute('title', "新規登録");
		btn1.style.cssText = 'font-size:1.4em;height:60px;width:150px;background-color: #C6E0B4;position:absolute;top:30px;'
		$('#new_sample').off("click");
		$('#new_sample').on("click", newworker);

		$('#dataTable').remove();
		$('#ebase6_pamview').remove();

		var field = document.getElementById("datafield");

		var table = document.createElement("table");
		field.appendChild(table);
		table.className = "tablesorter";
		table.id = "dataTable";
		table.style.cssText = 'position:relative;top:115px;width:600px;table-layout:fixed;margin-left:auto;margin-right:auto';

	});

})
