/*$(function(){
    $('.icone').hover(function(){
        $(this).animate({
            'margin-top':-100,
            'width':100,
            'height':100
        },1000)
        $(this).animate({
            'margin-top':0,
            'width':70,
            'height':70
        },1000)
    })
    
})*/



$(function(){
    $('.icone').hover(function(){
    $(this).animate({
        'margin-top':-100,
            'width':100,
            'height':100
        },{
            duration:700,
            complete:function(){

            $(this).animate({
            'margin-top':0,
            'width':70,
            'height':70
            },500)
        
        }
        })
    })
    
})