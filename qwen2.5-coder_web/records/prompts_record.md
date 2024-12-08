## prompts1

`project_config_template.md` + `user_prompts.md`

## result1

生成出的檔案結構如下:

```
vite-project/
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Keyboard.jsx
│   │   ├── TextDisplay.jsx
│   │   ├── TextInput.jsx
│   │   └── ToggleButton.jsx
│   ├── pages/
│   │   ├── Index.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── common.css
│   │   ├── keyboard.css
│   │   ├── textDisplay.css
│   │   └── textInput.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
└── package.json
```

但是生成出的檔案卻不符合結構的路徑，如每個元件的 css 路徑都是錯誤的
在`main.jsx`中的 StrictMode 用法錯誤

```jsx
import { createRoot } from "react-dom/client";
import Index from "./pages/Index";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);
```

## prompts2

以上生成的程式碼的所有 components 元件的 css 路徑都是錯誤的，css 是放在外層的 styles 裡面不是方在同一層，還有在`main.jsx`中的 StrictMode 用法錯誤，修正後給我所有的完整程式碼

## result2

還是一樣錯誤的。
自己修正路徑問題

修正後的結果如下
![alt text](image.png)
