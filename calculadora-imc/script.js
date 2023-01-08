$('#calcularIMC').on('click',function(){
   

    let altura =$('#altura').val()
    let peso = $('#peso').val()

    altura = altura.replace(',','.')
    peso = peso.replace(',','.')

    
    let imc = peso / (altura * altura)

    if(imc < 16){
        $('.resposta').html(`Seu IMC é :${imc.toFixed(2)}, Baixo peso muito grave`)
    }
    else if(imc > 16 && imc <17){
        $('.resposta').html(`Seu IMC é :${imc.toFixed(2)}, Baixo peso grave`)
    }
    else if(imc >= 17 && imc < 18.49){
        $('.resposta').html(`Seu IMC é :${imc.toFixed(2)}, baixo peso`)
    }
    else if(imc >= 18.5 && imc < 24.9){
        $('.resposta').html(`Seu IMC é :${imc.toFixed(2)}, Peso normal`)
    }
    else if(imc >= 25 && imc < 29.99){
        $('.resposta').html(`Seu IMC é :${imc.toFixed(2)}, Sobrepeso`)
    }
    else if (imc >= 30 && imc < 34.9){
        $('.resposta').html(`Seu IMC é :${imc.toFixed(2)}, Obesidade grau I`)
    }
    else if (imc >= 35 && imc < 39.9){
        $('.resposta').html(`Seu IMC é :${imc.toFixed(2)}, Obesidade grau II`)
    }
    else if (imc >= 40){
        $('.resposta').html(`Seu IMC é :${imc.toFixed(2)}, Obesidade grau III`)
    }
})

$('form').submit(function(e){
e.preventDefault()
})