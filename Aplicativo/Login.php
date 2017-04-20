<?php
include ('checkLogin.php');
 $meuobjeto = json_decode(file_get_contents('php://input'));

  $login = new checkLogin();
  $result = $login->Check($meuobjeto->matricula, $meuobjeto->password);

  echo json_encode($result);
?>
