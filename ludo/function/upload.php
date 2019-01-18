<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["img"]);
$uploadOK =1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENTION));
if(isset($_POST["submit"])) {
    $check =getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "C'est une image -" .$check["mine"] .".";
        $uploadOK =1;
    }
    else {
    	echo "Ceci n'est pas une image.";
    	$uploadOK = 0
    }
}
if (file_exists($target_file)) {
	echo "Désolé le fichier existe déjà;";
	$uploadOK =0
}
if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif"){
	echo "Désolé,seul les fichiers jpg, png, jpeg, gif sont autorisés. ";
	$uploadOK =0;
}
if (uploadOK == 0){
	echo "Désolé, votre fichier n'a pas été téléchargé.";
}
else {
	if (move_uploaded_file($_FILES["fileToUpload"]["tmp"], $target_file)){
	echo  "Le fichier "	.basename($_FILES["fileToUpload"]["name"]). "a été téléchargé.";
	}
	else {
		echo "Désolé une erreur s'est produite lors de l'envoie de votre fichier. ";
	}
}

?>