const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
  const photo = req.file;
  const comment = req.body.comment;

  if (!photo) {
    return res.status(400).send('写真がアップロードされていません');
  }

  console.log('写真のパス:', photo.path);
  console.log('コメント:', comment);

  res.status(200).send('アップロードが成功しました！');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動中...`);
});
