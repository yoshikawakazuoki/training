/**
 * javascript for goodsView (食材登録機能)
 */

//食材登録機能トップ

$(function() {

	$('a[id=goodsView]').click(function() {
		$('#datafield').empty();
		document.getElementById("ebase6_submenu").innerHTML = "品物一覧";


	var messages = {}; //メッセージ配列
	var msgidlist = [ 'TOPDBEXE','BTNSUBMIT','BTNSUBMIT','BTNSUBMIT','LBXMLKEY','LBXMLSELCT','ADDWORK','InsertData' ];

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

	//ALL menu close
	function menuClose() {
		$('#ebase6_shadow').css('display', 'none');
		$('#ebase6_menulist').css('display', 'none');
		$('#ebase6_popup').css('display', 'none');
	};


		$('#ebase6_popup').css('width', '300');
		$('#ebase6_popup').css('height', '200');
		$('#ebase6_popup').css('margin', '-150px 0 0 -100px');
		$('#ebase6_shadow').css('display', 'block'); //他入力欄をシャドウ化
		$('#ebase6_popup').css('display', 'block'); //ポップアップ表示
		$('#ebase6_popup_title').html(messages['TOPDBEXE']); //ポップアップにメッセージ表示
		$('#ebase6_popup_body').empty(); //ボディ初期化
		$('#ebase6_popup_foot').empty(); //フッター初期化
		//実行ボタン作成
		var btn = document.createElement("input");
		btn.setAttribute('type', "button");
		btn.setAttribute('value', messages['BTNSUBMIT']);
		btn.setAttribute('id', "ebase6_popup_submit");
		$('#ebase6_popup_foot').append(btn);
		$('#ebase6_popup_submit').off("click"); //実行ボタンの処理を初期化
		$('#ebase6_popup_submit').on("click", itemMain); //実行ボタンの処理変更
		$('#ebase6_popup_submit').on("click", menuClose); //ポップアップを閉じる
		//入力欄作成
		var inp = document.createElement("textarea");
		inp.setAttribute('id', "ebase6_popup_item");
		inp.style.cssText = 'position:absolute;left:0;width:295px;height:128px;';
		$('#ebase6_popup_body').append(inp);

		var field = document.getElementById("datafield");

		var btn = document.createElement("input");
		field.appendChild(btn);
		btn.setAttribute('type', "button");
		btn.setAttribute('value', "新規登録");
		btn.setAttribute('id', "new_sample");
		btn.style.cssText = 'font-size:1.4em;padding: 10px 30px;background-color: #FFCCFF;position:absolute;top:80px;'
		$('#new_sample').off("click");
		$('#new_sample').on("click", newgoods);

	});

	//セレクトボックス変更による処理

	function selectChange() {
		//var sql = prompt("input sql","");
		var list = $('#ebase6_popup_item').val();

		$('#dataTable').remove();
		$('#ebase6_pamview').remove();

		var field = document.getElementById("datafield");

		var table = document.createElement("table");
		field.appendChild(table);
		table.className = "tablesorter";
		table.id = "dataTable";
		table.style.cssText = 'position:absolute;top:160px;width:500px;height:25px;left:160px;';

		//submit処理開始
		//$.ajaxSetup({ async: false }); //同期
		$.postJSON("DQube", { actionID: 'GoodsList', list: list }, function(jres) {

			//DOM型で要素をAppendしていく
			var theadElem = document.createElement("thead");
			var trElem = document.createElement("tr");
			table.appendChild(theadElem);
			theadElem.appendChild(trElem);

			var ssSearch = document.getElementById("ss_select");

			/*for(i=0;i<jres.keys.length;i++){
				//テーブルにカラム名を表示
				var col = jres.keys[i];
				var thElem = document.createElement("th");
				trElem.appendChild(thElem);
				thElem.innerHTML=jres.tblColData[col]["name"];
			}*/

			//データ行を作成
			var tbodyElem = document.createElement("tbody");
			table.appendChild(tbodyElem);

			//データのヒットがない場合、空行を作成
			/*if(jres.tblData.length==0){
				var trElem = document.createElement("tr");
				tbodyElem.appendChild(trElem);
				for(i=0;i<jres.keys.length;i++){
					var tdElem = document.createElement("td");
					trElem.appendChild(tdElem);
				}
			}*/

			for (j = 0; j < jres.tblData.length; j++) { //データの書きだし
				var trElem = document.createElement("tr");
				tbodyElem.appendChild(trElem);
				for (i = 0; i < jres.keys.length; i++) {
					var tdElem = document.createElement("td");
					trElem.appendChild(tdElem);
					tdElem.style.background = "#fff";
					var col = jres.keys[i];
					tdElem.innerHTML = jres.tblData[j][col];
				}
			}


			$("#dataTable").tablesorter({
				widgets: ['zebra'],
				sortList: [[0, 1]]
			});
			$("#dataTable").trigger("update");

			//$.ajaxSetup({ async: true }); //同期の解除
			return false;
		});
	};


	//新規登録ボタン

	function newgoods() {
		$('#dataTable').remove();
		$('#view1_sample').remove();
		$('#view2_sample').remove();
		$('#view3_sample').remove();
		$('#view4_sample').remove();
		$('#view5_sample').remove();
		//$('#view6_sample').remove();
		$('#input1_sample').remove();
		$('#input2_sample').remove();
		$('#input3_sample').remove();
		$('#input4_sample').remove();
		$('#input5_sample').remove();
		//$('#input6_sample').remove();
		$('#button_sample').remove();

		var field = document.getElementById("datafield");

		var view1 = document.createElement("div");
		field.appendChild(view1);
		view1.innerHTML = "品名";
		view1.style.cssText = 'position:absolute;top:150px;';
		view1.id = "view1_sample";

		var view2 = document.createElement("div");
		field.appendChild(view2);
		view2.innerHTML = "単位";
		view2.style.cssText = 'position:absolute;top:150px;left:160px;';
		view2.id = "view2_sample";

		var view3 = document.createElement("div");
		field.appendChild(view3);
		view3.innerHTML = "原価";
		view3.style.cssText = 'position:absolute;top:150px;left:320px;';
		view3.id = "view3_sample";

		var view4 = document.createElement("div");
		field.appendChild(view4);
		view4.innerHTML = "賞味期限";
		view4.style.cssText = 'position:absolute;top:150px;left:480px;';
		view4.id = "view4_sample";

		var view5 = document.createElement("div");
		field.appendChild(view5);
		view5.innerHTML = "発注の際の注意点";
		view5.style.cssText = 'position:absolute;top:150px;left:640px;';
		view5.id = "view5_sample";

		var btn = document.createElement("input");
		field.appendChild(btn);
		btn.setAttribute('type', "button");
		btn.setAttribute('value', messages['BTNSUBMIT']);
		btn.setAttribute('id', "button_sample");
		btn.style.cssText = 'position:absolute;top:170px;right:250px';
		$('#button_sample').off("click");
		$('#button_sample').on("click", insertdata);

		var input1 = document.createElement("input");
		field.appendChild(input1);
		input1.setAttribute("type", "text");
		input1.style.cssText = 'position:absolute;top:170px;width:150px;height:25px';
		input1.setAttribute("id", "input1_sample");

		var input2 = document.createElement("input");
		field.appendChild(input2);
		input2.setAttribute("type", "text");
		input2.style.cssText = 'position:absolute;top:170px;left:160px;width:150px;height:25px';
		input2.setAttribute("id", "input2_sample");

		var input3 = document.createElement("input");
		field.appendChild(input3);
		input3.setAttribute("type", "text");
		input3.style.cssText = 'position:absolute;top:170px;left:320px;height:25px;width:150px';
		input3.setAttribute("id", "input3_sample");

		var input4 = document.createElement("input");
		field.appendChild(input4);
		input4.setAttribute("type", "text");
		input4.style.cssText = 'position:absolute;top:170px;left:480px;height:25px;width:150px';
		input4.setAttribute("id", "input4_sample");

		var input5 = document.createElement("input");
		field.appendChild(input5);
		input5.setAttribute("type", "text");
		input5.style.cssText = 'position:absolute;top:170px;left:640px;height:25px;width:300px';
		input5.setAttribute("id", "input5_sample");

		field.update();

		$('#ebase6_shadow').css('display', 'block');
	}


	//食材データの登録(登録確定ボタン)

	function insertdata() {

		//var sql = prompt("input sql","");

		var name = $('#input1_sample').val();
		var unit = $('#input2_sample').val();
		var cost = $('#input3_sample').val();
		var expdays = $('#input4_sample').val();
		var caution = $('#input5_sample').val();
		//var caution = $('#input6_sample').val();

		$('#dataTable').remove();
		$('#ebase6_pamview').remove();

		var field = document.getElementById("datafield");

		var pamView = document.createElement("div");
		field.appendChild(pamView);
		pamView.className = "ebase6_pamview";
		pamView.id = "ebase6_pamview";
		pamView.style.cssText = 'position:absolute;top:70px';

		var table = document.createElement("table");
		field.appendChild(table);
		table.className = "tablesorter";
		table.id = "dataTable";
		table.style.cssText = 'position:absolute;top:80px';

		//submit処理開始
		//$.ajaxSetup({ async: false }); //同期
		$.postJSON("DQube", { actionID: 'InsertData', name: name, unit: unit, cost: cost, expDays: expdays, caution: caution }, function(jres) {

			pamView.innerHTML = "SQL [ " + jres.pams["sql"] + " ]";

			//DOM型で要素をAppendしていく
			var theadElem = document.createElement("thead");
			var trElem = document.createElement("tr");
			table.appendChild(theadElem);
			theadElem.appendChild(trElem);

			var ssSearch = document.getElementById("ss_select");

			for (i = 0; i < jres.keys.length; i++) {
				//テーブルにカラム名を表示
				var col = jres.keys[i];
				var thElem = document.createElement("th");
				trElem.appendChild(thElem);
				thElem.className = jres.tblColData[col]["classname"];
				thElem.innerHTML = jres.tblColData[col]["name"];
			}

			//データ行を作成
			var tbodyElem = document.createElement("tbody");
			table.appendChild(tbodyElem);

			//データのヒットがない場合、空行を作成
			if (jres.tblData.length == 0) {
				var trElem = document.createElement("tr");
				tbodyElem.appendChild(trElem);
				for (i = 0; i < jres.keys.length; i++) {
					var tdElem = document.createElement("td");
					trElem.appendChild(tdElem);
				}
			}

			for (j = 0; j < jres.tblData.length; j++) { //データの書きだし
				var trElem = document.createElement("tr");
				tbodyElem.appendChild(trElem);
				for (i = 0; i < jres.keys.length; i++) {
					var tdElem = document.createElement("td");
					trElem.appendChild(tdElem);
					tdElem.style.background = "#fff";
					var col = jres.keys[i];
					tdElem.innerHTML = jres.tblData[j][col];
				}
			}


			$("#dataTable").tablesorter({
				widgets: ['zebra'],
				sortList: [[0, 1]]
			});
			$("#dataTable").trigger("update");


			$('#new_sample').remove();
			$('#view1_sample').remove();
			$('#view2_sample').remove();
			$('#view3_sample').remove();
			$('#view4_sample').remove();
			$('#view5_sample').remove();
			//$('#view6_sample').remove();
			$('#input1_sample').remove();
			$('#input2_sample').remove();
			$('#input3_sample').remove();
			$('#input4_sample').remove();
			$('#input5_sample').remove();
			//$('#input6_sample').remove();
			$('#button_sample').remove();

			//$.ajaxSetup({ async: true }); //同期の解除
			return false;
		});
	}


	//修正ボタン

	function itemModify() {
		$('#dataTable').hide();
		$('#new_sample').remove();
		$('#re_sample').remove();
		$('.recheck').hide();

		var field = document.getElementById("datafield");

		var btn = document.createElement("input");
		field.appendChild(btn);
		btn.setAttribute('type', "button");
		btn.setAttribute('value', "修正確定");
		btn.setAttribute('id', "button_s");
		btn.setAttribute('title', "修正確定");
		btn.style.cssText = 'font-size:1.4em;height:60px;width:150px;background-color: #BDD7EE;position:absolute;top:30px;right:0px';
		$('#button_s').off("click");
		$('#button_s').on("click", refoods);
		var view1 = document.createElement("div");
		field.appendChild(view1);
		view1.innerHTML = "食材名";
		view1.style.cssText = 'position:absolute;top:125px;left:58px;width:50px';
		view1.id = "view1_sample";

		var view2 = document.createElement("div");
		field.appendChild(view2);
		view2.innerHTML = "単位";
		view2.style.cssText = 'position:absolute;top:125px;left:220px;width:35px';
		view2.id = "view2_sample";

		var view3 = document.createElement("div");
		field.appendChild(view3);
		view3.innerHTML = "単価(円)";
		view3.style.cssText = 'position:absolute;top:125px;left:367px;width:65px';
		view3.id = "view3_sample";

		var view4 = document.createElement("div");
		field.appendChild(view4);
		view4.innerHTML = "消費期間(日)";
		view4.style.cssText = 'position:absolute;top:125px;left:510px;width:95px';
		view4.id = "view4_sample";

		var view5 = document.createElement("div");
		field.appendChild(view5);
		view5.innerHTML = "仕入れ店";
		view5.style.cssText = 'position:absolute;top:125px;left:675px;width:65px';
		view5.id = "view5_sample";

		var view6 = document.createElement("div");
		field.appendChild(view6);
		view6.innerHTML = "備考";
		view6.style.cssText = 'position:absolute;top:125px;left:850px;width:35px';
		view6.id = "view6_sample";

		for (j = 0; ; j++) {
			var rcheck = "reqcheck" + j;
			if (document.getElementById(rcheck) != null) {
				var x = document.getElementById(rcheck).checked;
				if (x == true) {

					var elem = document.createElement("div");
					field.appendChild(elem);
					elem.style.cssText = 'position:relative;top:150px;left:0px;width:948px;';
					elem.id = "elem" + j;
					for (i = 1; i < 7; i++) {
						var delem = "tdElem" + j + i;
						var x = document.getElementById(delem).innerHTML;
						var input1 = document.createElement("input");
						elem.appendChild(input1);
						input1.setAttribute('value', x);
						input1.setAttribute('aria-label', "修正");
						input1.style.cssText = 'position:relative;width:150px;height:25px;';
						var inpu = "input1_" + j + i;
						input1.setAttribute('id', inpu);
					};
				};
			} else {
				break;
			};
		};
	};


	function itemMain() {
		//var sql = prompt("input sql","");
		var list = $('#ebase6_popup_item').val();

		$('#dataTable').remove();
		$('#ebase6_pamview').remove();

		var field = document.getElementById("datafield");

		var pamView = document.createElement("div");
		field.appendChild(pamView);
		pamView.className = "ebase6_pamview";
		pamView.id = "ebase6_pamview";
		pamView.style.cssText = 'position:absolute;top:150px;';

		var table = document.createElement("table");
		field.appendChild(table);
		table.className = "tablesorter";
		table.id = "dataTable";
		table.style.cssText = 'position:absolute;top:165px;';

		//submit処理開始
		//$.ajaxSetup({ async: false }); //同期
		$.postJSON("DQube", { actionID: 'GoodsList', list: list }, function(jres) {

			//pamView.innerHTML="SQL [ " + jres.pams["sql"] + " ]";

			//DOM型で要素をAppendしていく
			var theadElem = document.createElement("thead");
			var trElem = document.createElement("tr");
			table.appendChild(theadElem);
			theadElem.appendChild(trElem);

			var ssSearch = document.getElementById("ss_select");

			for (i = 0; i < jres.keys.length; i++) {
				//テーブルにカラム名を表示
				var col = jres.keys[i];
				var thElem = document.createElement("th");
				trElem.appendChild(thElem);
				thElem.className = jres.tblColData[col]["classname"];
				thElem.innerHTML = jres.tblColData[col]["name"];
			}

			//データ行を作成
			var tbodyElem = document.createElement("tbody");
			table.appendChild(tbodyElem);

			//データのヒットがない場合、空行を作成
			if (jres.tblData.length == 0) {
				var trElem = document.createElement("tr");
				tbodyElem.appendChild(trElem);
				for (i = 0; i < jres.keys.length; i++) {
					var tdElem = document.createElement("td");
					trElem.appendChild(tdElem);
				}
			}

			for (j = 0; j < jres.tblData.length; j++) { //データの書きだし
				var trElem = document.createElement("tr");
				tbodyElem.appendChild(trElem);
				for (i = 0; i < jres.keys.length; i++) {
					var tdElem = document.createElement("td");
					trElem.appendChild(tdElem);
					tdElem.style.background = "#fff";
					var col = jres.keys[i];
					tdElem.innerHTML = jres.tblData[j][col];
				}
			}


			$("#dataTable").tablesorter({
				widgets: ['zebra'],
				sortList: [[0, 1]]
			});
			$("#dataTable").trigger("update");

			//$.ajaxSetup({ async: true }); //同期の解除
			return false;
		});
	}
});
