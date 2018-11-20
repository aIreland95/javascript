<?php
// connection to the database

  $conn = new mysqli('localhost', 'aaron', 'southhills#', 'aaron');

  //Select Query to Select All user data from todo Table
  $sql = "SELECT task_id, task, complete FROM todo";

  //Execute the SQL and Return $result
  $result = $conn->query($sql);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  if ($result->execute()) {

    while ($row = $result->fetch_assoc()) {
      $data[] = $row;
    }
  }

  //$_POST = json_decode(file_get_contents('php://input'), true);
?>
