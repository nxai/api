<?php
require_once('./config.php');
if($_SERVER['REQUEST_METHOD'] == "POST"){
    $select_stmt = $db->prepare("SELECT * FROM tb_booklist");
    $select_stmt->execute();

    $data_arr = array();
    $data_arr['result'] = array();

    while($row = $select_stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $data_items = array(
            "id"=>$id,
            "name"=> $name,
            "type"=> $type
        );
        array_push($data_arr['result'], $data_items);
}
    echo json_encode($data_arr);
    http_response_code(200);
}
else{
    http_response_code(405);
}
?>