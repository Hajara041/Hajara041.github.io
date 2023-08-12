<?php
$con = mysqli_connect('localhost', 'root', '', 'cakehobby');

$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];

$sql = "INSERT INTO `Orders` (`fldName`, `fldEmail`, `fldaddress`) VALUES('$name', '$email', '$address')";

$rs = mysqli_query($con, $sql);
 
if($rs)
{
	echo "<h1>You are submited the order</h1>";
}

?>