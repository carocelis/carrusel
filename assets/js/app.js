
$(document).ready(function(){
  var imgItems = $('.thumbnail img').length; //Número de imágenes

  for(i = 1; i <= imgItems; i++){
    $('.paginations').append('<li><i class="fa fa-circle pag" aria-hidden="true"></i></li>'); // Mostrar un ícono de paginación por cada imagen  
  }


  $('.thumbnail img').hide(); //ocultar todas las imágenes
  $('.thumbnail img:first').show(); // mostrar la primera imagen
  $('.paginations li:first').css({'color': 'white'}); // dar color al primer ícono de la paginación


//Ejecución de las funciones
  $('.paginations li').click(paginations);
  $('.chevronLeft').click(prevImg);
  $('.chevronRight').click(SigImg);

  function paginations(){
    var paginationPosition = $(this).index() + 1; //Posición de cada ícono

    $('.thumbnail img').hide(); 
    $('.thumbnail img:nth-child('+ paginationPosition +')').fadeIn();  //Muestra imagen según posición de ícono

    $('.paginations li').css({'color': '#797C74'});
    $(this).css({'color': 'white'});
  }

});