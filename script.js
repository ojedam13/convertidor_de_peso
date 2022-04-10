const button = document.getElementById('btn');

button.addEventListener('click', function () {
    const gramos = parseInt(document.getElementById('gramos').value);
    const type = document.getElementById('type');

    if (gramos === '' || isNaN(gramos)) {
        document.getElementById('gramos').focus();
        document.getElementById('error').innerHTML = 'Escriba un peso en gramos';
        document.getElementById('output').innerHTML = '';
    } else {
        document.getElementById('error').innerHTML = '';
        switch (type) {
            case 'Libras':
                convert_pounds(gram);
                break;
            case 'Kilogramos':
                convert_kilogram(gram);
                break;
            case 'Onzas':
                convert_ounces(gram);
                break;
            case 'Piedras':
                convert_stones(gram);
                break;
            default:
                alert('Error'); 
        }
        // function convert_pounds(gram) {
        //     let rate =
        // }
    }
});