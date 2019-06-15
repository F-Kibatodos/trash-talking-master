// 載入npm相關套件
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./trash-talk')
const career = require('./career.json')

// 載入 helper
const ifEquals = require('./handlebars')

// 設定咧接埠
const port = 3000

// 解析req.body
app.use(bodyParser.urlencoded({ extended: true }))

// 設定模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// 設定路由
app.get('/', (req, res) => {
  const job = career.results
  res.render('index', { job })
})

app.post('/', (req, res) => {
  const job = career.results
  const target = req.body
  const trashTalk = generateTrashTalk(target.career)
  res.render('index', { trashTalk, target, job })
})

app.listen(port, () => {
  console.log('Please go to http://localhost:3000')
})
