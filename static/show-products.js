function ModifyProduct(a) {
    window.location.pathname = 'new-modify-product.html';
}

function DeleteProduct(a) {
    alert("Ezt még nem lehet, bocsi!");
    // TODO: do this
}

function CreateProduct() {

    window.location.pathname = 'new-modify-product.html';

}

function HideOrShow(a) {

    const isShown = $('#collapse-'+a.toString()+'-body')[0].getAttribute('hidden') != null;

    $('[id^=collapse-]').each( function () {
        this.setAttribute('hidden', 'hidden');
    });

    //console.log($('#collapse-'+a.toString()+'-body')[0].getAttribute('hidden'));
    if (isShown) {
        $('#collapse-' + a.toString() + '-body')[0].removeAttribute('hidden');
        $('#collapse-' + a.toString() + '-head')[0].removeAttribute('hidden');
    }

}