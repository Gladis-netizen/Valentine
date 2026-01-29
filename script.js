// Fungsi pindah halaman
function nextPage(pageNumber) {
    // Hilangkan kelas active dari semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    // Tambahkan kelas active ke halaman yang dituju
    const targetPage = document.getElementById('p' + pageNumber);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Efek Finish
function finish() {
    alert("I Love You So Much! ❤️");
    // Kamu bisa ganti alert ini dengan mengarahkan ke WA dia
    // window.location.href = "https://wa.me/nomorkamu";
}

// Fungsi membuat hujan hati (looping)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');
    heart.innerHTML = '❤️'; // Kamu bisa ganti dengan emoji lain
    
    // Random posisi dan kecepatan
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Antara 2-5 detik
    heart.style.opacity = Math.random() * 0.5 + 0.5; // Transparansi random
    heart.style.fontSize = Math.random() * 10 + 15 + 'px'; // Ukuran random

    document.body.appendChild(heart);

    // Hapus elemen hati setelah jatuh biar gak menuhi RAM
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Jalankan fungsi hujan hati setiap 300ms
setInterval(createHeart, 300);