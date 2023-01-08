let vez = 'o'



function atualizarPlacar(){
if(vez === 'o'){
    document.querySelector('.placar').innerHTML = `<p>É a vez de:<strong class="vez">${vez}</strong></p>`
    document.querySelector('.vez').style.color = 'blue'
}
else{
    document.querySelector('.placar').innerHTML = `<p>É a vez de:<strong class="vez">${vez}</strong></p>`
    document.querySelector('.vez').style.color = 'red'
}}

function verificarCampeao(){
    let a1 = $('.a1').attr('data-marcado')
    let a2 = $('.a2').attr('data-marcado')
    let a3 = $('.a3').attr('data-marcado')

    let b1 = $('.b1').attr('data-marcado')
    let b2 = $('.b2').attr('data-marcado')
    let b3 = $('.b3').attr('data-marcado')

    let c1 = $('.c1').attr('data-marcado')
    let c2 = $('.c2').attr('data-marcado')
    let c3 = $('.c3').attr('data-marcado')
    let ganhador = ''
    for(let i = 0;i<=1;i++){
        if(i==0){
            var op = 'o'
        }
        else{
            var op = 'x'
        }
        
        if(a1 == op && b1 == op && c1 == op){
            ganhador = op
        }
        else if(a2 == op && b2 == op && c2 == op){
            ganhador = op
        }
        else if (a3 == op && b3 == op && c3 == op){
            ganhador = op
        }

        else if(a1 == op && a2 == op && a3 == op){
            ganhador = op
        }
        else if(b1 == op && b2 == op && b3 == op){
            ganhador = op
        }
        else if(c1 == op && c2 == op && c3 == op){
            ganhador = op
        }

        else if(a1 == op && b2 == op && c3 == op){
            ganhador = op
        }
        else if(c1 == op && b2 == op && a3 == op){
            ganhador = op
        }
    }
    if(ganhador != ''){
        setTimeout(function(){
        if(ganhador == 'o'){
             alert('O ganhador foi O')
        }
        else if(ganhador == 'x'){
             alert('O ganhador foi x')
        }
        $('.area').html('')
        $('.area').attr('data-marcado','')
    },100)
    }
    else if(a1 !='' && a2 !='' && a3 !='' && b1 !='' && b2 !='' && b3 !='' && c1 !='' && c2 !='' && c3 !='' ){
        setTimeout(function(){
            alert('EMPATE!!!')
            $('.area').html('')
            $('.area').attr('data-marcado','')
        },100)
       

    }
}




$(function(){
    atualizarPlacar()
    $('.area').bind('click',function(){
        if($(this).find('.vez').length == 0){
            if(vez == 'o'){
                $(this).html('<strong class="O">O</strong>')
                $(this).attr('data-marcado','o')
                vez = 'x'
               
            }
            else{
                $(this).html('<strong class="X">X</strong>')
                $(this).attr('data-marcado','x')
                vez = 'o'
            }
            atualizarPlacar()
            verificarCampeao()
        }
    })
})