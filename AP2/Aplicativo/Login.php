<?php
include ('checkLogin.php');
 $meuobjeto = json_decode(file_get_contents('php://input'));

  $login = new checkLogin();
  $login->Check($meuobjeto->matricula, $meuobjeto->password);
?>