// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cebu Study Abroad LP loaded');
    initSmoothScroll();
    initMobileMenu();
    initFAQ();
    initScrollAnimations();
});

// スムーズスクロールの実装
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// モバイルメニューの初期化
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}

// FAQ の開閉機能
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const currentlyActive = item.classList.contains('active');

            // すべてのアクティブなクラスを削除
            faqItems.forEach(i => i.classList.remove('active'));

            // 現在クリックされたものがアクティブでなかった場合、アクティブにする
            if (!currentlyActive) {
                item.classList.add('active');
            }
        });
    });
}


// スクロールアニメーション
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.feature-card, .stat-card, .faq-item');

    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// CSS側で .is-visible と .feature-card などの初期状態を設定する必要があります。
// 例:
// .feature-card { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
// .feature-card.is-visible { opacity: 1; transform: translateY(0); }
