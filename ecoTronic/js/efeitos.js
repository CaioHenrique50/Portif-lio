    jQuery(document).ready(function($) {
					//Aqui se pega os elementos da class scroll para realizar o respectivo efeito.
         $(".scroll").click(function(event){        
				    event.preventDefault();

                    //aqui ele pega todo conteudo html para criar a animação

                    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000 /*Aqui voce controla de onde o efito vira e o tempo da animação em segundo PS: cada 1000 e correspondente a 1 segundo.*/);
		 });
    });

$(function(){
	var click = 0;
	$('.aparece-login').click(function(){
		//todos os meus ps vao aumentar o tamanho
		click++;
		if(click == 1 ){
			$('.login').fadeIn().css({'display':'block'});
		}else{
			$('.login').hide(0);
			click-=2;
		}
	});
	
});
$(function(){
	var click = 0;
	$('.cad').click(function(){
		//todos os meus ps vao aumentar o tamanho
		click++;
		if(click == 1 ){
			$('.cadastrar').fadeIn().css({'display':'block'});
            $('.login').fadeIn().css({'display':'none'});

		}else{
			$('.cadastrar').hide(0);
			click-=2;
		}
	});
	
});
$(function(){
	var click = 0;
	$('.entar').click(function(){
		//todos os meus ps vao aumentar o tamanho
		click++;
		if(click == 1 ){
			$('.cadastrar').fadeIn().css({'display':'none'});
		}else{
			$('.cadastrar').hide(0);
			click-=2;
		}
	});
	
});
