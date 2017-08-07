$(document).ready(function () {
    console.log('Jquery is sourced')
    $('#addButton').on('click', function () {

        console.log('add button was clicked')
        var numberX = $("#numberX").val();
        var numberY = $("#numberY").val();
        var type = "Add"
        doCalculation(numberX, numberY, type);
    })
    $('#subtractButton').on('click', function () {

        console.log('Subtract button was clicked')
        var numberX = $("#numberX").val();
        var numberY = $("#numberY").val();
        type = "Subtract"
       doCalculation(numberX, numberY, type);
    })
    $('#multiplyButton').on('click', function () {

        console.log('multiply button was clicked')
        var numberX = $("#numberX").val();
        var numberY = $("#numberY").val();
        type = "Multiply"
        doCalculation(numberX, numberY, type);
    })
    $('#divideButton').on('click', function () {

        console.log('divide button was clicked')
        var numberX = $("#numberX").val();
        var numberY = $("#numberY").val();
        var type = "Divide"
        doCalculation(numberX, numberY, type);
    })
    $('#clearButton').on('click', function () {
        location.reload()
    })

})

function doCalculation(numberX, numberY, type) {
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
}