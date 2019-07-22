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
                            if (window.outerWidth < 960 ) {
                                for (var t = 0; t < 4; t++) {
                                    cardDiv.innerHTML += `<div class="col-lg-3 col-6 album-thumb" data-full-url="${photos[t].url}">
                                                    <img id="thumbnails" src="${photos[t].thumbnailUrl}">
                                                    <p>${photos[t].title}</p>
                                                  </div>`;
                                }
                            } else if (window.outerWidth < 960) {
                                for (var t = 0; t < 8; t++) {
                                    cardDiv.innerHTML += `<div class="col-lg-3 col-6 album-thumb" data-full-url="${photos[t].url}">
                                                    <img id="thumbnails" src="${photos[t].thumbnailUrl}">
                                                    <p>${photos[t].title}</p>
                                                 </div>`;
                                }
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