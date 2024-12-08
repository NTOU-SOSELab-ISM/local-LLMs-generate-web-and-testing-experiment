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

使用`claude3.5` 以及 `JavaParser` 所生成的關係依賴圖如下

```mermaid
graph TD
    %% Components
    App["src/components/App.jsx"]
    ToggleButton["src/components/ToggleButton.jsx"]
    TextDisplay["src/components/TextDisplay.jsx"]
    Keyboard["src/components/Keyboard.jsx"]
    TextInput["src/components/TextInput.jsx"]

    %% Styles
    AppCSS["src/styles/App.css"]
    TextInputCSS["src/styles/textInput.css"]
    KeyboardCSS["src/styles/keyboard.css"]
    TextDisplayCSS["src/styles/textDisplay.css"]

    %% Entry points
    Main["src/main.jsx"]
    IndexPage["src/pages/Index.jsx"]
    IndexHTML["index.html"]

    %% Config files
    ESLintConfig["eslint.config.js"]
    ViteConfig["vite.config.js"]

    %% Dependencies
    App --> AppCSS
    App --> ToggleButton
    App --> TextDisplay
    App --> Keyboard
    App --> TextInput

    TextInput --> TextInputCSS
    TextDisplay --> TextDisplayCSS
    Keyboard --> KeyboardCSS

    Main --> App
    IndexPage --> App
```

## prompts3

在`TextDisplay.jsx`和`TextInput.jsx`中的結果有以下錯誤

-   開始輸入時顯示的文字會被清除，且會變成我打的文字，應該要是持續顯示原本的題目文字
-   題目的文字應該要在輸入文字後去變換顏色，如果輸入正確的話，文字會變成綠色，如果輸入錯誤的話，文字會變成紅色
-   題目的文本長度太低了，應該要有一個較長的文本
    以下是相關的程式碼，修正以上問題後給我完整的程式碼:

`TextDisplay.jsx`
`textDisplay.css`
`TextInput.jsx`
`textInput.css`

## result3

把 `TextDisplay.jsx` 改爛了，直接出現語法錯誤:

```jsx
import React from "react";
import "../styles/textDisplay.css";

const TextDisplay = ({ text, inputText, onCorrect, onIncorrect }) => {
    const isCorrect =
        inputText.toLowerCase() ===
        text.slice(0, inputText.length).toLowerCase();

    return (
        <div className="text-display">
            <p style={{ color: isCorrect ? "green" : "red" }}>{inputText}</p>
            {onStopTimer && <button onClick={onStopTimer}>Finish</button>}
        </div>
    );
};

export default TextDisplay;
```

## prompts4

在 TextDisplay.jsx 有以下錯誤:
TextDisplay.jsx:5 Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')
at TextDisplay (TextDisplay.jsx:5:33)

TextDisplay.jsx:16
Uncaught ReferenceError: onStopTimer is not defined
at TextDisplay (TextDisplay.jsx:16:14)
修正後給我完整的程式碼

## result4

還是有錯誤:
TextDisplay.jsx:5
Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')
at TextDisplay (TextDisplay.jsx:5:33)

```jsx
import React from "react";
import "../styles/textDisplay.css";

const TextDisplay = ({
    text,
    inputText,
    onCorrect,
    onIncorrect,
    onStopTimer,
}) => {
    const isCorrect =
        inputText.toLowerCase() ===
        text.slice(0, inputText.length).toLowerCase();

    return (
        <div className="text-display">
            <p style={{ color: isCorrect ? "green" : "red" }}>{inputText}</p>
            {onStopTimer && <button onClick={onStopTimer}>Finish</button>}
        </div>
    );
};

export default TextDisplay;
```

## prompts 5

在 TextDisplay.jsx 還是有錯誤:
TextDisplay.jsx:5
Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')
at TextDisplay (TextDisplay.jsx:5:33)

## result5

有解決語法問題，但是結果更糟了，連文本都不見了

![alt text](image-1.png)

## prompt 6
