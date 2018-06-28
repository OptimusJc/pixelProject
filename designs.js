// load javascript when DOM is ready
$(document).ready(() => {
    //submit button
    const submit = $('input:eq(2)');

    function makeGrid() {
        const canvas = $('#pixelCanvas');
        let height = $('#inputHeight').val();
        let width = $('#inputWidth').val();

        // clears the table first then creates it
        canvas.find('tbody').remove();
        canvas.append('<tbody></tbody>');

        // select the table body
        let canvasBody = canvas.find('tbody');

        //append table rows
        for (let h = 0; h < height; h++) {
            canvasBody.append('<tr></tr>');
        }
        //append table data(columns)
        for (let w = 0; w < width; w++) {
            canvasBody.find('tr').append('<td></td>');
        }

    }

    // prevent the default action of the submit button 
    //and execute the makeGrid func instead
    submit.click((e) => {
        e.preventDefault();
        makeGrid();
    });


    // attach event listeners on each td
    $('#pixelCanvas').on('click', 'td', function () {
        let color = $('input:eq(3)').val();
        $(this).css('background-color', color);
    });


});