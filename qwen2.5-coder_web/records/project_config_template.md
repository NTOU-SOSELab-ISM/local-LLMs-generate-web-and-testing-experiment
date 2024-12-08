我要使用 React 和 Vite 框架實作一個網頁出來，以下是我的使用者需求:

{your_prompt}

以下是我的專案環境配置，依照此配置生成出所有符合需求的程式碼:

## Vite 配置設定

```
project name: vite-project
framework select: React
variant select: JavaScript + SWC
```

## src 分層架構

```
./src/components //存放jsx的react component檔案
./src/styles //存放component 的 CSS 檔案
./src/pages //存放routing 分頁的jsx檔案
./src/App.jsx //注意App.jsx 和 main.jsx不會放在components資料夾裡面
./src/main.jsx
./src/index.css //index.css和App.css不會放在styles資料夾裡面
./src/App.css
./index.html
```

## main.jsx

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

style 使用 CSS 去撰寫
變數名稱使用小駝峰命名、函式名稱使用大駝峰命名
盡量用低耦合的方式撰寫 react component
善用 useRef、useMemo、useEffect、useState、memo、useContext 等等的 React 函式
page 的 routing 要用 react-router library 去實作
注意 CSS 和 jsx 是分開放在不同層的資料夾裡，所以 components 資料夾裡面的 jsx 要 import css 的時候的 path 要是 `/src/styles/{filename}`，注意要從 style 資料夾找，而不是直接從 components 資料夾裡面找，但是 App.css 會是放在和 App.jsx 同一層，所以 App.jsx 要 import css 的時候的 path 要是`/src/App.css`

給我符合使用者需求並遵照專案環境配置敘述給我所有的完整程式碼
