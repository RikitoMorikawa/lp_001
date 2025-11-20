// YCBM統合用JavaScript

// 設定: あなたのYCBMアカウント情報に置き換えてください
const YCBM_CONFIG = {
    accountId: 'YOUR_ACCOUNT_ID',
    bookingUrl: 'https://rikitomorikawa.youcanbook.me/',
    // REST APIを使用する場合
    apiKey: 'YOUR_API_KEY',
    profileId: 'YOUR_PROFILE_ID'
};

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('YCBM Landing Page loaded');
    initSmoothScroll();
    initMobileMenu();
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

// 予約方法の切り替え
function switchBookingMethod(method) {
    const iframeContainer = document.getElementById('ycbm-iframe-container');
    const widgetContainer = document.getElementById('ycbm-widget-container');
    const iframeBtn = document.getElementById('iframe-btn');
    const widgetBtn = document.getElementById('widget-btn');

    if (method === 'iframe') {
        iframeContainer.style.display = 'block';
        widgetContainer.style.display = 'none';
        iframeBtn.classList.add('active');
        widgetBtn.classList.remove('active');
    } else {
        iframeContainer.style.display = 'none';
        widgetContainer.style.display = 'block';
        iframeBtn.classList.remove('active');
        widgetBtn.classList.add('active');
        loadYCBMWidget();
    }
}

// YCBMウィジェットの読み込み
function loadYCBMWidget() {
    const widgetContainer = document.getElementById('ycbm-widget');

    // YCBMのJavaScript SDKがある場合の実装例
    // 実際のYCBMのドキュメントに従って実装してください
    if (YCBM_CONFIG.accountId === 'YOUR_ACCOUNT_ID') {
        widgetContainer.innerHTML = `
            <div class="config-warning">
                <h4>設定が必要です</h4>
                <p>scripts.js内のYCBM_CONFIGを設定してください：</p>
                <ul>
                    <li>accountId: YCBMアカウントID</li>
                    <li>bookingUrl: 予約ページのURL</li>
                </ul>
            </div>
        `;
        return;
    }

    // YCBMウィジェットの埋め込み（例）
    widgetContainer.innerHTML = `
        <div class="ycbm-widget-placeholder">
            <p>YCBMウィジェットをここに読み込んでいます...</p>
        </div>
    `;

    // YCBMのウィジェットスクリプトを動的に読み込む
    // 実際のYCBM SDKのURLに置き換えてください
    const script = document.createElement('script');
    script.src = `https://youcanbook.me/resources/scripts/ycbm.js?account=${YCBM_CONFIG.accountId}`;
    script.async = true;
    script.onload = function() {
        console.log('YCBM widget loaded');
        // ウィジェットの初期化処理
    };
    document.body.appendChild(script);
}

// REST APIを使った予約データの取得（例）
async function fetchBookings() {
    if (!YCBM_CONFIG.apiKey || YCBM_CONFIG.apiKey === 'YOUR_API_KEY') {
        console.error('API key not configured');
        return;
    }

    try {
        const response = await fetch(
            `https://api.youcanbook.me/v1/${YCBM_CONFIG.accountId}/profiles/${YCBM_CONFIG.profileId}/bookings`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${YCBM_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Bookings:', data);
        return data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        return null;
    }
}

// 新規予約の作成（例）
async function createBooking(bookingData) {
    if (!YCBM_CONFIG.apiKey || YCBM_CONFIG.apiKey === 'YOUR_API_KEY') {
        console.error('API key not configured');
        return;
    }

    try {
        const response = await fetch(
            `https://api.youcanbook.me/v1/${YCBM_CONFIG.accountId}/profiles/${YCBM_CONFIG.profileId}/bookings`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${YCBM_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Booking created:', data);
        return data;
    } catch (error) {
        console.error('Error creating booking:', error);
        return null;
    }
}

// 利用可能な時間枠の取得（例）
async function getAvailableSlots(date) {
    if (!YCBM_CONFIG.apiKey || YCBM_CONFIG.apiKey === 'YOUR_API_KEY') {
        console.error('API key not configured');
        return;
    }

    try {
        const response = await fetch(
            `https://api.youcanbook.me/v1/${YCBM_CONFIG.accountId}/profiles/${YCBM_CONFIG.profileId}/availability?date=${date}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${YCBM_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Available slots:', data);
        return data;
    } catch (error) {
        console.error('Error fetching available slots:', error);
        return null;
    }
}

// エクスポート（必要に応じて）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchBookings,
        createBooking,
        getAvailableSlots,
        switchBookingMethod
    };
}
