<?php
if (isset($_POST["name1"]) && isset($_POST["mail"]) && isset($_POST["message"]) && isset($_POST["rgpd"])) 
{


    if (empty($_POST["name1"]) || empty($_POST["mail"]) || empty($_POST["message"]) ) 
    {
      echo json_encode("Les champs marqués * sont obligatoires");
    }
    else 
    {

        if ( !preg_match( " /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/ " , $_POST["mail"] ))
        {  echo json_encode("mail non valide"); }
        else
        {
            $message = $_POST["name1"]." a envoyé le message suivant : ". $_POST["message"];
            $to = "joubertludo@gmail.com";
            $subject = "mail issu de mon formulaire";
            $from = $_POST["mail"];
            $headers = "From:" . $from;
            if(mail($to,$subject,$message, $headers)){
              echo json_encode("Mail envoyé avec succès");
            }else{
              echo json_encode("Erreur sur ce mail :") ;
            }
        }
    }
}

?>