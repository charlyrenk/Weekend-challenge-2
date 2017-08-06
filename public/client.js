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
                $('#result').append('<div>' + response + '</div>');
            }
        })
    })
    $('#subtractButton').on('click', function () {

        console.log('Subtract button was clicked')
        var numberX = $("#numberX").val();
        var numberY = $("#numberY").val();
        type = "Subtract"
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
                $('#result').append('<div>' + response + '</div>');
            }
        })
    })
    $('#multiplyButton').on('click', function () {

        console.log('multiply button was clicked')
        var numberX = $("#numberX").val();
        var numberY = $("#numberY").val();
        type = "Multiply"
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
                $('#result').append('<div>' + response + '</div>');
            }
        })
    })
    $('#divideButton').on('click', function () {

        console.log('divide button was clicked')
        var numberX = $("#numberX").val();
        var numberY = $("#numberY").val();
        var type= "Divide"
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
                $('#result').append('<div>' + response + '</div>');
            }
        })
    })
    // function getResult() {
    //     $.ajax({
    //         method: 'GET',
    //         url: '/calc',
    //         success: 
    //         function (response) {
    //             $('#result').empty();
    //             $('#result').append('<div>' + response + '</div>');
    //         }
    //     })
    // }
})