var html, data;

$(document).ready(function() {
    render();
});

function render(){
    html= '';

    $.ajax({
        type:"POST",
        dataType:"JSON",
        url:"./api/get_booklist.php",
        data: {},
        success: function(response){
            console.log("good", response);

            data = response.result;

            for(var i =0; i<data.length; i++){
                html +=`
                <tr>
                <td>${i}</td>
                <td>${data[i].name}</td>
                <td>${data[i].type}</td>
                <td>
                    <div class="btn-control">
                        <div onclick="open_modal_edit()" class="btn-edit">edit</div>
                        <div onclick="deelet_booklist()" class="btn-delete">delete</div>
                    </div>
                </td>
            </tr>
                `
            }
            $('#tbody').html(html);
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