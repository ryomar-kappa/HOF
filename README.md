# HOF

## 環境構築
### Firebase
コマンドツールの追加
```
npm install -g firebase-tools
```
ログイン(sharedhof@gmail.com)
```
firebase login
```

### React
```
npm install
npm start
```
で起動

## デプロイ方法
```
npm run build
firebase deploy --only hosting
```
