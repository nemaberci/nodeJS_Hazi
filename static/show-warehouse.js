function DeleteWareHouse(a) {
    alert("Még nincs kész!");
}

function ModifyWareHouse(a) {
    location.pathname = "modify-warehouse.html";
}

function NewWareHouse() {
    location.pathname = "new-warehouse.html";
}

function SetModalData(a, b) {
    //TODO: Set modal data to correct values
    $('#ProductCountModal').modal('toggle');
}

function SaveModalData() {

    console.log($('#product_id').val());
    console.log($('#warehouse_id').val());
    console.log($('#product_count').val());

}

function RemoveProduct(a, b) {
    alert("Még nincs kész");
}