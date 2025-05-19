function validateForm() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  if (!nama || !email || !pesan) {
    alert("Semua kolom harus diisi!");
    return false;
  }

  alert("Terima kasih! Pesan Anda telah dikirim.");
  return true;
}