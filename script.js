// Прячем прелоадер после загрузки страницы
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    
    // Удаляем прелоадер из DOM через 0.5s (чтобы анимация успела проиграться)
    setTimeout(() => {
        preloader.remove();
    }, 500);
});

// Добавляем эффект "прилипания" хедера при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});