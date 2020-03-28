$(function(){
    var click = 18;
    $('.aumentar').click(function(){
        if( click < 25){
            click+=2;
            $('p').css({'font-size':click+'px'});
        }
        
    });
    
    $('.diminuir').click(function(){
        //var click = click;
        click-=2;
        if( click > 10){
            $('p').css({'font-size':click+'px'});
        }
        
    });
    var click2 = 0;
    $('.contraste').click(function(){
        click2++;
        if(click2 == 1){
            $('body').css({'background-color':'#000'});
            $('p').css({'color':'#fff'});
            $('img').css({'filter':'grayscale(100%)'});
        }else if(click2 == 2){
            $('body').css({'background-color':'#fff'});
            $('p').css({'color':'#000'});
            $('img').css({'filter':'grayscale(0%)'})
            
            click2 -=2;
        }
        
    });
    
    
});$(function(){
    var click = 18;
    $('.aumentar').click(function(){
        if( click < 40){
            click+=2;
            $('p').css({'font-size':click+'px'});
        }
        
    });
    
    $('.diminuir').click(function(){
        //var click = click;
        click-=2;
        if( click > 10){
            $('p').css({'font-size':click+'px'});
        }
        
    });
    var click2 = 0;
    $('.contraste').click(function(){
        click2++;
        if(click2 == 1){
            $('body').css({'background-color':'#000'});
            $('p').css({'color':'#fff'});
            $('img').css({'filter':'grayscale(100%)'});
            $('.download').css({'background-image':'linear-gradient(to bottom, #ccc, #ccc)'});
            $('.plataformas-baixar').css({'background-image':'linear-gradient(to bottom, #ccc, #ccc)'});
            $('.escolha-uma').css({'background-color':'#000'});
            $('.opcoes-plataformas li').css({'background-color':'#000'});
            $('.opcoes-plataformas li img').css({'filter':'invert(100%)'})
            
        }else if(click2 == 2){
            $('.escolha-uma').css({'background-color':'#ccff33'});
            $('.opcoes-plataformas li').css({'background-color':'#ccff33'});
            $('body').css({'background-color':'#fff'});
            $('p').css({'color':'#000'});
            $('img').css({'filter':'grayscale(0%)'});
            $('.download').css({'background-image':'linear-gradient(to bottom, #009966, #009999)'});
            $('.plataformas-baixar').css({'background-image':'linear-gradient(to bottom, #009999, #00ccff)'});
            click2 -=2;
        }
        
    });
    $(document).bind('keypress', function(event) {
        if( event.which === 78 && event.shiftKey ) {
            
        }
    });
    
});