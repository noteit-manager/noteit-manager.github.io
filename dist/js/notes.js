var currentNote = '';
function loadNote(notepath){

  readTextFile(notepath);

}
function readTextFile(file) {
var rawFile = new XMLHttpRequest();
rawFile.open("GET", file, false);
rawFile.onreadystatechange = function ()
{
    if(rawFile.readyState === 4)
    {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
            var allText = rawFile.responseText;
            $("#noteEditor").val(allText);
            currentNote = file;
        }
    }
}
rawFile.send(null);
}
function saveNote(text, notename){
  var http = new XMLHttpRequest();
  var url = 'functions/push.php';
  var params = 't=' + text + "&f=" + notename;
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          //alert(http.responseText);
      }
  }
  http.send(params);
}
function runSave(){
  if(currentNote == ''){

  }else{
    saveNote($("#noteEditor").val(), currentNote.replace("data/", ""));
  }

}
function newNote(){
  var newNoteName = prompt('Enter name for new note');
  saveNote('', newNoteName + ".txt");
  setTimeout(location.reload(), 500);
}
function deleteNote(toDelete){
  if(confirm('Really Delete?') == true){
    httpGet('functions/delete.php?f=' + toDelete);
    setTimeout(location.reload(), 500);
  }

}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
