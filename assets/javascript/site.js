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
        width: '90%'
    },'slow');
    
}

function handleExit() {
    const attributes = $(this).attr('data-id').split('-');
    $($(this)).off('mouseleave');

    $(this).animate({
        width: '49.5%',
        
    },'slow', function () {
        $(this).css({
            'z-index': '1',
            position: 'static',
            [attributes[0]]: 'unset',
            [attributes[1]]: 'unset'
        });
        $('#placeholder' + placeholdercount).remove();
        placeholdercount++;
        $('.quadrant').on('mouseover', handleMouse)

    });
}

