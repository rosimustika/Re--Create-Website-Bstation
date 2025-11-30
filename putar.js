// Mengambil elemen tombol
const likeButton = document.querySelector('.like-btn');
const favButton = document.querySelector('.fav-btn');

// Fungsi untuk mengubah teks ketika tombol like diklik
likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
    if (likeButton.classList.contains('liked')) {
        likeButton.textContent = "👍 2.3K Liked";
    } else {
        likeButton.textContent = "👍 2.3K";
    }
});

// Fungsi untuk mengubah teks ketika tombol favorit diklik
favButton.addEventListener('click', () => {
    favButton.classList.toggle('favorited');
    if (favButton.classList.contains('favorited')) {
        favButton.textContent = "💖 Favorited";
    } else {
        favButton.textContent = "💖 Favorit Saya";
    }
});
