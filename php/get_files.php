<?php

$pathToFolder = $_SERVER['DOCUMENT_ROOT'] . "php/uploads/";
$data = json_decode(file_get_contents('php://input'), true);
$folder = $pathToFolder . $data["database_folder"] . "/";

$files = array_diff( scandir($folder), array(".", "..") );

echo json_encode($files);

?>