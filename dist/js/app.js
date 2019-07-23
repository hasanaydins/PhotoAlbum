// -------------- Album listelerinin getirilmesi -------------- //
window.addEventListener("load", function()     { // butun fonksiyonlar senkron calısması icin tek load event ine alındı
var XHR = new XMLHttpRequest();
 var albumListe = document.getElementById("albumListe"); /// Sol taraftaki liste idsi

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
        for (var i = 1; i < 11; i++) { // for ile 10 tane album getirilecek
        albumListe.innerHTML += `<li class="list-group-item albumid" data-album-id="${i}"> 
        <a href="#"><i class="fas fa-chevron-right"></i>  Album ${i}</a>
        </li>`;
    }
        // -------------- Album thumbnaillerinin getirilmesi --------------- //
     var albumItems = document.querySelectorAll(".list-group-item.albumid");   // Yukardaki id si belirtilen albumler secildi

     Array.from(albumItems).forEach(function(elm) {   // for ile her biri icin click event atandı
     var albumId = elm.dataset.albumId;   // Listedeki albumlerin json dataları albumId ye atandı

     elm.addEventListener("click", function() { // her album icin click event atandı
     var XHR = new XMLHttpRequest()
     XHR.onreadystatechange = function() {
     var cardDiv = document.querySelector("#cardDiv"); //thumnaillerin yerlesitirilecegi div secildi
     if (XHR.readyState == 4 && XHR.status == 200) {
     var photos = JSON.parse(XHR.responseText);
     photos = photos.filter(function(item) { // kedi albumId sine esit olan urlleri getirmek icin filter uygulandı
     return item.albumId === parseInt(albumId);
    });

    cardDiv.innerHTML = "";

    if (window.outerWidth < 960) { // 960tan kucuk pixeller icin 4 thumnail getirildi
        for (var t = 0; t < 4; t++) {
            cardDiv.innerHTML += `<div class="col-lg-3 col-6 album-thumb" data-full-url="${photos[t].url}">
                            <img id="thumbnails" src="${photos[t].thumbnailUrl}">
                            <p>${photos[t].title}</p>
                          </div>`;
        }
    } else if (window.outerWidth >= 960) {  // 960tan buyuk pixeller icin 8 thumnail getirildi
        for (var t = 0; t < 8; t++) {
            cardDiv.innerHTML += `<div class="col-lg-3 col-6 album-thumb" data-full-url="${photos[t].url}">
                            <img id="thumbnails" src="${photos[t].thumbnailUrl}">
                            <p>${photos[t].title}</p>
                         </div>`;
        }
    }
       // --------------  Tam boyut fotoların getirilmesi --------------- //
     var albumThumbs = document.querySelectorAll(".album-thumb"); // yukardaki her bir fotograf secildi
     Array.from(albumThumbs).forEach(function(elm) { // her bir thumnail for a alındı

       elm.addEventListener("click", function() {
        var albumFullUrl = elm.dataset.fullUrl; // thumnaillerin sahip oldugu fullurl dataları alındı
        var imageB = document.getElementsByClassName("closebtn"); // foto kapatma butonu secildi
        var expandedImg = document.getElementById("bigImage"); // buyuk fotonun getirielcegi id yeri secildi
        if (!expandedImg) { // eger buyuk fotograf yoksa kapatma butonunu gosterme
            imageB.style.display = "none";
            return;
        }
        expandedImg.setAttribute("src", albumFullUrl); //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0gQWxidW0gbGlzdGVsZXJpbmluIGdldGlyaWxtZXNpIC0tLS0tLS0tLS0tLS0tIC8vXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSAgICAgeyAvLyBidXR1biBmb25rc2l5b25sYXIgc2Vua3JvbiBjYWzEsXNtYXPEsSBpY2luIHRlayBsb2FkIGV2ZW50IGluZSBhbMSxbmTEsVxudmFyIFhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIHZhciBhbGJ1bUxpc3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGJ1bUxpc3RlXCIpOyAvLy8gU29sIHRhcmFmdGFraSBsaXN0ZSBpZHNpXG5cbiAgWEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIFhIUi5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTE7IGkrKykgeyAvLyBmb3IgaWxlIDEwIHRhbmUgYWxidW0gZ2V0aXJpbGVjZWtcbiAgICAgICAgYWxidW1MaXN0ZS5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBhbGJ1bWlkXCIgZGF0YS1hbGJ1bS1pZD1cIiR7aX1cIj4gXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4gIEFsYnVtICR7aX08L2E+XG4gICAgICAgIDwvbGk+YDtcbiAgICB9XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tIEFsYnVtIHRodW1ibmFpbGxlcmluaW4gZ2V0aXJpbG1lc2kgLS0tLS0tLS0tLS0tLS0tIC8vXG4gICAgIHZhciBhbGJ1bUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWdyb3VwLWl0ZW0uYWxidW1pZFwiKTsgICAvLyBZdWthcmRha2kgaWQgc2kgYmVsaXJ0aWxlbiBhbGJ1bWxlciBzZWNpbGRpXG5cbiAgICAgQXJyYXkuZnJvbShhbGJ1bUl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGVsbSkgeyAgIC8vIGZvciBpbGUgaGVyIGJpcmkgaWNpbiBjbGljayBldmVudCBhdGFuZMSxXG4gICAgIHZhciBhbGJ1bUlkID0gZWxtLmRhdGFzZXQuYWxidW1JZDsgICAvLyBMaXN0ZWRla2kgYWxidW1sZXJpbiBqc29uIGRhdGFsYXLEsSBhbGJ1bUlkIHllIGF0YW5kxLFcblxuICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyAvLyBoZXIgYWxidW0gaWNpbiBjbGljayBldmVudCBhdGFuZMSxXG4gICAgIHZhciBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICBYSFIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgIHZhciBjYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkRGl2XCIpOyAvL3RodW1uYWlsbGVyaW4geWVybGVzaXRpcmlsZWNlZ2kgZGl2IHNlY2lsZGlcbiAgICAgaWYgKFhIUi5yZWFkeVN0YXRlID09IDQgJiYgWEhSLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgdmFyIHBob3RvcyA9IEpTT04ucGFyc2UoWEhSLnJlc3BvbnNlVGV4dCk7XG4gICAgIHBob3RvcyA9IHBob3Rvcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkgeyAvLyBrZWRpIGFsYnVtSWQgc2luZSBlc2l0IG9sYW4gdXJsbGVyaSBnZXRpcm1layBpY2luIGZpbHRlciB1eWd1bGFuZMSxXG4gICAgIHJldHVybiBpdGVtLmFsYnVtSWQgPT09IHBhcnNlSW50KGFsYnVtSWQpO1xuICAgIH0pO1xuXG4gICAgY2FyZERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgOTYwKSB7IC8vIDk2MHRhbiBrdWN1ayBwaXhlbGxlciBpY2luIDQgdGh1bW5haWwgZ2V0aXJpbGRpXG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgNDsgdCsrKSB7XG4gICAgICAgICAgICBjYXJkRGl2LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC02IGFsYnVtLXRodW1iXCIgZGF0YS1mdWxsLXVybD1cIiR7cGhvdG9zW3RdLnVybH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwidGh1bWJuYWlsc1wiIHNyYz1cIiR7cGhvdG9zW3RdLnRodW1ibmFpbFVybH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Bob3Rvc1t0XS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5vdXRlcldpZHRoID49IDk2MCkgeyAgLy8gOTYwdGFuIGJ1eXVrIHBpeGVsbGVyIGljaW4gOCB0aHVtbmFpbCBnZXRpcmlsZGlcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA4OyB0KyspIHtcbiAgICAgICAgICAgIGNhcmREaXYuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLTYgYWxidW0tdGh1bWJcIiBkYXRhLWZ1bGwtdXJsPVwiJHtwaG90b3NbdF0udXJsfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJ0aHVtYm5haWxzXCIgc3JjPVwiJHtwaG90b3NbdF0udGh1bWJuYWlsVXJsfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cGhvdG9zW3RdLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tICBUYW0gYm95dXQgZm90b2xhcsSxbiBnZXRpcmlsbWVzaSAtLS0tLS0tLS0tLS0tLS0gLy9cbiAgICAgdmFyIGFsYnVtVGh1bWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGJ1bS10aHVtYlwiKTsgLy8geXVrYXJkYWtpIGhlciBiaXIgZm90b2dyYWYgc2VjaWxkaVxuICAgICBBcnJheS5mcm9tKGFsYnVtVGh1bWJzKS5mb3JFYWNoKGZ1bmN0aW9uKGVsbSkgeyAvLyBoZXIgYmlyIHRodW1uYWlsIGZvciBhIGFsxLFuZMSxXG5cbiAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWxidW1GdWxsVXJsID0gZWxtLmRhdGFzZXQuZnVsbFVybDsgLy8gdGh1bW5haWxsZXJpbiBzYWhpcCBvbGR1Z3UgZnVsbHVybCBkYXRhbGFyxLEgYWzEsW5kxLFcbiAgICAgICAgdmFyIGltYWdlQiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZWJ0blwiKTsgLy8gZm90byBrYXBhdG1hIGJ1dG9udSBzZWNpbGRpXG4gICAgICAgIHZhciBleHBhbmRlZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlnSW1hZ2VcIik7IC8vIGJ1eXVrIGZvdG9udW4gZ2V0aXJpZWxjZWdpIGlkIHllcmkgc2VjaWxkaVxuICAgICAgICBpZiAoIWV4cGFuZGVkSW1nKSB7IC8vIGVnZXIgYnV5dWsgZm90b2dyYWYgeW9rc2Ega2FwYXRtYSBidXRvbnVudSBnb3N0ZXJtZVxuICAgICAgICAgICAgaW1hZ2VCLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBleHBhbmRlZEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYWxidW1GdWxsVXJsKTsgLy9cbiAgICAgICAgZXhwYW5kZWRJbWcucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAgIFhIUi5vcGVuKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcy8ke2FsYnVtSWR9L3Bob3Rvc2BcbiAgICAgICAgKTtcbiAgICAgICAgWEhSLnNlbmQoKTtcbiAgICB9KTtcbiAgIH0pO1xuICB9XG4gfTtcbiAgICBYSFIub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXNcIik7XG4gICAgWEhSLnNlbmQoKTtcbn0pOyJdLCJmaWxlIjoiYXBwLmpzIn0=