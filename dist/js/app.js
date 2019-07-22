//// Album listelerinin getirilmesi
window.addEventListener("load", function() {
    var XHR = new XMLHttpRequest();
    var albumListe = document.getElementById("albumListe");

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            for (var i = 1; i < 11; i++) {
                albumListe.innerHTML += `<li class="list-group-item albumid" data-album-id="${i}"> 
                                          <a href="#"><i class="fas fa-chevron-right"></i>  Album ${i}</a>
                                         </li>`;
            }
            //// Album thumbnaillerinin getirilmesi
            var albumItems = document.querySelectorAll(".list-group-item.albumid");
            Array.from(albumItems).forEach(function(elm) {
                var albumId = elm.dataset.albumId;

                elm.addEventListener("click", function() {
                    var XHR = new XMLHttpRequest();

                    XHR.onreadystatechange = function() {
                        var cardDiv = document.querySelector("#cardDiv");

                        if (XHR.readyState == 4 && XHR.status == 200) {
                            var photos = JSON.parse(XHR.responseText);
                            photos = photos.filter(function(item) {
                                return item.albumId === parseInt(albumId);
                            });

                            cardDiv.innerHTML = "";
                            if (window.outerWidth < 960) {
                                for (var t = 0; t < 4; t++) {
                                    cardDiv.innerHTML += `<div class="col-lg-3 col-6 album-thumb" data-full-url="${photos[t].url}">
                                                    <img id="thumbnails" src="${photos[t].thumbnailUrl}">
                                                    <p>${photos[t].title}</p>
                                                  </div>`;
                                }
                            } else if (window.outerWidth >= 960) {
                                for (var t = 0; t < 8; t++) {
                                    cardDiv.innerHTML += `<div class="col-lg-3 col-6 album-thumb" data-full-url="${photos[t].url}">
                                                    <img id="thumbnails" src="${photos[t].thumbnailUrl}">
                                                    <p>${photos[t].title}</p>
                                                 </div>`;
                                }
                            }
                            //// Full fotogfarının getirilmesi
                            var albumThumbs = document.querySelectorAll(".album-thumb");
                            Array.from(albumThumbs).forEach(function(elm) {
                                elm.addEventListener("click", function() {
                                    var albumFullUrl = elm.dataset.fullUrl;
                                    var imageB = document.getElementsByClassName("closebtn");
                                    var expandedImg = document.getElementById("bigImage");
                                    if (!expandedImg) {
                                        imageB.style.display = "none";
                                        return;
                                    }
                                    expandedImg.setAttribute("src", albumFullUrl);
                                    expandedImg.parentElement.style.display = "block";
                                });
                            });
                        }
                    };
                    XHR.open(
                        "GET",
                        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
                    );
                    XHR.send();
                });
            });
        }
    };
    XHR.open("GET", "https://jsonplaceholder.typicode.com/albums");
    XHR.send();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLyBBbGJ1bSBsaXN0ZWxlcmluaW4gZ2V0aXJpbG1lc2lcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIFhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgdmFyIGFsYnVtTGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsYnVtTGlzdGVcIik7XHJcblxyXG4gICAgWEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIFhIUi5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYWxidW1MaXN0ZS5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBhbGJ1bWlkXCIgZGF0YS1hbGJ1bS1pZD1cIiR7aX1cIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4gIEFsYnVtICR7aX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vLy8gQWxidW0gdGh1bWJuYWlsbGVyaW5pbiBnZXRpcmlsbWVzaVxyXG4gICAgICAgICAgICB2YXIgYWxidW1JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1ncm91cC1pdGVtLmFsYnVtaWRcIik7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oYWxidW1JdGVtcykuZm9yRWFjaChmdW5jdGlvbihlbG0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbGJ1bUlkID0gZWxtLmRhdGFzZXQuYWxidW1JZDtcclxuXHJcbiAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgWEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZERpdlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIFhIUi5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGhvdG9zID0gSlNPTi5wYXJzZShYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvcyA9IHBob3Rvcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFsYnVtSWQgPT09IHBhcnNlSW50KGFsYnVtSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgOTYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA0OyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERpdi5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtNiBhbGJ1bS10aHVtYlwiIGRhdGEtZnVsbC11cmw9XCIke3Bob3Rvc1t0XS51cmx9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwidGh1bWJuYWlsc1wiIHNyYz1cIiR7cGhvdG9zW3RdLnRodW1ibmFpbFVybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cGhvdG9zW3RdLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93Lm91dGVyV2lkdGggPj0gOTYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA4OyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERpdi5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtNiBhbGJ1bS10aHVtYlwiIGRhdGEtZnVsbC11cmw9XCIke3Bob3Rvc1t0XS51cmx9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwidGh1bWJuYWlsc1wiIHNyYz1cIiR7cGhvdG9zW3RdLnRodW1ibmFpbFVybH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cGhvdG9zW3RdLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLyBGdWxsIGZvdG9nZmFyxLFuxLFuIGdldGlyaWxtZXNpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxidW1UaHVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFsYnVtLXRodW1iXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShhbGJ1bVRodW1icykuZm9yRWFjaChmdW5jdGlvbihlbG0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxidW1GdWxsVXJsID0gZWxtLmRhdGFzZXQuZnVsbFVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlQiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZWJ0blwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGFuZGVkSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWdJbWFnZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHBhbmRlZEltZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VCLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYWxidW1GdWxsVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRJbWcucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIFhIUi5vcGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcy8ke2FsYnVtSWR9L3Bob3Rvc2BcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIFhIUi5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFhIUi5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtc1wiKTtcclxuICAgIFhIUi5zZW5kKCk7XHJcbn0pOyJdLCJmaWxlIjoiYXBwLmpzIn0=