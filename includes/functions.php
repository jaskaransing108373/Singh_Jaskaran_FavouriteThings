<?php
    // include the file we just wrote - connect
     // like a JS import statement
    include("connect.php");
    

 
        $query = "SELECT * FROM proddata";

        $runQuery = $pdo->query($query);
        $result = array();

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo(json_encode($result));
    

   