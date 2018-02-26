var placeholdercount=1;



$('.quadrant').on('mouseover', handleMouse)

function handleMouse()  {
    
    $(this).on('mouseleave', handleExit)
    $('.quadrant').off('mouseover');
    const attributes = $(this).attr('data-id').split('-');
    
    console.log('Working');
    var placeholder = $('<div/>').css({
        display: 'inline-block',
        width: '49.5%',
        padding: '10px'
    })
    .attr('id','placeholder' + placeholdercount);

    $(this).css({
        position: 'absolute',
        'z-index': '2',
        [attributes[0]]: '0',
        [attributes[1]]: '0'
    });

    placeholder.insertAfter($(this));

    $(this).animate({
        width: '100%',
        height: '50vh'
    },'fast', function () {
        
        $(this).find('.overlay-description').css({
            display: 'block'
        })
    });
   
    $(this).find('.overlay-title').animate({
         'font-size': '30px'
        },'fast');
    
}

function handleExit() {
    const attributes = $(this).attr('data-id').split('-');
    $($(this)).off('mouseleave');
    $(this).find('.overlay-title').animate({
        'font-size': '20px'
    },'fast');

    $(this).find('.overlay-description').css({
        display: 'none'
    });
    
    $(this).animate({
        width: '49.5%',
        height: '25vh'
        
    },'fast', function () {
        $(this).css({
            'z-index': '1',
            position: 'relative',
            
        });

        //duplicate command to handle specific bug
        $(this).find('.overlay-description').css({
            display: 'none'
        });
        
        $('#placeholder' + placeholdercount).remove();
        placeholdercount++;
        $('.quadrant').on('mouseover', handleMouse)

    });
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

