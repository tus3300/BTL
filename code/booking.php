<?php
//Kết nối tới cơ sở dữ liệu
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Xử lý yêu cầu đặt sân bóng đá
if(isset($_POST['submit'])){
    $customer_name = $_POST['customer_name'];
    $phone_number = $_POST['phone_number'];
    $booking_date = $_POST['booking_date'];
    $booking_time = $_POST['booking_time'];
    $field_id = $_POST['field_id'];

    //Thêm thông tin đặt sân vào cơ sở dữ liệu
    $sql = "INSERT INTO bookings (customer_name, phone_number, booking_date, booking_time, field_id) 
    VALUES ('$customer_name', '$phone_number', '$booking_date', '$booking_time', '$field_id')";

    if ($conn->query($sql) === TRUE) {
        echo "Đặt sân thành công";
    } else {
        echo "Đặt sân thất bại: " . $conn->error;
    }
}

//Truy vấn thông tin các sân bóng đá
$sql = "SELECT id, name, location FROM fields";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    //In danh sách các sân bóng đá
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Name: " . $row["name"]. " - Location: " . $row["location"]. "<br>";
    }
} else {
    echo "Không có sân bóng đá nào";
}

$conn->close();
?>
