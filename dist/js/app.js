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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiICAgLy8vLyBBbGJ1bSBsaXN0ZWxlcmluaW4gZ2V0aXJpbG1lc2lcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGFsYnVtTGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxidW1MaXN0ZScpO1xuXG4gICAgWEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoWEhSLnJlYWR5U3RhdGUgPT0gNCAmJiBYSFIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgICAgICBhbGJ1bUxpc3RlLmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGFsYnVtaWRcIiBkYXRhLWFsYnVtLWlkPVwiJHtpfVwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4gIEFsYnVtICR7aX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vLyBBbGJ1bSB0aHVtYm5haWxsZXJpbmluIGdldGlyaWxtZXNpXG4gICAgICB2YXIgYWxidW1JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWdyb3VwLWl0ZW0uYWxidW1pZCcpO1xuICAgICAgICAgIEFycmF5LmZyb20oYWxidW1JdGVtcykuZm9yRWFjaChmdW5jdGlvbihlbG0pIHtcbiAgICAgICAgICAgIHZhciBhbGJ1bUlkID0gZWxtLmRhdGFzZXQuYWxidW1JZDtcblxuICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgWEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZERpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoWEhSLnJlYWR5U3RhdGUgPT0gNCAmJiBYSFIuc3RhdHVzID09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBob3RvcyA9IEpTT04ucGFyc2UoWEhSLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9zID0gcGhvdG9zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFsYnVtSWQgPT09IHBhcnNlSW50KGFsYnVtSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA4OyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERpdi5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtNiBhbGJ1bS10aHVtYlwiIGRhdGEtZnVsbC11cmw9XCIke3Bob3Rvc1t0XS51cmx9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInRodW1ibmFpbHNcIiBzcmM9XCIke3Bob3Rvc1t0XS50aHVtYm5haWxVcmx9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwaG90b3NbdF0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLy8vIEZ1bGwgZm90b2dmYXLEsW7EsW4gZ2V0aXJpbG1lc2lcbiAgICAgICAgICB2YXIgYWxidW1UaHVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxidW0tdGh1bWInKTtcbiAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShhbGJ1bVRodW1icykuZm9yRWFjaChmdW5jdGlvbihlbG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbGJ1bUZ1bGxVcmwgPSBlbG0uZGF0YXNldC5mdWxsVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZUIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHBhbmRlZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWdJbWFnZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cGFuZGVkSW1nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWxidW1GdWxsVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkSW1nLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIFhIUi5vcGVuKFwiR0VUXCIsIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zLyR7YWxidW1JZH0vcGhvdG9zYCk7XG4gICAgICAgICAgICAgICAgICAgIFhIUi5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBYSFIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXNcIik7XG4gICAgWEhSLnNlbmQoKTtcbn0pOyJdLCJmaWxlIjoiYXBwLmpzIn0=