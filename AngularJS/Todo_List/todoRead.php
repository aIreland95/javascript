<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "aaron", "southhills#", "aaron");

$result = $conn->query("SELECT * FROM Todo_list");

$conn->close();
echo($outp);
?>
