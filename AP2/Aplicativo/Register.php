<?php
include("connectDB.php");

class Register {
	function Registrar($username, $matricula, $email, $password){
		$myConnect = new ConnectDB();
		$myConnect->Connect();
		$conn = $myConnect->conn;

		$sql = "INSERT INTO Users (Username, Matricula, Email, Password) VALUES ('$username', '$matricula', '$email', '$password')";
		if(mysqli_query($conn, $sql)){
			echo "Records inserted successfully.";
		} else{
			echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
		}
	}
}
