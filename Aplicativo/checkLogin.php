<?php
include ('connectDB.php');
//include ('route.js');

class CheckLogin
{
   function Check($matricula, $senha){
     $myConnect = new ConnectDB();
     $myConnect->Connect();
     $conn = $myConnect->conn;
      if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form
      $sql = "SELECT ID FROM Users WHERE Matricula = '$matricula' and Password = '$senha'";
      $result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      //$active = $row["active"];
      $active = $row["active"];

      $count = mysqli_num_rows($result);

      // If result matched $myusername and $mypassword, table row must be 1 row
      if($count == 1) {
         echo 'oi';
 //        session_register("$matricula");
 //        $_SESSION['login_user'] = $matricula;

   //      header("location: localhost/Testinhos/dump.html");
      }else {
         $error = "Your Login Name or Password is invalid";
         echo $error;
      }
      else
      {
  //       $error = "Your Login Name or Password is invalid";
         return false;
      }
  //    return false;
   }
   }
}
?>
