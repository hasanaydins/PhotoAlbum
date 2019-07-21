#  Photo Album
 NodeJs ve ExpressJs kullanarak API üzerinden album ve fotograf goruntuleme sitesi.
 
 Uygulamayı açmak icin : [![](./readme-img/heroku.svg)](https://photo-album-challenge.herokuapp.com "Uygulamayı Aç")
 
 ## Görünüm
#### Login Ekranı
![Example screenshot](./readme-img/login.png)


#### Anasayfa Ekranı
![Example screenshot](./readme-img/albums.png)



## Gerekli Araçlar
* NodeJs ve NPM
* Express

### Kullanılan Eklentiler
* Nunjucks
* Gulp
* Gulp-csso
* Gulp-less
* Gulp-minify
* Gulp-watch
* Body Parser
* Passport



## Başlangıç

#### package.json dosyası
Gerekli olan tüm eklentiler `package.json`  dosyamızda mevcut. Direk bu kodu projenin oluşturulacağı klasörde package.json dosyasının içine yapıştırabilirsiniz.
```javascript
{
    "name": "challengeproj",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "server": "nodemon app.js -e js,njk"
    },
    "engines": {
        "node": ">= v10.16.0",
        "npm": ">= 6.9.0"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/hasanaydins/PhotoAlbum.git"
    },
    "bugs": "https://github.com/hasanaydins/PhotoAlbum/issues",
    "author": "hasan",
    "license": "ISC",
    "dependencies": {
        "body-parser": "^1.19.0",
        "express": "^4.17.1",
        "nunjucks": "^3.2.0"
    },
    "devDependencies": {
        "gulp": "^4.0.2",
        "gulp-csso": "*",
        "gulp-less": "*",
        "gulp-minify": "^3.1.0",
        "nodemon": "^1.19.1",
        "passport": "^0.4.0"
    }
}

```
Daha sonra:`npm install` diyip bu modulleri yukleyiniz.

 ### İşlem sonundaki kod haritamız:
 ![Example screenshot](./readme-img/package.png)


## Kurulum
Şimdi app.js olusturuyoruz ve kullanacagımız ana modulleri ve yönlendirmeleri tanımlıyoruz : 
```javascript
var express = require('express');
var nunjucks = require('nunjucks');
var passport = require('passport');
var bodyParser = require('body-parser');
var app = express();

```
Daha sonra tarayıcı için sayfa yönlendirmelerini ekliyoruz:
```javascript
// Anasayfamız login sayfası
app.get("/", function(req, res) {
    res.render("login");
});
app.post("/albums", function(req, res) {
    if (req.body.username == "admin" && req.body.password == "admin") {
        res.render("albums");
    } else
        res.render("login", { message: 'Kullanıcı adı veya parola geçersiz!' });
});
app.get("/albums", function(req, res) {
    res.render("error");
});
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, function() {
    console.log("server %d portunda", this.address().port);
});
```
Şimdi sayfadan alacagımız şifreyi kontrol etmek ve nunjucks ı kurmak için gereken kodları yazıyoruz:
```javascript
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('dist'));
app.set("view engine", "njk"); // uzantı eklemek icin nodemon app.js -e js,html,njk,css

nunjucks.configure('views', {
    express: app
});
```
## Arayüz
##### Html templateleri için `views` klasoru altında `partials` , `login` ve `albums` sayfalarımızı olusturuyoruz.


## API Bağlantısı
Şimdi `static`adında klasör olusturup sayfa tıklanmalarında apiye ulasmasıyla album ve fotografları get etmemiz için gerekli `app.js` dosyamızı olusturuyoruz:

App.js dosyamız:
```javascript
// Albumlerin acılacagı tıklama eventimiz sayfa acıldıgı anda yani load metoduyla apiden cekilecek
   //// Album listelerinin getirilmesi
window.addEventListener("load", function() {
    var XHR = new XMLHttpRequest();
    var albumListe = document.getElementById('albumListe');

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            for (var i = 1; i < 9; i++) {
                albumListe.innerHTML += `<li class="list-group-item albumid" data-album-id="${i}"> 
                                          <a href="#"><i class="fas fa-chevron-right"></i>  Album ${i}</a>
                                        </li>`;
            }

          //// Album thumbnaillerinin getirilmesi
      var albumItems = document.querySelectorAll('.list-group-item.albumid');
          Array.from(albumItems).forEach(function(elm) {
            var albumId = elm.dataset.albumId;

              elm.addEventListener("click", function() {
                    var XHR = new XMLHttpRequest();

                    XHR.onreadystatechange = function() {
                        var cardDiv = document.querySelector('#cardDiv');

                        if (XHR.readyState == 4 && XHR.status == 200) {

                            var photos = JSON.parse(XHR.responseText);
                            photos = photos.filter(function(item) {
                                return item.albumId === parseInt(albumId);
                            });

                            cardDiv.innerHTML = "";

                            for (var t = 0; t < 8; t++) {
                                cardDiv.innerHTML += `<div class="col-lg-3 col-6 album-thumb" data-full-url="${photos[t].url}">
                                                    <img id="thumbnails" src="${photos[t].thumbnailUrl}">
                                                    <p>${photos[t].title}</p>
                                                  </div>`;
                                }
            //// Full fotogfarının getirilmesi
          var albumThumbs = document.querySelectorAll('.album-thumb');
                 Array.from(albumThumbs).forEach(function(elm) {
                        elm.addEventListener('click', function() {
                            var albumFullUrl = elm.dataset.fullUrl;
                            var imageB = document.getElementsByClassName('closebtn');
                            var expandedImg = document.getElementById('bigImage');
                                if (!expandedImg) {
                                      imageB.style.display = 'none';
                                        return;
                                    }
                                    expandedImg.setAttribute('src', albumFullUrl);
                                    expandedImg.parentElement.style.display = 'block';
                                })
                            });
                        }
                    };
                    XHR.open("GET", `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
                    XHR.send();
                });
            });
        }
    }
    XHR.open("GET", "https://jsonplaceholder.typicode.com/albums");
    XHR.send();
});
```

## Dosyalarımızı sıkıştırma ve tek parça haline getirme
#### Gulp.js ile Js ve Less dosyalarımızı minify etme

Js dosyalarımızı tek dosya haline giterelim ve less dosyalarımızı css dosyasına cevirip minify edecegiz:
Daha sonra watch ile izleyecegiz.

gulpfile.js dosyamız:

```javascript
const { src, dest,series,watch } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const uglify = require('gulp-minify');

function css() {
    return src('static/less/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(dest('dist/css'))
}

function minify() {
    return src('static/js/*.js', { sourcemaps: true })
    // Minify the file
        .pipe(uglify())
        // Output
        .pipe(dest('dist/js', { sourcemaps: true }))
}

function watcher(done) {
    // css changes
    watch('static/**/*.less', css);
    // js changes
    watch('static/**/*.js', minify);
    done();
}


exports.watcher = watcher;
exports.css = css;
exports.minify = minify;

exports.default = series(exports.watcher, exports.css, exports.minify);
```

Dosyaları sıkıstırmak icin ise konsola default olarak da tanımladıgımız `gulp`komutunu calıstıyoruz ve `dist` klasoru icinde minify dosyalar olusturuluyor.

>js ve css dosyalarımızı njk dosyalarımızın icinde tanımlamayı unutmayın.

### Uygulamamız hazır :stuck_out_tongue_winking_eye:
Açmak için:
[![](./readme-img/heroku.svg)](https://photo-album-challenge.herokuapp.com "Uygulamayı Aç")

------------

 Created by [Hasan Aydın](https://hasanaydins.com/)  &copy;
