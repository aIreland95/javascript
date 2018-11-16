<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "aaron", "southhills#", "aaron");

$read_sql = "SELECT Todo_item FROM Todo_list";
$result = $conn->query($read_sql);
$arr = array();

if (mysqli_num_rows($result) != 0) {

  while($row = mysqli_fetch_assoc($result)) {

    $arr[] = $row;
  }
}

echo $read = json_encode($arr);
?>
