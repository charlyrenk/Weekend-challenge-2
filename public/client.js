$(document).ready(function () {
    console.log('Jquery is sourced')
    $('#addButton').on('click', function () {
        console.log('add button was clicked')
        var numberX = $("#numberX").val();
        var numberY = $("#numberY").val();
        var type = "Add"
        $.ajax({
            method: 'POST',
            url: '/calc',
            // data becomes req.body
            data: {
                x: numberX,
                y: numberY,
                type: type
            },
            success: function (response) {
                console.log(response);
            }
        })
    })
})
