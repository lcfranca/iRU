<?php
include ('connectDB.php');
Class Controller {
	function check($matricula, $senha){
     $myConnect = new ConnectDB();
     $myConnect->Connect();
     $conn = $myConnect->conn;
      if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form
      $sql = "SELECT ID FROM Users WHERE Matricula = '$matricula' and Password = '$senha'";
      $result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      //$active = $row["active"];

      $count = mysqli_num_rows($result);

      // If result matched $myusername and $mypassword, table row must be 1 row
      if($count == 1) {
         return true;
 //        session_register("$matricula");
 //        $_SESSION['login_user'] = $matricula;
   //      header("location: localhost/Testinhos/dump.html");
      }
      else
      {
  //       $error = "Your Login Name or Password is invalid";
         return false;
      }
  //    return false;
   }
   }

   function registrar($username, $matricula, $email, $password, $CPF, $gender, $age, $curso){
		$myConnect = new ConnectDB();
		$myConnect->Connect();
		$conn = $myConnect->conn;
		$criptografia = hash('sha256',$password);
		//$criptografiaprabotapafuder = hash('sha256',$criptografia); Se quiser usar essa outra função,seria a criptografia da criptografia.
		$sql = "INSERT INTO Users (Username, Matricula, Email, Password, CPF, Gender, Age, Curso) VALUES ('$username', '$matricula', '$email', '$criptografia', '$CPF', '$gender', '$age', '$curso')";
		if(mysqli_query($conn, $sql)){
			echo "Records inserted successfully.";
		} else{
			echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
		}
	}
}