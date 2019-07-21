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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiICAgLy8vLyBBbGJ1bSBsaXN0ZWxlcmluaW4gZ2V0aXJpbG1lc2lcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIFhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgdmFyIGFsYnVtTGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxidW1MaXN0ZScpO1xyXG5cclxuICAgIFhIUi5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoWEhSLnJlYWR5U3RhdGUgPT0gNCAmJiBYSFIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYWxidW1MaXN0ZS5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBhbGJ1bWlkXCIgZGF0YS1hbGJ1bS1pZD1cIiR7aX1cIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4gIEFsYnVtICR7aX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLy8vIEFsYnVtIHRodW1ibmFpbGxlcmluaW4gZ2V0aXJpbG1lc2lcclxuICAgICAgdmFyIGFsYnVtSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1ncm91cC1pdGVtLmFsYnVtaWQnKTtcclxuICAgICAgICAgIEFycmF5LmZyb20oYWxidW1JdGVtcykuZm9yRWFjaChmdW5jdGlvbihlbG0pIHtcclxuICAgICAgICAgICAgdmFyIGFsYnVtSWQgPSBlbG0uZGF0YXNldC5hbGJ1bUlkO1xyXG5cclxuICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgWEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkRGl2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoWEhSLnJlYWR5U3RhdGUgPT0gNCAmJiBYSFIuc3RhdHVzID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaG90b3MgPSBKU09OLnBhcnNlKFhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9zID0gcGhvdG9zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxidW1JZCA9PT0gcGFyc2VJbnQoYWxidW1JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA4OyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGl2LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC02IGFsYnVtLXRodW1iXCIgZGF0YS1mdWxsLXVybD1cIiR7cGhvdG9zW3RdLnVybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJ0aHVtYm5haWxzXCIgc3JjPVwiJHtwaG90b3NbdF0udGh1bWJuYWlsVXJsfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwaG90b3NbdF0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLy8vIEZ1bGwgZm90b2dmYXLEsW7EsW4gZ2V0aXJpbG1lc2lcclxuICAgICAgICAgIHZhciBhbGJ1bVRodW1icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGJ1bS10aHVtYicpO1xyXG4gICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYWxidW1UaHVtYnMpLmZvckVhY2goZnVuY3Rpb24oZWxtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsYnVtRnVsbFVybCA9IGVsbS5kYXRhc2V0LmZ1bGxVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VCID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2VidG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHBhbmRlZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWdJbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXhwYW5kZWRJbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFsYnVtRnVsbFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkSW1nLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBYSFIub3BlbihcIkdFVFwiLCBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcy8ke2FsYnVtSWR9L3Bob3Rvc2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIFhIUi5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgWEhSLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zXCIpO1xyXG4gICAgWEhSLnNlbmQoKTtcclxufSk7Il0sImZpbGUiOiJhcHAuanMifQ==