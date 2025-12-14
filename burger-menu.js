document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('burger-btn');
    const menu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    let isOpen = false;
    if (btn) {  // Pastikan elemen ada sebelum add event
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            if (isOpen) {
                // Kembali ke hamburger
                line1.classList.remove('rotate-45', 'translate-y-1');
                line3.classList.remove('-rotate-45', '-translate-y-1');
                line2.classList.remove('opacity-0');
            } else {
                // Ubah ke X
                line1.classList.add('rotate-45', 'translate-y-1');
                line3.classList.add('-rotate-45', '-translate-y-1');
                line2.classList.add('opacity-0');
            }
            isOpen = !isOpen;
        });
    }
});