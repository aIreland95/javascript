<?php
// connection to the database

  $conn = new mysqli('localhost', 'aaron', 'southhills#', 'aaron');

  if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
  }

  $_POST = json_decode(file_get_contents('php://input'), true);
  $updateTask = $_POST['task'];
  $update_id = $_POST['task_id'];

  //Create Query to Select All user data from fm_users Table
  $sql = "UPDATE todo SET task = ('$updateTask') WHERE task_id = ('$update_id')";
  //Execute the SQL and Return Array of Values to $result
  $result = $conn->query($sql);
?>
