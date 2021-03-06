﻿//ページ読み込み完了時の動作
window.onload = function(){
	//初回訪問時に説明を表示する
	var visited = Cookies.get("sorutowcevisited");
	if(visited == "visited"){}
	else{
		so.modal.al("ようこそ","Soruto WCEへようこそ。<br>WCEは、ブラウザ上で動作するテキストエディタです。<br>現在β版であることにご留意ください。");
		Cookies.set("sorutowcevisited", "visited", { expires: 3650 });
	}
}
//ページ移動時にアラートを表示する
window.onbeforeunload = function(e) {
      return 'このページから出ると、編集内容が失われますが、続行しますか?';
    };
//メニューの表示・非表示
function sMenu(mname){
	var submenu = so.getId("subMenu");
		//サブメニューの項目設定
		//width:100%になるので、<br>は不要
		if(mname == "file"){
			submenu.innerHTML ='<a href="#" onclick="NewFile();" class="sub">新規作成</a>------------------<br><a href="#" onclick="openfile()" class="sub">ファイルを開く</a><a href="#" id="slink" onclick="dfile(\'slink\');" class="sub">保存(ダウンロード)</a>';
		}
		else if(mname == "help"){
			submenu.innerHTML = '<a href="#" class="sub" onclick="cMenu();so.modal.al(\'このサイトについて\',\'<b>Soruto Web Code Editor</b><br>オープンソースの<br>Webブラウザで動くIDE<br>(c)2018 Soruto Project.\');">About</a><a href="https://github.com/SorutoProject/Soruto-Web-Code-Editor" target="_blank"  class="sub">プロジェクトページ</a>';
		}
		else if(mname == "tool"){
			submenu.innerHTML = '<a href="#" onclick="cMenu();cLength()" class="sub">文字数カウント</a>';
		}
		else if(mname == "source"){
			submenu.innerHTML = '<a href="#" onclick="runJSCode();" class="sub">JSとして実行</a><a href="#" onclick="runHTML()" class="sub">HTMLとして表示</a>';
		}
		//設定終わり
	submenu.style.display = "block";
	}
//メニューの非表示
function cMenu(){
	so.getId("subMenu").style.display = "none";
}

//ファイルの保存(ダウンロード)
function dfile(aid){
	var content = so.getVal("editor");
	var nfname = so.getVal("filename");
	var fname = window.prompt("ファイル名を入力してください",nfname);
	var linkid = so.getId(aid);//「保存」リンクのエレメント取得
	if(fname === "" | fname === undefined || fname===null){
		cMenu();
		linkid.href = "#";
		so.modal.al("情報","ファイル名の入力がないため、<br>保存処理をキャンセルしました。");
	}else{
	//以下、http://furudate.hatenablog.com/entry/2014/06/02/172923を参考にしました
	var data = new Blob([content], {"type" : "application/x-msdownload"});
	window.URL = window.URL || window.webkitURL;
	linkid.href = window.URL.createObjectURL(data);
	linkid.download = fname;
	so.modal.ms("保存","間もなくダウンロードが開始されます。");
	so.modal.cTime(2500);
	so.getId("filename").value = fname;
	cMenu();
	}
}
//ファイルを開く
function openfile(){
cMenu();
var diaso = '<b>ファイルを選択してください</b><br><input type="file" id="selfile"><br><br><input type="button" onclick="so.modal.close();" value="キャンセル">';
so.modal.custom(diaso);
var fo = document.getElementById("selfile");
fo.addEventListener("change",function(evt){
	so.modal.close();
	so.modal.custom("<br><br><br><center>読み込み中...</center>");
  var file = evt.target.files;
  //FileReaderの作成
  var reader = new FileReader();
  //テキスト形式で読み込む
  reader.readAsText(file[0]);
  //読込終了後の処理
  reader.onload = function(ev){
    //テキストエリアに表示する
    so.getId("editor").value = reader.result;
	document.title = file[0].name + " - Soruto Web Code Editor";
	so.getId("filename").value = file[0].name;
	so.modal.close();
  }
},false);
}
//新規作成
function NewFile(){
	cMenu();
	var con = confirm('新規作成すると、現在の編集内容が失われます。\nよろしいですか?');
	if(con === true){so.getId('editor').value = '';
	document.title = "New - Soruto Web Code Editor";
	so.getId("filename").focus();
	}
}

//文字数カウント
function cLength(){
	var len = so.getVal("editor").length;
	var byn = encodeURI(so.getVal("editor")).replace(/%[0-9A-F]{2}/g, '*').length;
	var krb = byn / 1000;
	so.modal.al("文字数カウント","<b>現在の文字数</b>:" + len + "<br><b>ファイルサイズ</b> " + byn + "byte(" + krb + "KB)");
}
//JSとして実行
function runJSCode(){
	cMenu();
	try{
	eval(so.getVal('editor'))
	}catch(error){
		so.modal.ms("エラー",'エディタ内のコードを実行中に<br>エラーが発生しました。<hr color="#c4c4c4">エラー内容<br>' + error + '<br><input type="button" onclick="so.modal.close()" value="閉じる">');
	}
}
//HTMLを別タブでdataで開く
function runHTML(){
	var source = so.getVal("editor");
	window.open("data:text/html," + source,"_blank")
}
