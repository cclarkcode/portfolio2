function Curtain(element) {
    console.log('adding curtain');
    var curtain = new $('<div/>', {'class': 'curtain'})
        .css({
            position: 'absolute',
            top: 0,
            left: 0,
            height: element.height(),
            width: element.width(),
            ['z-index']: '2',
            // overflow: 'hidden'   
    });

    var curtain1 = new $('<div/>', {'class': 'curtain-left'})
        .css({
            background: '#192d3d',
            height: element.height(),
            width: element.width()/2,
            float: 'left'
        }).appendTo(curtain);

        var curtain2 = new $('<div/>', {'class': 'curtain-right'})
        .css({
            background: '#192d3d',
            height: element.height(),
            width: element.width()/2,
            float: 'right'
        }).appendTo(curtain);

        console.log(curtain);

    return curtain;
}