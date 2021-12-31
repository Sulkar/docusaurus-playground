<?php

$data = json_decode(file_get_contents('php://input'), true);
$fileToDelete = $data["fileToDelete"];
$database_folder = $data["database_folder"];

$file = $_SERVER['DOCUMENT_ROOT'] . "php/uploads/" . $database_folder . "/" . $fileToDelete;

unlink($file);

?>