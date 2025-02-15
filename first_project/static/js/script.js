document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.input-field'); // Ambil semua elemen input

    inputs.forEach(input => {
        const label = input.nextElementSibling;
        const redStar = label.querySelector('.red-star');

        // Pastikan bintang merah tidak terlihat saat halaman dimuat
        redStar.style.visibility = 'hidden';

        // Event listener untuk focus pada input
        input.addEventListener('focus', function() {
            redStar.style.visibility = 'visible'; // Tampilkan bintang merah saat fokus
            label.classList.add('active'); // Tambahkan kelas 'active' ke label
        });

        // Event listener untuk blur (keluar dari fokus)
        input.addEventListener('blur', function() {
            if (this.value === "") {
                redStar.style.visibility = 'hidden'; // Sembunyikan bintang merah jika input kosong
                label.classList.remove('active'); // Hapus kelas 'active'
            }
        });

        // Jika input sudah terisi dari awal, tambahkan kelas 'filled' dan tampilkan bintang merah
        if (input.value !== "") {
            input.classList.add('filled');
            redStar.style.visibility = 'visible'; // Tampilkan bintang merah jika input sudah terisi
        }
    });
});