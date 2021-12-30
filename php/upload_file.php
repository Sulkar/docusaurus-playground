<?php


session_start();
 
// Include config file
require_once "config.php";

$uploadOk = 1;

$database_folder = $_POST["database_folder"];
if($database_folder == ""){
	$uploadOk = 0;
}
$target_dir = $_SERVER['DOCUMENT_ROOT'] . "php/uploads/" . $database_folder . "/";
$target_file = $target_dir . basename($_FILES["myFile"]["name"]);

print_r($target_dir);

$fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check file size
if ($_FILES["myFile"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($fileType != "db" && $fileType != "png" && $fileType != "pdf"
&& $fileType != "csv" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
	
  if (move_uploaded_file($_FILES["myFile"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["myFile"]["name"])). " has been uploaded.";
  } else {
    echo move_uploaded_file($_FILES["myFile"]["tmp_name"], $target_file);
	//echo "Sorry, there was an error uploading your file." . $_FILES["myFile"]["error"];
  }
}

?>