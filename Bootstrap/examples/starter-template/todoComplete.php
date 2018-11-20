<?php
// connection to the database

  $conn = new mysqli('localhost', 'aaron', 'southhills#', 'aaron');

  if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
  }

  $query = $conn->query("SELECT * FROM todo WHERE complete = 1");
  $taskData = array();

  while ($row = $query->fetch_array()) {
    $taskData[] = $row;
  }

  echo json_encode($taskData);
?>
