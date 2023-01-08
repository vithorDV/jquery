$(function(){
    $('#objeto').bind('mousedown',function(){
        $('#objeto').bind('mousemove',function(e){
        let x = e.originalEvent.pageX
        let y = e.originalEvent.pageY
        let height = $(this).height()
        let width = $(this).width()
        
        $(this).css('left', (x - (width/2) ) + 'px' )
        $(this).css('top', (y - (height/2)) + 'px')
        })
    })





    $('#objeto').bind('mouseup',function(){
        $('#objeto').unbind('mousemove')
    })
})