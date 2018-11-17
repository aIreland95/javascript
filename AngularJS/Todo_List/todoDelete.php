<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "aaron", "southhills#", "aaron");

$result = $conn->query("DELETE FROM Todo_list WHERE ");

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {}
$conn->close();
?>
