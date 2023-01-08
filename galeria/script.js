$(function(){
    $('.galeria').bind('click',function(){
        let img = $(this).find('img').attr('src')
        $('.divBox').css('text-align','center')
        $('.divBox img').attr('src',img)
        $('.divBox img').css('width','100%')


        $('.divBox , .bgBox').fadeIn('fast')
    })

    $('.divBox button , .bgBox').bind('click',function(){

        $('.bgBox').fadeOut('fast')
        $('.divBox').fadeOut('fast')
    })
})