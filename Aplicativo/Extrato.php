<?php
include ('DbController.php');
 $meuobjeto = json_decode(file_get_contents('php://input'));

  $extrato = new Controller();
  $extrato->checkExtract("15/0005504");
