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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLyBBbGJ1bSBsaXN0ZWxlcmluaW4gZ2V0aXJpbG1lc2lcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGFsYnVtTGlzdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsYnVtTGlzdGVcIik7XG5cbiAgICBYSFIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIFhIUi5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhbGJ1bUxpc3RlLmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGFsYnVtaWRcIiBkYXRhLWFsYnVtLWlkPVwiJHtpfVwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4gIEFsYnVtICR7aX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vLy8gQWxidW0gdGh1bWJuYWlsbGVyaW5pbiBnZXRpcmlsbWVzaVxuICAgICAgICAgICAgdmFyIGFsYnVtSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtZ3JvdXAtaXRlbS5hbGJ1bWlkXCIpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShhbGJ1bUl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGVsbSkge1xuICAgICAgICAgICAgICAgIHZhciBhbGJ1bUlkID0gZWxtLmRhdGFzZXQuYWxidW1JZDtcblxuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgICAgICAgICAgICBYSFIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZERpdlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFhIUi5yZWFkeVN0YXRlID09IDQgJiYgWEhSLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGhvdG9zID0gSlNPTi5wYXJzZShYSFIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b3MgPSBwaG90b3MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWxidW1JZCA9PT0gcGFyc2VJbnQoYWxidW1JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgOTYwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgNDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGl2LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC02IGFsYnVtLXRodW1iXCIgZGF0YS1mdWxsLXVybD1cIiR7cGhvdG9zW3RdLnVybH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwidGh1bWJuYWlsc1wiIHNyYz1cIiR7cGhvdG9zW3RdLnRodW1ibmFpbFVybH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Bob3Rvc1t0XS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5vdXRlcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDg7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERpdi5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtNiBhbGJ1bS10aHVtYlwiIGRhdGEtZnVsbC11cmw9XCIke3Bob3Rvc1t0XS51cmx9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInRodW1ibmFpbHNcIiBzcmM9XCIke3Bob3Rvc1t0XS50aHVtYm5haWxVcmx9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwaG90b3NbdF0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLyBGdWxsIGZvdG9nZmFyxLFuxLFuIGdldGlyaWxtZXNpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsYnVtVGh1bWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGJ1bS10aHVtYlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGFsYnVtVGh1bWJzKS5mb3JFYWNoKGZ1bmN0aW9uKGVsbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsYnVtRnVsbFVybCA9IGVsbS5kYXRhc2V0LmZ1bGxVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VCID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlYnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGFuZGVkSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWdJbWFnZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXhwYW5kZWRJbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBhbGJ1bUZ1bGxVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRJbWcucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgWEhSLm9wZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXMvJHthbGJ1bUlkfS9waG90b3NgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIFhIUi5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgWEhSLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zXCIpO1xuICAgIFhIUi5zZW5kKCk7XG59KTsiXSwiZmlsZSI6ImFwcC5qcyJ9