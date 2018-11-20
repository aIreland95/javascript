<?php
// connection to the database

  $conn = new mysqli('localhost', 'aaron', 'southhills#', 'aaron');

  if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
  }

  $newTask = json_decode(file_get_contents('php://input'));
  $task = $newTask->task;

  //Create Query to Select All user data from fm_users Table
  $conn->query("INSERT INTO todo (task, complete) VALUES ('$task', 0)");
?>
