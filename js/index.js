var html, data;
$(document).raedy(function(){
    render();
});

function render(){
    html= '';

    $.ajax({
        type:"POST",
        dataType:"JSON",
        url:"./api/get_booklist.php",
        data: {},
        succes: function(response){
            console.log("good", response);
        },error: function(err){
            console.log("bad",err);
        }
    })
}

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