let placar = 0
let placarVermelho = 0
let placarAzul = 0
let placarVerde = 0
 function addBola(){
    let x = Math.floor(Math.random()*800)
    let y = Math.floor(Math.random()*500)
    let color = Math.round(Math.random()*2)
    console.log(color)
    let bola = $('<div class="bola"></div>')
    bola.css('left', x +'px')
    bola.css('top', y +'px')
    switch(color){
        case 0:
        bola.css('background-color','red')
        break;

        case 1:
        bola.css('background-color','blue')
        break;

        case 2:
        bola.css('background-color','green')
        break;
    }
    
    bola.bind('click',function(){
        $(this).fadeOut('fast')
        placar ++
        updatePlacar()
        switch(color){
            case 0:
            placarVermelho++
            updatePlacarVermelho()
            break;
    
            case 1:
            placarAzul++
            updatePlacarAzul()
            break;
    
            case 2:
            placarVerde++
            updatePlacarVerde()
            break;
        }
        
    })
    $(document.body).append(bola)
    }
    function updatePlacar(){
       $('#placar').html(placar)
    }
    function updatePlacarVermelho(){
        $('#placar-vermelho').html(placarVermelho)
     }
     function updatePlacarVerde(){
        $('#placar-verde').html(placarVerde)
     }
     function updatePlacarAzul(){
        $('#placar-azul').html(placarAzul)
        
     }
     
    //$('<div class="bola"></div>').appendTo(document.body)
    



$(function(){
    $('#começar').bind('click',function(){
        começar =  setInterval(addBola,1000)
    })
    $('#terminar').bind('click',function(){
         clearInterval(começar,100)
    })

})


