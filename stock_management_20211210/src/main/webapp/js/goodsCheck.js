/**
 * javascript for goodsCheck (検品機能)
 */

//検品機能トップ

$(function() {

	$('a[id=goodsCheck]').click(function() {
		$('#datafield').empty();
		document.getElementById("ebase6_submenu").innerHTML = "検品";
		$('#ebase6_submenu').css('background-color', '#EDEDED');

		$('#dataTable').remove();
		$('#ebase6_pamview').remove();

		var view1 = document.createElement("div");
		field.appendChild(view1);
		view1.innerHTML = "検品数";
		view1.style.cssText = 'position:absolute;top:100px;left:30px;width:50px';
		view1.id = "view1_sample";
		var view2 = document.createElement("div");
		field.appendChild(view2);
		view2.innerHTML = "検品不足";
		view2.style.cssText = 'position:absolute;top:100px;left:120px;width:65px';
		view2.id = "view2_sample";

		var btn = document.createElement("input");
		field.appendChild(btn);
		btn.setAttribute('type', "button");
		btn.setAttribute('value', "検品確定");
		btn.setAttribute('id', "button_isp");
		btn.setAttribute('title', "検品確定");
		btn.style.cssText = 'font-size:1.4em;height:60px;width:150px;background-color: #C6E0B4;position:absolute;top:20px;'
		$('#button_isp').off("click");
		$('#button_isp').on("click", checkRegister);
	});


	//検品確定ボタン

	function checkRegister() {
	};
});
