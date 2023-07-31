window.onload = function() {
    const imageList = [
        'media/kotoshi.png',
        'media/botan osu hito.jpg',
        'media/hakamairi.png',
        'media/ohanami.jpg',
        'media/drink_takunomi_woman.png',
        'media/bar_shaker_woman.png',
        'media/jesture_game.png',
        'media/beer.png'
    ];

    function showRandomIllustration() {
        const mainImage = document.getElementById('mainImage');
        const randomIndex = Math.floor(Math.random() * imageList.length);
        const randomImage = imageList[randomIndex];
        mainImage.src = randomImage;
    }

    const randomButton = document.getElementById('randomButton');
    randomButton.addEventListener('click', showRandomIllustration);

    showRandomIllustration();
};

