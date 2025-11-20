# YCBM統合ランディングページ

YouCanBookMe (YCBM) APIを使用した予約システムのランディングページです。

## 特徴

- モダンでレスポンシブなデザイン
- YCBM APIの複数の統合方法をサポート
  - iframeによる埋め込み
  - JavaScriptウィジェット
  - REST APIによる直接統合
- モバイルフレンドリー
- スムーズなアニメーション効果
- SEO対応

## ファイル構成

```
lp_001/
├── index.html      # メインのHTMLファイル
├── styles.css      # スタイルシート
├── scripts.js      # JavaScriptファイル
└── README.md       # このファイル
```

## セットアップ方法

### 1. YCBMアカウントの設定

まず、[YouCanBookMe](https://youcanbook.me/)でアカウントを作成し、予約ページを設定してください。

### 2. 設定ファイルの編集

#### index.html の編集

`index.html` の以下の部分を、あなたのYCBM予約URLに置き換えてください：

```html
<iframe
    id="ycbm-iframe"
    src="YOUR_YCBM_BOOKING_URL_HERE"
    width="100%"
    height="800"
    frameborder="0"
    allowfullscreen>
</iframe>
```

例：
```html
<iframe
    id="ycbm-iframe"
    src="https://yourusername.youcanbook.me/"
    width="100%"
    height="800"
    frameborder="0"
    allowfullscreen>
</iframe>
```

#### scripts.js の編集

REST APIを使用する場合は、`scripts.js` の設定を更新してください：

```javascript
const YCBM_CONFIG = {
    accountId: 'YOUR_ACCOUNT_ID',      // YCBMアカウントID
    bookingUrl: 'https://yourusername.youcanbook.me/',  // 予約ページURL
    apiKey: 'YOUR_API_KEY',            // APIキー
    profileId: 'YOUR_PROFILE_ID'       // プロフィールID
};
```

### 3. APIキーの取得方法

1. YCBMダッシュボードにログイン
2. Settings → API → Generate API Key
3. 生成されたAPIキーをコピー
4. アカウントIDとプロフィールIDも確認

## 使用方法

### ローカルで表示

1. このディレクトリをウェブサーバーで公開するか、以下のコマンドで簡易サーバーを起動：

```bash
# Pythonを使用する場合
python3 -m http.server 8000

# Node.jsを使用する場合
npx http-server
```

2. ブラウザで `http://localhost:8000` にアクセス

### 本番環境へのデプロイ

このランディングページは静的ファイルのみで構成されているため、以下のサービスで簡単にデプロイできます：

- **GitHub Pages**: リポジトリの Settings → Pages で有効化
- **Netlify**: ドラッグ&ドロップでデプロイ
- **Vercel**: GitHubリポジトリと連携してデプロイ
- **AWS S3 + CloudFront**: 静的ウェブサイトホスティング

## YCBM統合方法

### 方法1: iframeでの埋め込み（推奨）

最もシンプルで確実な方法です。YCBMの予約ページをそのまま埋め込みます。

**メリット:**
- 設定が簡単
- YCBMの最新機能が自動的に反映される
- メンテナンスが不要

**デメリット:**
- カスタマイズ性が限定的
- デザインの統一感を出しにくい

### 方法2: JavaScriptウィジェット

YCBMが提供するJavaScript SDKを使用します。

**メリット:**
- ページデザインとの統合が容易
- より柔軟なカスタマイズが可能

**デメリット:**
- 設定がやや複雑
- YCBMのドキュメントを参照する必要がある

### 方法3: REST API

完全なカスタマイズを行いたい場合に使用します。

**メリット:**
- 完全なコントロールが可能
- 独自のUIを実装できる
- 他のシステムとの統合が容易

**デメリット:**
- 開発工数が大きい
- APIキーの管理が必要
- セキュリティに注意が必要

## API使用例

### 予約一覧の取得

```javascript
const bookings = await fetchBookings();
console.log(bookings);
```

### 利用可能な時間枠の取得

```javascript
const slots = await getAvailableSlots('2025-01-15');
console.log(slots);
```

### 新規予約の作成

```javascript
const newBooking = await createBooking({
    start: '2025-01-15T10:00:00Z',
    end: '2025-01-15T11:00:00Z',
    customer: {
        name: '山田太郎',
        email: 'yamada@example.com'
    }
});
```

## カスタマイズ

### 色の変更

`styles.css` の `:root` セクションでカラースキームを変更できます：

```css
:root {
    --primary-color: #4a90e2;      /* メインカラー */
    --secondary-color: #50c878;    /* アクセントカラー */
    --text-dark: #2c3e50;          /* テキストカラー */
    /* その他の色設定... */
}
```

### コンテンツの変更

`index.html` を編集して、テキスト、画像、セクションなどを自由にカスタマイズできます。

## トラブルシューティング

### iframeが表示されない

- YCBMのURLが正しいか確認
- YCBMの設定で「Embed」が有効になっているか確認
- ブラウザのコンソールでエラーを確認

### APIが動作しない

- APIキーが正しいか確認
- アカウントIDとプロフィールIDが正しいか確認
- CORS設定を確認
- APIレート制限に達していないか確認

## 参考リンク

- [YouCanBookMe 公式サイト](https://youcanbook.me/)
- [YCBM API ドキュメント](https://api.youcanbook.me/docs/)
- [YCBM サポートセンター](https://support.youcanbook.me/)

## ライセンス

MIT License

## サポート

問題が発生した場合は、以下を確認してください：
1. YCBMの設定が正しいか
2. APIキーが有効か
3. ブラウザのコンソールにエラーが表示されていないか

それでも解決しない場合は、YCBMのサポート (support@youcanbook.me) にお問い合わせください。