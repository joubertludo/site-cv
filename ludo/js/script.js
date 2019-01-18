$(document).ready(function(){


$("#popup").click(function(){
  $("#popup1").show();
});
$("#close").click(function(){
 $ ("#popup1").hide();
});
$("#mentions").click(function(){
  $("#mention1").show();
});
$("#close1").click(function(){
 $ ("#mention1").hide();
});
  $(document).delegate('.open', 'click', function(event){
      $(this).addClass('oppenned');
      event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
      $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
      $('.open').removeClass('oppenned');
      event.stopPropagation();
    });
// vérif formulaire ajax
$("#valid").click(function(e){

    e.preventDefault();
    var name = $("#name1").val();
    var mail = $("#mail").val();
    var comment = $("#message").val();


    var rgpd = $("#rgpd").is(':checked');

    var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    if (!isNaN(name) || name.length == 0)


    {
    $("#result").html("le nom ne peut être numérique et est obligatoire "); 
    }
    else
    {
      if (!myRegex.test(mail))
      {

      $("#result").html("le mail n'est pas correct"); 
      }
      else
      { if (comment.length == 0)
        {
        $("#result").html("le commentaire est obligatoire "); 
        }
        else
        {
          if (!$("#rgpd").is(':checked'))
          {
          $("#result").html("vous devez valider notre politique de confidentialité des données ");  
          }
          else
          {        
            $.ajax({
            url : 'https://joubert-ludovic.fr/function/envoi.php',
            type : 'POST',
            data : { "name1" : name, "mail" : mail, "message" : comment, "rgpd" : $("#rgpd").is(':checked') },
            dataType : 'json',
            success : function(donnees, statut){ // success est toujours en place, bien sûr !
            $("#result").html(donnees);
            },
            error : function(resultat, statut, erreur){
            $("#result").html("erreur : "+erreur+" status : "+status);  
            }
            });
            
          }
        }
      }
    }

});
})
// fin

// animation des barres de compétences
function move() {
  var elem = document.getElementById("myBar1");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move1() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
function move2() {
  var elem = document.getElementById("myBar2");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
function move3() {
  var elem = document.getElementById("myBar3");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
// fin 
// sécurité js de formulaire
function verifform1() {
  var myForm = document.getElementById("myForm");
  var result = document.getElementById("result");
  result.innerHTML="";
  if(myForm.name1.value.length == 0) {
    result.innerHTML ="le nom est obligatoire";
    return false;
  }
  
  if(myForm.mail.value.length==0){
            result.innerHTML="l'email est obligatoire";
            return false;

  }
  
    if(!isNaN(myForm.name1.value)) {
      result.innerHTML = "le nom ne peut pas être numérique";
      return false;
  }

var myRegex =/^[a-z0-9._-]+@\.[a-z]{2-6}$/;
    if (myRegex.test(myForm.mail.value)){
      result.innerHTML ="mail valide";
      return false;
    }
    else{
      result.innerHTML="mail non valide";
    }
    
  }
// fin

  // debut carousel photo passion
 var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});
// fin