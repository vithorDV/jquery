$(function(){
    $('#senha').on('keyup',function(){
        let txt = $(this).val()
        let força = 0

        if(txt.length >= 6){
            força = força + 25
        }

        var reg = new RegExp(/[a-z]/i)
        if(reg.test(txt)){
            força = força + 25
        }

        var reg = new RegExp(/[0-9]/i)
        if(reg.test(txt)){
            força = força + 25
        }
        var reg = new RegExp(/[^a-z0-9]/i)
        if(reg.test(txt)){
            força = força + 25
        }
        if(força >= 75){
            var aceita = ' Senha corresponde á todos os requisitos'
        }
        else{
            var aceita = ' A senha não corresponde a todos os requísitos'
        }
        $('#força').html(força + '% ' + aceita)
    })
})