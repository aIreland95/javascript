<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new msqli("localhost", "aaron", "southhills#", "angular_people");

$result = $conn->query("SELECT * FROM angular_people");

$output = "";

while($row = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($output != "") {$output .= ",";}
  $output .= '{"First Name":"'  . $row["first_name"] . '",';
    $outp .= '"Last Name":"'   . $rs["last_name"]        . '",';
    $outp .= '"City":"'. $rs["city"]     . '"}';
}
$output = '{"Angular People":[' .$output.']}';
$conn->close();

echo($output);

?>
