import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
app.listen(8080);


// app.get("/demo", (req, res) => {
//     let { id, userName, email, phone, sex } = req.body
//     //BE trả dữ liệu về cho FE
//     res.status(400).send({ id, userName, email, phone, sex });
//     // trả tất cả định dạng dữ liệu trừ number
// });

// yarn add mysql2
import mysql from 'mysql2';
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3307",
    database: "db_project"
});

// ĐĂNG KÝ
app.post("/post-signUp", (req, res) => {
    // Nhận các giá trị từ req.body
    let { taiKhoan, matKhau, hoTen, email, soDt } = req.body;

    // Tạo câu truy vấn SQL INSERT
    const insertQuery = "INSERT INTO signUp ( taiKhoan, matKhau, hoTen, email, soDt) VALUES (?, ?, ?, ?, ?)";

    // Thực hiện câu truy vấn với các giá trị từ req.body
    connect.query(insertQuery, [taiKhoan, matKhau, hoTen, email, soDt], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send("Internal Server Error");
        } else {
            console.log("Data inserted successfully");
            res.status(200).send("Data inserted successfully");
        }
    });

});

// ĐĂNG NHẬP
app.post("/post-signIn", (req, res) => {
    // Nhận các giá trị từ req.body
    let { taiKhoan, matKhau } = req.body;

    // Tạo câu truy vấn SQL SELECT
    const selectQuery = "SELECT * FROM signUp WHERE taiKhoan = ? AND matKhau = ?";

    // Thực hiện câu truy vấn với các giá trị từ req.body
    connect.query(selectQuery, [taiKhoan, matKhau], (err, result) => {
        if (err) {
            console.error("Error querying data:", err);
            res.status(500).send("Internal Server Error");
        } else {
            // Kiểm tra xem có kết quả trả về hay không
            if (result.length > 0) {
                console.log("Login successful");
                res.status(200).send(result);
            } else {
                console.log("Invalid credentials");
                res.status(401).send("Invalid credentials");
            }
        }
    });
});