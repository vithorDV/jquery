$('button').bind('click',function(){
    let cidade = $('#cidade').val()

    let now = new Date()
    let tempoUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid={fae16b8b668d812c294b9840e07b4298}`
    $.ajax({
        url:tempoUrl,
        type:'GET',
        dataType:'json',
        succes:function(json){
            
            if(json.cod === 200) {
                $('#resultado').html(json.main.temp+'º C')
            }
            
        },
        error:function(json){
            $('#resultado').html('Não encontramos a localização informada');
        }


    })
})