# 幹話產生器

展示蒐藏的餐廳，點進去可以查看各餐廳的詳細資訊

## 開發環境

- Node 10.15.0
- Express 4.17.1
- Express-handlebars 3.1.0
- body-parser 1.19.0

### 安裝

首先在終端機(Termianl)輸入

```
cd 資料夾名稱      //移動到指定資料夾
```

或輸入

```
mkdir 資料夾名稱   //創建新資料夾
```

並在此資料夾中依序輸入

```
git clone https://github.com/F-Kibatodos/trash-talking-master.git  //將此專案下載到資料夾
cd  trash-talking-master                                           //移動到本專案資料夾
npm install                                                        //下載相關npm套件
npm run dev                                                        //執行專案
```

接著就可以在網頁輸入http://localhost:3000 見到頁面

### 功能說明

- 選擇一種職業，可以隨機產生一些幹話
- 使用者也可以在根目錄下的 career.json 自行增添職業，只要簡單的仿照
- 固定產生幹話紐於底部，即使職業多起來也可以馬上產生
- 使用者忘記選則對象會有其它字句

```
{
  "career": "職業",
  "image": "圖片連結",
  "trash": ["幹話1", "幹話2", "幹話3",......"幹話17",......"最後的幹話"]
},
```

依序放入

### 截圖

首頁：  
![首頁](https://i.imgur.com/YY9bve9.png)  
照樣加入即可  
![自行設計](https://i.imgur.com/ZeVpnTb.png)

### 作者

[F-Kibatodos](https://github.com/F-Kibatodos)
