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