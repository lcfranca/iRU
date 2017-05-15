<!DOCTYPE html PUBLIC "-//W3C// DTD XHTML . Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
<title> serie faca um site </title>
</head>

<?PHP 

include "estilo1.inc";
include "connectDB.php";

$c = new ConnectDB();
$c->Connect();
$connection = $c->getConn();

$sql = "SELECT ID, USERNAME, MATRICULA, EMAIL, PASSWORD,CPF, GENERO, IDADE, CURSO ";
$sql = $sql . "FROM Cadastro";


$rs = $connection->query($sql);


?>
<body>


<table cellspacing="0">
<thead>
<tr>
<td>ID</td>
<td>USERNAME </td>
<td>MATRICULA    </td>
<td>EMAIL </td>
<td>PASSWORD     </td>
<td>CPF  </td>
<td>GENERO  </td>
<td>IDADE</td>
<td>CURSO</td>

</tr>
</thead>


<?PHP
while($reg = mysqli_fetch_array($rs, MYSQLI_ASSOC)){
$ID = $reg["ID"];
$USERNAME = $reg["USERNAME"];
$MATRICULA = $reg["MATRICULA"];
$EMAIL = $reg["EMAIL"];
$PASSWORD = $reg["PASSWORD"];
$CPF = $reg["CPF"];
$GENERO = $reg["GENERO"];
$IDADE = $reg["IDADE"];
$CURSO = $reg["CURSO"];
?>
<tr>
<td><?PHP print $ID; ?></td>
<td><?PHP print $USERNAME; ?></td>
<td><?PHP print $MATRICULA; ?></td>
<td><?PHP print $EMAIL;?></td>
<td><?PHP print $PASSWORD; ?></td>
<td><?PHP print $CPF;    ?></td>
<td><?PHP print $GENERO; ?></td>
<td><?PHP print $IDADE;?></td>
<td><?PHP print $CURSO; ?></td>
?>

</tr>
<?PHP } ?>

</table>
</body>
</html>











