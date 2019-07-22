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
                            } else if (window.outerWidth > 960) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiICAgLy8vLyBBbGJ1bSBsaXN0ZWxlcmluaW4gZ2V0aXJpbG1lc2lcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGFsYnVtTGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxidW1MaXN0ZScpO1xuXG4gICAgWEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoWEhSLnJlYWR5U3RhdGUgPT0gNCAmJiBYSFIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgICAgICBhbGJ1bUxpc3RlLmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGFsYnVtaWRcIiBkYXRhLWFsYnVtLWlkPVwiJHtpfVwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4gIEFsYnVtICR7aX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vLyBBbGJ1bSB0aHVtYm5haWxsZXJpbmluIGdldGlyaWxtZXNpXG4gICAgICB2YXIgYWxidW1JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWdyb3VwLWl0ZW0uYWxidW1pZCcpO1xuICAgICAgICAgIEFycmF5LmZyb20oYWxidW1JdGVtcykuZm9yRWFjaChmdW5jdGlvbihlbG0pIHtcbiAgICAgICAgICAgIHZhciBhbGJ1bUlkID0gZWxtLmRhdGFzZXQuYWxidW1JZDtcblxuICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgWEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZERpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoWEhSLnJlYWR5U3RhdGUgPT0gNCAmJiBYSFIuc3RhdHVzID09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBob3RvcyA9IEpTT04ucGFyc2UoWEhSLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9zID0gcGhvdG9zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFsYnVtSWQgPT09IHBhcnNlSW50KGFsYnVtSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDk2MCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA0OyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREaXYuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLTYgYWxidW0tdGh1bWJcIiBkYXRhLWZ1bGwtdXJsPVwiJHtwaG90b3NbdF0udXJsfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJ0aHVtYm5haWxzXCIgc3JjPVwiJHtwaG90b3NbdF0udGh1bWJuYWlsVXJsfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cGhvdG9zW3RdLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93Lm91dGVyV2lkdGggPCA5NjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA4OyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREaXYuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLTYgYWxidW0tdGh1bWJcIiBkYXRhLWZ1bGwtdXJsPVwiJHtwaG90b3NbdF0udXJsfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJ0aHVtYm5haWxzXCIgc3JjPVwiJHtwaG90b3NbdF0udGh1bWJuYWlsVXJsfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cGhvdG9zW3RdLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8vLyBGdWxsIGZvdG9nZmFyxLFuxLFuIGdldGlyaWxtZXNpXG4gICAgICAgICAgdmFyIGFsYnVtVGh1bWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsYnVtLXRodW1iJyk7XG4gICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYWxidW1UaHVtYnMpLmZvckVhY2goZnVuY3Rpb24oZWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxidW1GdWxsVXJsID0gZWxtLmRhdGFzZXQuZnVsbFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VCID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2VidG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwYW5kZWRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlnSW1hZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHBhbmRlZEltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFsYnVtRnVsbFVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEltZy5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBYSFIub3BlbihcIkdFVFwiLCBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcy8ke2FsYnVtSWR9L3Bob3Rvc2ApO1xuICAgICAgICAgICAgICAgICAgICBYSFIuc2VuZCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgWEhSLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zXCIpO1xuICAgIFhIUi5zZW5kKCk7XG59KTsiXSwiZmlsZSI6ImFwcC5qcyJ9