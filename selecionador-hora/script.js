$(function(){
    let horaEscolhaCampo = ''
    $('input').on('focus',function(){
        var pos =  $(this).offset()
        var width = $(this).width()

        $('.horaEscolha').css('left',pos.left + width + 30)
        $('.horaEscolha').css('top',pos.top)
        $('.horaEscolha').show()
        horaEscolhaCampo  = $(this)
    })
    $('input').on('blur',function(){
        setTimeout(function(){
            $('.horaEscolha').hide()
        },200)
       
    })
    $('.horaEscolha button').on('click',function(){
        var hora = $(this).html()
        horaEscolhaCampo.val(hora)
    })
})
