function open_modal_add(){
    $("#modal_add").css("display","flex");
}
function open_modal_edit(){
    $("#modal_edit").css("display","flex");
}
function close_modal(){
    $(".modal").css("display","none");
}
function deelet_booklist(){
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
}