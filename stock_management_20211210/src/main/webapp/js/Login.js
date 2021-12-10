/**
 * javascript for Login (ログイン機能)
 */

$(function(){

	$('#datafield').empty();
	$('#ebase6_controlmenu').hide();
	$('#ebase6_shadow').css('display', 'none');

	var field = document.getElementById("datafield");

	var initialView = document.createElement("div");  //ポップアップ用画面生成
	initialView.id = "ebase6_initial_body";
	field.appendChild(initialView);

	var initialhead = document.createElement("div");  //DOM型で要素をAppend
	initialhead.id = "ebase6_initial_head";
	initialView.appendChild(initialhead);
	$('#ebase6_initial_head').html("在庫管理システム")
	initialhead.setAttribute('value',"認証処理");

	var caution = document.createElement("div");  //注意書き
	caution.id = "ebase6_initial_caution";
	initialView.appendChild(caution);
	caution.innerHTML = "従業員氏名、パスワードを入力してください。";

	var table = document.createElement("table");  //table要素でユーザー名、パスワードのフォームを作成
	table.id = "login_ninsyo";
	initialView.appendChild(table);

	var trElem1 = document.createElement("tr");  //従業員氏名フォーム
	table.appendChild(trElem1);
	var thElem1 = document.createElement("th");
	trElem1.appendChild(thElem1);
	thElem1.innerHTML = "従業員氏名";
	var tdElem1 = document.createElement("td");
	thElem1.appendChild(tdElem1);
	var input1 = document.createElement("input")
	input1.setAttribute('type',"text");
	input1.setAttribute('size',32);
	input1.setAttribute('id',"user_name");
	input1.setAttribute('maxlength',"20");
	input1.setAttribute('aria-label',"従業員氏名");
	tdElem1.appendChild(input1);

	var trElem2 = document.createElement("tr");  //パスワードフォーム
	table.appendChild(trElem2);
	var thElem2 = document.createElement("th");
	trElem2.appendChild(thElem2);
	thElem2.innerHTML = "パスワード";
	var tdElem2 = document.createElement("td");
	thElem2.appendChild(tdElem2);
	var input2 = document.createElement("input")
	input2.setAttribute('type',"password");
	input2.setAttribute('size',32);
	input2.setAttribute('id',"pass_word");
	input2.setAttribute('maxlength',"8");
	input2.setAttribute('aria-label',"パスワード");
	tdElem2.appendChild(input2);

	var loginbutton = document.createElement("input");  //ログインボタン
	loginbutton.setAttribute('type',"button");
	loginbutton.setAttribute('id',"ebase6_login");
	loginbutton.setAttribute('value',"ログイン");
	loginbutton.setAttribute('title',"ログイン");
	loginbutton.style.cssText = 'font-size:1.2em;height:60px;width:150px;background-color: #C6E0B4;position:relative;top:70px';
	initialView.appendChild(loginbutton);
	$('#ebase6_login').off("click");
	$('#ebase6_login').on("click" , ninsyo );

	//ログイン処理
	function ninsyo() {

		var user = $('#user_name').val();
		var pass = $('#pass_word').val();

		$.postJSON("DQube",{actionID:'Login',user:user, pass:pass},function(login) {  //submit処理開始

		if(login.tblData.length==0){  //空白、もしくは入力された従業員氏名・パスワードが間違っていた場合
			$('#ebase6_initial_caution').html("従業員氏名、またはパスワードが間違っています。再入力してください。");
			$('#ebase6_initial_caution').css("color","red");
			$('#pass_word').val('');
		} else {

		$('#table_item').hide();
		$('#ebase6_initial_body').hide();
		$('#ebase6_controlmenu').show();
		document.getElementById("ebase6_submenu").innerHTML="在庫管理システム";
		$('#ebase6_submenu').css('background-color', '#D9E1F2');
		$('#ebase6_menubottom').show();
		}
		});
	}

	//ログアウト処理
	$("#ebase6_logout").click(function(){

	$('#datafield').empty();
	$('#ebase6_controlmenu').hide();

	var field = document.getElementById("datafield");

	var initialView = document.createElement("div");  //ポップアップ用画面生成
	initialView.id = "ebase6_initial_body";
	field.appendChild(initialView);

	var initialhead = document.createElement("div");  //DOM型で要素をAppend
	initialhead.id = "ebase6_initial_head";
	initialView.appendChild(initialhead);
	$('#ebase6_initial_head').html("在庫管理システム")
	initialhead.setAttribute('value',"認証処理");

	var caution = document.createElement("div");  //注意書き
	caution.id = "ebase6_initial_caution";
	initialView.appendChild(caution);
	caution.innerHTML = "従業員氏名、パスワードを入力してください。";

	var table = document.createElement("table");  //table要素でユーザー名、パスワードのフォームを作成
	table.id = "login_ninsyo";
	initialView.appendChild(table);

	var trElem1 = document.createElement("tr");  //従業員氏名フォーム
	table.appendChild(trElem1);
	var thElem1 = document.createElement("th");
	trElem1.appendChild(thElem1);
	thElem1.innerHTML = "従業員氏名";
	var tdElem1 = document.createElement("td");
	thElem1.appendChild(tdElem1);
	var input1 = document.createElement("input")
	input1.setAttribute('type',"text");
	input1.setAttribute('size',32);
	input1.setAttribute('id',"user_name");
	input1.setAttribute('maxlength',"20");
	input1.setAttribute('aria-label',"従業員氏名");
	tdElem1.appendChild(input1);

	var trElem2 = document.createElement("tr");  //パスワードフォーム
	table.appendChild(trElem2);
	var thElem2 = document.createElement("th");
	trElem2.appendChild(thElem2);
	thElem2.innerHTML = "パスワード";
	var tdElem2 = document.createElement("td");
	thElem2.appendChild(tdElem2);
	var input2 = document.createElement("input")
	input2.setAttribute('type',"password");
	input2.setAttribute('size',32);
	input2.setAttribute('id',"pass_word");
	input2.setAttribute('maxlength',"8");
	input2.setAttribute('aria-label',"パスワード");
	tdElem2.appendChild(input2);

	var loginbutton = document.createElement("input");  //ログインボタン
	loginbutton.setAttribute('type',"button");
	loginbutton.setAttribute('id',"ebase6_login");
	loginbutton.setAttribute('value',"ログイン");
	loginbutton.setAttribute('title',"ログイン");
	loginbutton.style.cssText = 'font-size:1.2em;height:60px;width:150px;background-color: #C6E0B4;position:relative;top:70px';
	initialView.appendChild(loginbutton);
	$('#ebase6_login').off("click");
	$('#ebase6_login').on("click" , ninsyo );
	})
});
