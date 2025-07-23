<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "form";

    $conn = new mysqli($host, $user, $pass, $db);
    if($conn->connect_error){
        die("connection refused" .  $conn->connect_error);
    }


    // ..
$name = $_POST['name'] ?? '';
$company = $_POST['company'] ?? '';
$details = $_POST['details'] ?? '';

if (!empty($name) && !empty($company) && !empty($details)) {
    $stmt = $conn->prepare("INSERT INTO form_table (name, company, details) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $company, $details);

    if ($stmt->execute()) {
        echo " Data submitted successfully!";
    } else {
        echo " Insert Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo " All fields are required!";
}

$conn->close();
?>