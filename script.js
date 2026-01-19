// ========================================
// ナビゲーションのアクティブリンク設定
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // 現在のページのURLを取得
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // すべてのナビゲーションリンクを取得
    const navLinks = document.querySelectorAll('nav a');
    
    // 各リンクをチェック
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ========================================
// スムーズスクロール
// ========================================

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

// ========================================
// フォーム送信時の処理
// ========================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Formspreeが自動的に処理するため、ここでは追加の処理は不要
        // 必要に応じてローディング状態などを追加可能
    });
}

// ========================================
// ページロード時のアニメーション
// ========================================

window.addEventListener('load', function() {
    // ページ読み込み完了時の処理
    document.body.style.opacity = '1';
});

// ========================================
// スクロール時のエフェクト
// ========================================

let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // スクロール時の処理をここに追加可能
            ticking = false;
        });
        ticking = true;
    }
});

// ========================================
// モバイルメニュー対応（将来の拡張用）
// ========================================

// レスポンシブデザインでハンバーガーメニューが必要な場合は、
// ここに処理を追加してください

console.log('Fesgrant website script loaded');
