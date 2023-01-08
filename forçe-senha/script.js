$('#senha').on('keyup',function(){
    let txt = $(this).val()
    let força = 0

    if(txt.length > 6){
        força +=25
    }

    var reg = new RegExp(/[a-z]/i)
    if(reg.test(txt)){
        força+=25
    }
    var reg = new RegExp(/[A-Z]/i)
    /*if(reg.test(txt)){
        alert('tem letra(s) maiucuslas(s)')
    }*/

    var reg = RegExp(/[0-9]/i)
    if(reg.test(txt)){
        força+=25
    }

    var reg = RegExp(/[^a-z0-9]/i)
    if(reg.test(txt)){
        força+=25
    }

    if(força > 75){
        let parametro = 'senha forte o bastante'
    }
    if(força < 75){
        let parametro = 'sua senha não é forte o bastante'
    }
    
    $('#força').html('Força:'+força+'%')
})





