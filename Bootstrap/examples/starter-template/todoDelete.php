<?php
// connection to the database

  $conn = new mysqli('localhost', 'aaron', 'southhills#', 'aaron');

  if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
  }

  $_POST = json_decode(file_get_contents('php://input'), true);
  $del_id = $_POST['task_id'];

  //Create Query to Select All user data from fm_users Table
  $sql = "DELETE FROM todo WHERE task_id = ('$del_id')";
  //Execute the SQL and Return Array of Values to $result
  $result = $conn->query($sql);
?>
