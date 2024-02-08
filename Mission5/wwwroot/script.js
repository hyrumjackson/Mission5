$(document).ready(function () {
    $('#calculateButton').click(function ()
    {
        var hours = parseFloat($('#hoursInput').val());
        var rate = parseFloat($('#rateDisplay').val());

        if (hours > 0)
        {
            var total = hours * rate;
            $('#totalCost').val(total.toFixed(2));
        }
        else
        {
            alert('Please enter a positive number of hours.');
            $('#hoursInput').val(''); // Clear the input field
            $('#totalCost').val(''); // Clear the total cost field
        }
    });
});
