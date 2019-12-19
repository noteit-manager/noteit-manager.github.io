<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>NoteIt</title>
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/editor.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/button.css">
    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/notes.js">
    </script>

  </head>
  <body>
    <div class="sidenav-container">
      <div class="sideList-container">
      <div class="box">
        <h2>Your Notes.</h2>
        <ul>
          <?php
          $dir = 'data';
          $files1 = scandir($dir);
          foreach($files1 as $item){
            if ($item == '.'){
            }else{
              if ($item == '..'){
              }else{
                echo '<li onclick="loadNote(' . "'data/" . $item . "'" . ');">' . str_replace(".txt", "", $item) . '<img src="img/delete.png" width="32" height="32" onclick="deleteNote(' . "'" . $item . "'" . ')"/></li>';
              }
            }
          }
           ?>
        </ul>
      </div>
      <button class="pure-material-button-contained" onclick="newNote();">New Note</button>
    </div>
    </div>
    <div class="main">
    <textarea type=text class="editor" id="noteEditor" onkeyup="runSave();"></textarea>
  </div>
  </body>
</html>
