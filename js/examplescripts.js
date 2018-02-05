const images = {
    'hammer': './images/hammer.gif',
    'headshot': './images/Chris_Clark_Headshot.jpg'
}

const hammerposition = [
{
    right: [75,5],
    left: [5,60]
},
{
    right: [50,50],
    left: [25,15]
},
{
    right: [75,35],
    left: [5,35]
},
{
    right: [55,15],
    left: [25,50]
},
{
    right: [75,60],
    left: [5,5]
}]


console.log($('.empty').height());


$('#go').click( () => {
    console.log('trying');
    // var newElement= newelement();
    
   
    construction($('.empty'));
    // newElement.appendTo('.container');
    
    buildanimation(0);
});


function construction(element) {
    console.log(element);
    element.append(new Curtain(element));

}   

function curtainremove() {
    
    $('.curtain-left').animate({
        width: 0
    },1000);
    $('.curtain-right').animate({
        width: 0
    }, 1000, () => {
        $('.curtain').remove();
    });

    
}

function buildanimation(index) {
   if (index<5) {
        console.log('looping');
        const hammer = $('<img/>',{src: images.hammer})
        .css({
            width: $('.curtain').width()/5,
            height: 'auto',
            position: 'absolute',
            top: hammerposition[index].right[1] + '%',
            left: hammerposition[index].right[0] + '%'
        }).appendTo($('.curtain'));

        const hammer1 = $('<img/>',{src: images.hammer})
        .css({
            width: $('.curtain').width()/5,
            height: 'auto',
            position: 'absolute',
            top: hammerposition[index].left[1] + '%',
            left: hammerposition[index].left[0] + '%'
        })
            .addClass('flip')
            .appendTo($('.curtain'));

        setTimeout( () => {
            hammer.remove();
            hammer1.remove();
            buildanimation(index+1);
        },500);

        if (index === 4) {
            setTimeout(curtainremove,750);
        }
    }
   
    
  

}

function addpicture() {
    console.log('getting here');
    var image = $('<img/>', {
        id: 'headshot',
        src: images.headshot,
        alt: 'headshot'

    })
        .css({}).appendTo($('.empty'));

    return image;
}

function newelement() {
    let element = $('<div/>')
                    .addClass('new-container')
                    .css({
                        overflow: 'auto',
                        display: 'inline-block',
                        position: 'relative'
                    });

        $('<img/>',{
            src: images.headshot,
            alt: 'headshot',
            id: 'headshot'
        })
        .css({
            position: 'relative',
            'z-index': '1'
        }).appendTo(element);

    return element;
}

