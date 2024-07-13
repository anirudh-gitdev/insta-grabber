var express = require('express');
var router = express.Router();
const instagramGetUrl = require("../bin/ani-insta-pack")

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  res.render('index', { title: '', download_url : '' });
});


async function downloadMedia(getInstaURL) {
  try {
      const download = await instagramGetUrl(getInstaURL);
      return download;
      // console.log(download);
  } catch (error) {
      console.error(error);
  }
}

// let getDownloadURL = (instaURL) => {
//   return new Promise((resolve, reject) => {
//     downloadMedia(instaURL).then((response) => {
//       console.log("==========RESOLVED", response)
//       resolve(response)
//     }).catch(err => reject(err))
//   })

// }


router.post('/', async (req, res)=> {
// res.send(req.body);
// console.log("==========",getDownloadURL(req.body.insta_url))
// res.render('index', {download_url: getDownloadURL(req.body.insta_url), title: ''})
  
// downloadMedia(req.body.insta_url).then(response => {
//     console.log(response.url_list[0])
//     res.render('index', {download_url: response.url_list[0], title: ''})
//   }).catch(err => {
//     console.log(err)
//     res.send({status: 'Something went wrong', error: err})
//   }
//   )

let getMedia = await downloadMedia(req.body.insta_url);
console.log("CHECK MEDIA",getMedia.url_list[0])
res.render('index', {download_url: getMedia.url_list[0], title: ''})

})

module.exports = router;
