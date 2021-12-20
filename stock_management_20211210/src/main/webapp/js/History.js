/**
 * javascript for History (検索機能)
 */


    //検索機能

$(function(){

	$('a[id=History]').click(function(){
		$('#datafield').empty();
		$('#ebase6_menubottom').hide();
		$('#table_item').show();
		$('#ebase6_top').show();
		document.getElementById("ebase6_submenu").innerHTML = "履歴表示";
		$('#ebase6_submenu').css('background-color', '#C6E0B4');
	});
});
