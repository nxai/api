<?php
    $db_host = "localhost";
    $db_name = "book_db";
    $db_user="somxai";
    $db_password="coffee";
    try {
        $db = new PDO("mysql:host={$db_host}; dbname={$db_name}",$db_user,$db_password);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ATTR_ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
        $e->getMassage();
    }
?>