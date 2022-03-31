const wrapper = document.querySelector(".wrapper"),
QRInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
QRImg = wrapper.querySelector(".qrcode img");

generateBtn.addEventListener("click", () => {
    let value = QRInput.value;
    
    if(!value) return;

    generateBtn.innerText = "Generating QR Code..."
    QRImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=175x175&data=${value}`;
   
    QRImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code"

    });
    
});

QRInput.addEventListener("keyup", () => {
    if(!QRInput.value){
        wrapper.classList.remove("active");
    }
});