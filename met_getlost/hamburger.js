jQuery(function($){
    $( '.menu-btn' ).click(function(){
    	$('.responsive-menu_A').slideToggle('expand');
    });

    if( $('.responsive-menu_A').hasClass('expand') ){
    	$('html, body').css({
    		'overflow': 'hidden',
    		'height': '100%'
		});


    
}
   

    $( '.form' ).click(function(){
        $('.responsive-menu_B').slideToggle('expand');
    });

    if( $('.responsive-menu_B').hasClass('expand') ){
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    

}    


    $( '.getlost' ).click(function(){
    	var number = 1 + Math.floor(Math.random() * 4);
      console.log(number);
      console.log("number");

     	if( number == 1){
     		window.open("getlost1.html","_self");
    
     	} else if( number == 2){
     		window.open("getlost2.html","_self");
	
		  } else if( number == 3){
     		window.open("getlost3.html","_self");

      } else if( number == 4){
        window.open("getlost4.html","_self");
      }

    });

    $( '.getlost_title' ).click(function(){
      var number = 1 + Math.floor(Math.random() * 4);
      console.log(number);
      console.log("number");
      
      if( number == 1){
        window.open("getlost1.html","_self");
    
      } else if( number == 2){
        window.open("getlost2.html","_self");
  
      } else if( number == 3){
        window.open("getlost3.html","_self");

      } else if( number == 4){
        window.open("getlost4.html","_self");
      }

    }); //end click function

    

});

    