<!DOCTYPE html>
<html>
<head>
    <title>Student Records</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 30px;
        }
        
        .container {
            width: 80%;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        }
        
        h2 {
            color: #2c3e50;
            margin-bottom: 20px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
        }
        
        table, th, td {
            border: 1px solid #ddd;
        }
        
        th {
            background-color: #3498db;
            color: white;
        }
        
        th, td {
            padding: 12px;
            text-align: left;
        }
        
        .error {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
<div class="container">
    <h2>Student Records from Database</h2>

    <?php
    // Database configuration
    $servername = "localhost";
    $username = "root";         // default XAMPP username
    $password = "";             // default XAMPP password is blank
    $dbname = "school";      // database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("<p class='error'>Connection failed: " . $conn->connect_error . "</p>");
    }


    $insert_sql = "INSERT INTO students (name, age, grade) VALUES ('pappu', 23, '10th')";
    $conn->query($insert_sql);//random value inserted from code
    
    
    // Fetch data
    $sql = "SELECT id, name, age, grade FROM students";
    $result = $conn->query($sql);



    if ($result->num_rows > 0) {
        echo "<table>";
        echo "<tr><th>ID</th><th>Name</th><th>Age</th><th>Grade</th></tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>" . htmlspecialchars($row["id"]) . "</td>
                    <td>" . htmlspecialchars($row["name"]) . "</td>
                    <td>" . htmlspecialchars($row["age"]) . "</td>
                    <td>" . htmlspecialchars($row["grade"]) . "</td>
                  </tr>";
        }

        echo "</table>";
    } else {
        echo "<p>No records found.</p>";
    }

    $conn->close();
    ?>
</div>
</body>
</html>