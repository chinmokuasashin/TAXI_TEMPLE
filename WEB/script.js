// 導航欄滾動效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(198, 69, 54, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(198, 69, 54, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 手機選單切換
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // 動畫效果
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// 點擊選單項目後關閉手機選單
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// 平滑滾動到錨點
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 考慮固定導航欄高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 滾動時顯示動畫效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 觀察需要動畫的元素
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.pricing-table-wrapper, .service-card, .contact-info');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// 微信按鈕點擊處理（如果無法直接打開，顯示提示）
document.querySelectorAll('.wechat-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // 在移動設備上嘗試打開微信
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile) {
            // 在桌面端顯示提示
            const wechatId = 'A0960973669';
            if (confirm('請在微信中搜索 ID: ' + wechatId + '\n\n或掃描二維碼添加好友')) {
                // 可以複製到剪貼板
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(wechatId).then(() => {
                        alert('微信ID已複製到剪貼板: ' + wechatId);
                    });
                }
            }
        }
    });
});

// 頁面載入完成後的動畫
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// 初始設置
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

