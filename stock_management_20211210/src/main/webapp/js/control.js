/**
 * javascript for control
 */
$(function(){

	var messages = {}; //メッセージ配列
	var msgidlist = [ 'TOPDBEXE','BTNSUBMIT','BTNSUBMIT','BTNSUBMIT','LBXMLKEY','LBXMLSELCT','ADDWORK','InsertData' ];

	//POST処理作成
	$.postJSON = function(url, data, callback) {
		$.post(url, data, callback, "json");  //url,data,callbackは引数、json形式でやり取り
	};

	//初回稼働時
	$(document).ready(function(){
		//ラングコードを取得
		var lang = navigator.language || navigator.userLanguage;
		if(lang != "ja") lang="en";
		//メッセージ配列の生成
		$.postJSON("DQube",{actionID:'MSGGET01' ,ids:msgidlist , lang:lang}, function(jres){
			for(j=0;j<msgidlist.length;j++){
				id = msgidlist[j];
				messages[id] = jres.message[id];
			}
		});
	});

	//初期処理
	$('a[id=initialsetup]').click(function(){
		$.postJSON("DQube",{actionID:'INITILIZ'}, function(jres){
			alert(jres.result["result"]);
			return false;
		});
	});

	//ALL menu close
	function menuClose() {
		$('#ebase6_shadow').css('display', 'none');
		$('#ebase6_menulist').css('display', 'none');
		$('#ebase6_popup').css('display', 'none');
	};

	//メンテナンスボタンをクリック
	$('#ebase6_conmenu_mente').click(function(){
		if($('#ebase6_menulist').css('display') == "block"){
			menuClose();
		}else{
			$('#ebase6_shadow').css('display', 'block');
			$('#ebase6_menulist').css('display', 'block');
		}
	});

	//メンテナンスメニュークローズ
	$('#ebase6_menulist_close').click(function(){
		$('#ebase6_popup').css('display', 'none');
		$('#ebase6_menulist').css('display', 'none');
		$('#ebase6_shadow').css('display', 'none');
	});

	//ポップアップクローズ
	$('#ebase6_popup_close').click(function(){
		$('#ebase6_popup').css('display', 'none');
		$('#ebase6_menulist').css('display', 'none');
		$('#ebase6_shadow').css('display', 'none');
	});
	
	//ログオン処理
	$('#ebase6_logon').click(function(){
		$('#ebase6_initial_body').css('display', 'none');
		$('#ebase6_shadow').css('display', 'none');
	});





	/*----------追加した分------------*/


});
