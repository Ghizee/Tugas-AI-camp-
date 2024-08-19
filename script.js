// Mengubah teks heading <h1> setelah halaman dimuat
window.onload = function() {
    document.querySelector('h1').innerText = "Latihan JavaScript Selesai";

    // Deklarasi variabel
    let name = "John";
    const age = 30;

    // Tampilkan nama dan umur di dalam div dengan ID "output"
    let output = "Name: " + name + "<br>Age: " + age + "<br><br>";

    // Buat array fruits dan tampilkan semua buah menggunakan perulangan for
    let fruits = ["Apple", "Banana", "Mango"];
    output += "Fruits:<br>";
    for (let i = 0; i < fruits.length; i++) {
        output += fruits[i] + "<br>";
    }

    output += "<br>";

    // Buat objek person dan tampilkan properti firstName dan lastName
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    output += "Person:<br>First Name: " + person.firstName + "<br>Last Name: " + person.lastName + "<br><br>";

    // Panggil fungsi greet() dengan beberapa nama
    output += greet("Alice") + "<br>";
    output += greet("Bob") + "<br><br>";

    // Panggil fungsi calculateSquare() dengan beberapa angka
    output += "Square of 3: " + calculateSquare(3) + "<br>";
    output += "Square of 5: " + calculateSquare(5) + "<br><br>";

    // Panggil arrow function untuk menjumlahkan dua angka
    let sum = (a, b) => a + b;
    output += "Sum of 4 and 6: " + sum(4, 6) + "<br>";
    output += "Sum of 10 and 20: " + sum(10, 20) + "<br><br>";

    // Buat array students dan tambahkan satu nama
    let students = ["Alice", "Bob", "Charlie"];
    students.push("David");

    // Gunakan forEach untuk menampilkan semua nama siswa
    output += "Students:<br>";
    students.forEach(function(student) {
        output += student + "<br>";
    });
    output += "<br>";

    // Buat objek car dan tampilkan semua propertinya menggunakan for...in loop
    let car = {brand: "Toyota", model: "Corolla", year: 2020};
    output += "Car:<br>";
    for (let key in car) {
        output += key + ": " + car[key] + "<br>";
    }
    output += "<br>";

    // Buat array objek untuk beberapa mobil
    let cars = [
        {brand: "Honda", model: "Civic", year: 2018},
        {brand: "Ford", model: "Focus", year: 2019},
        {brand: "Nissan", model: "Altima", year: 2021}
    ];

    // Gunakan forEach untuk menampilkan informasi setiap mobil
    output += "Cars:<br>";
    cars.forEach(function(car) {
        output += car.brand + " " + car.model + " (" + car.year + ")<br>";
    });

    // Tampilkan semua hasil di dalam div dengan ID "output"
    document.getElementById("output").innerHTML = output;
};

// Fungsi untuk memeriksa nilai yang dimasukkan dan menampilkan hasilnya
function checkValue() {
    // Membaca nilai yang dimasukkan pengguna
    let userValue = document.getElementById("userInput").value;
    let output = "";

    // Menggunakan if...else untuk memeriksa nilai
    if (userValue > 10) {
        output = "Nilai lebih besar dari 10.<br>";
    } else if (userValue == 10) {
        output = "Nilai sama dengan 10.<br>";
    } else {
        output = "Nilai kurang dari 10.<br>";
    }

    // Menggunakan perulangan for untuk menampilkan angka 1 hingga nilai yang dimasukkan
    output += "Angka dari 1 hingga " + userValue + ":<br>";
    for (let i = 1; i <= userValue; i++) {
        output += i + "<br>";
    }

    // Menampilkan hasil di div dengan ID "output"
    document.getElementById("output").innerHTML += "<br>" + output;
}

// Fungsi greet() yang mengembalikan pesan "Hello, " diikuti dengan nama
function greet(name) {
    return "Hello, " + name;
}

// Fungsi calculateSquare() yang mengembalikan kuadrat dari angka yang diberikan
function calculateSquare(number) {
    return number * number;
}
