document.addEventListener("DOMContentLoaded", function() {
    const newsItems = document.querySelectorAll(".news-item");
    const controlButtons = document.querySelectorAll("#controls button");
    let currentIndex = 0;

    function showNews(index) {
        newsItems.forEach(item => {
            item.style.display = "none";
        });

        currentIndex = index;
        newsItems[currentIndex - 1].style.display = "block";
    }

    function goToNews(index) {
        showNews(index);
    }

    // Exibir a primeira notícia imediatamente
    showNews(1);

    // Alterar a notícia a cada 30 segundos
    setInterval(function() {
        currentIndex = (currentIndex + 1) % newsItems.length + 1;
        showNews(currentIndex);
    }, 5000);

    // Associar os botões aos respectivos índices de notícias
    controlButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            goToNews(index + 1);
        });
    });
});
