// 從選好的幹話庫隨機挑出其一
function selectTrashTalk(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

const vocations = require('./career.json')
const vocation = vocations.results

function generateTrashTalk(option) {
  // 準備幹話庫
  const noTargetPharse = [
    '沒人可以噴垃圾話嗎...?請期待邊緣人必備，自我對話程式',
    '臥槽!沒對象也能講幹話!',
    '麥當勞歡樂送，快開門!',
    '選個對象吧大佬，不然我就要對你講幹話惹QQ',
    '先挑啊客官兒~很急喔~keep your pants on, dude',
    '身為一位汽車維修員，好啦...老梗我知道...',
    '身為一位辣雞，隨口講兩句幹話應該很簡單吧',
    '對不起...我詞窮了orz',
    '是不是這樣的夜晚，你才會這樣的想騎我...嗯?是想起，沒事兒',
    '之前去邊緣人互助會分享故事結果沒人理我(泣'
  ]
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // 依使用者選到的目標產生幹話
  let collection = []
  // 沒選對想的話
  if (!option.career) return selectTrashTalk(noTargetPharse)
  // 選到哪個對像職業該產生什麼幹話
  for (let item of vocation) {
    if (option.career === item.career) collection = item.trash
  }

  // 製造幹話
  let trashTalk = `身為一個${option.career}，${selectTrashTalk(
    collection
  )}${selectTrashTalk(phrase)}吧`

  // 回傳幹話
  return trashTalk
}

module.exports = generateTrashTalk
