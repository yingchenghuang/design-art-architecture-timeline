# Design Art Architecture Timeline

互動式繁體中文網站，整理從文藝復興到當代的全球設計史、藝術史、建築史與世界脈絡時間表。

## Files

- `index.html`: 網站結構與主要內容區塊。
- `styles.css`: 視覺設計、響應式版面與互動狀態。
- `app.js`: 39 筆歷史事件、篩選搜尋、時間軸互動、圖片索引與 Wikipedia/Wikimedia 圖片載入。

## Historical Images

所有歷史事件都已配置圖片來源邏輯。網站會從 Wikipedia/Wikimedia page summaries 動態載入縮圖；若遠端縮圖不可用，會自動顯示內建備援圖像，避免版面空白。

## GitHub Pages

要公開成網站：

1. 到 repository 的 `Settings`。
2. 進入 `Pages`。
3. Source 選 `Deploy from a branch`。
4. Branch 選 `main`，資料夾選 `/root`。
5. 儲存後等待部署完成。

預期網址：

https://yingchenghuang.github.io/design-art-architecture-timeline/
