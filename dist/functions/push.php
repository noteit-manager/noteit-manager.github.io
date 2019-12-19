<?php
$text = $_POST['t'];
$file = "../data/" . $_POST['f'];
file_put_contents($file, $text);
 ?>
