<?php
  //echo 'Teste';
  include("Register.php");
  //include("ReceiveJSON.php");
  //$myReceive = new JSON_receive();

  $meuobjeto = json_decode(file_get_contents('php://input'));

  $myRegister = new Register();
  $myRegister->Registrar($meuobjeto->username, $meuobjeto->matricula, $meuobjeto->email, $meuobjeto->password);
    echo 'Teste2';
  /*  $username = mysqli_escape_string($conn, $meuobjeto->username);
    $matricula = mysql_escape_string($conn, $meuobjeto->matricula);
  //  $email = mysql_escape_string($_POST['Email']);
    $password = mysql_escape_string($_POST['Password']);
    mysql_query("INSERT INTO Users(username,matricula,email,password) VALUES ('{$username}','{$matricula}','{$email},'{$password}");
    exit ();
    */
?>
