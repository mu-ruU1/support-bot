document.getElementById("view_today").innerHTML = getTodayE();

function getTodayE() {
  var now = new Date();
  var year = now.getFullYear();
  var mon = now.getMonth(); //１足さない
  var day = now.getDate();
  var you = now.getDay(); //曜日(0～6=日～土)

  //曜日の選択肢
  var youbi = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");

  //月名の選択肢
  var month = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  );

  function getNow() {
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth() + 1; //１を足すこと
    var day = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
  }

  //出力用
  var s = youbi[you] + " " + month[mon] + " " + day + " " + year + " ";
  return s;
}

document.getElementById("view_time").innerHTML = getNow();

function getNow() {
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  // 時間の0パディング
  hour = ("0" + hour).slice(-2);
  min = ("0" + min).slice(-2);
  sec = ("0" + sec).slice(-2);

  //出力用
  var s = hour + ":" + min + ":" + sec + " ";
  return s;
}

// ポインタ点滅
with (blink8405)
  (id = ""),
    (style.opacity = 1),
    setInterval(function () {
      style.opacity ^= 1;
    }, 500);

//読み込み時の表示
window_load();

//ウィンドウサイズ変更時に更新
window.onresize = window_load;

//サイズの表示
function window_load() {
  var sW, sH, s;
  sW = window.innerWidth;
  sH = window.innerHeight;

  s = sW + " × " + sH;
  document.getElementById("winsize2").innerHTML = s;
}
