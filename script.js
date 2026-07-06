let otp1 = document.getElementById("otp1");
let otp2 = document.getElementById("otp2");
let otp3 = document.getElementById("otp3");
let otp4 = document.getElementById("otp4");
let otp5 = document.getElementById("otp5");
let otp6 = document.getElementById("otp6");

otp1.addEventListener("input", function() {
    otp2.focus();
});

otp2.addEventListener("input", function() {
    otp3.focus();
});

otp3.addEventListener("input", function() {
    otp4.focus();
});

otp4.addEventListener("input", function() {
    otp5.focus();
});

otp5.addEventListener("input", function() {
    otp6.focus();
});

//SAAT HAPUS BACKSPACE
function resetOTP() {
    otp1.value = "";
    otp2.value = "";
    otp3.value = "";
    otp4.value = "";
    otp5.value = "";
    otp6.value = "";

    otp1.focus();
}

otp1.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        event.preventDefault(); // Mencegah penghapusan karakter di input pertama
        resetOTP();
    }
});

otp2.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        event.preventDefault();
        resetOTP();
    }
});

otp3.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        event.preventDefault();
        resetOTP();
    }
});

otp4.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        event.preventDefault();
        resetOTP();
    }
});

otp5.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        event.preventDefault();
        resetOTP();
    }
});

otp6.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        event.preventDefault();
        resetOTP();
    }
});

//SEND OTP
function sendOTP() {
    let otp = 
        otp1.value + 
        otp2.value + 
        otp3.value + 
        otp4.value + 
        otp5.value + 
        otp6.value;

if(otp.length < 6){
    alert("OTP harus 6 digit");
    return;
}

fetch("https://script.google.com/macros/s/AKfycbzbL7Rg1JNBqTuh3Njxuxz-ig5B3bcEOAFrJYTlMZtIA_ql0U5OwngThNi9gj0wufk/exec?kode=" + otp, {
    method: "GET",
    mode : "no-cors"
})

.then(response => response.text())

.then(data => {

        console.log(data);

        // Tampilkan popup
        let popup = document.getElementById("popup");
        popup.style.opacity = "1";
        popup.style.display = "block";

        // Sembunyikan popup setelah 3 detik
        setTimeout(() => {
            popup.style.opacity = "0";
            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        }, 3000);

    })

}