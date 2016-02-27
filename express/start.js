import express from 'express';
import serversiderouter  from './serversiderouter'
import indexHtml from 'html!../src/html/index.html'
var server = express();


server.use('/app',express.static('dist/app'))
server.use(
  (req, res) => {
    if (req.headers['user-agent'].toLowerCase().indexOf("bot")<0) {
      res.send(indexHtml)
    }
    else {
      serversiderouter(req,res);
    }
});
server.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('started')
})