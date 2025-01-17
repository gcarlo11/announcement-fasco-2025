const inputnim = document.getElementById("inputnim");
const terima = document.getElementById("terima");
const pesan = document.getElementById("terimaPesan");
const tolak = document.getElementById("tolak");
const salah = document.getElementById("salah");

function handlePeriksa() {
  fetch("./dist/database/data.json")
    .then((response) => response.json())  
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (inputnim.value == data[i].nim) {
          if (data[i].status) {
            if (!tolak.classList.contains("hidden")) {
              tolak.classList.toggle("hidden");
            }
            if (!salah.classList.contains("hidden")) {
              salah.classList.toggle("hidden");
            }
            pesan.innerHTML =
              "<b>" +
              data[i].nama +
              "</b> kamu dinyatakan lolos seleksi Open Recruitment FASCO 2025. Anda diterima di Departemen <b>" +
              data[i].departemen +
              "</b>";
            terima.classList.toggle("hidden");

            return;
          } else {
            if (!terima.classList.contains("hidden")) {
              terima.classList.toggle("hidden");
            }
            if (!salah.classList.contains("hidden")) {
              salah.classList.toggle("hidden");
            }
            tolak.classList.toggle("hidden");
            return;
          }
        }

        if (i == data.length - 1 && inputnim.value != data[i].nim) {
          if (!terima.classList.contains("hidden")) {
            terima.classList.toggle("hidden");
          }
          if (!tolak.classList.contains("hidden")) {
            tolak.classList.toggle("hidden");
          }
          salah.classList.toggle("hidden");
        }
      }
    });
}
