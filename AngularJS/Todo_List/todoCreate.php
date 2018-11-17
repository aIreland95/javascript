<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "aaron", "southhills#", "aaron");
$data = json_decode(file_get_contents("php://input"));

if (count($data) > 0) {

  $item = mysqli_real_escape_string($conn, $data->Todo_item);
  $sql = "INSERT INTO Todo_list(Todo_item) VALUES ('$item')";

  if (mysqli_query($conn, $sql)) {

    echo "Item inserted";
  }
  else {
    echo "Error";
  }
}





$conn->close();
?>
