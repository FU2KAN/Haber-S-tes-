


//Hamburger Menü ve Dropdown Menü functionu

var menu = document.getElementById("menu");
var menu_open = document.getElementById("menu_open");

menu.onclick = function () {
  menu.classList.toggle("openmenu");
  menu_open.classList.toggle("menu_open");

 
};



//Yorum bölümü functionu

const commentForm = document.getElementById('comment-form');
const commentText = document.getElementById('comment-text');
const commentsContainer = document.getElementById('comments-container');

commentForm.addEventListener('submit', (event) => {

  event.preventDefault(); // Formu göndermeyi önler

  const comment = commentText.value;

  // Yorum elemanını oluşturur
  const commentElement = document.createElement('div');

  commentElement.textContent = comment;

  // Yorumu konteynere ekler
  commentsContainer.appendChild(commentElement);

  // Yorum girişini temizler
  commentText.value = '';
});



//Like Dislike buton funcitonu

function like() {
  var likeCount = document.querySelector(".like-count");

  likeCount.textContent++;
}

function dislike() {

  var dislikeCount = document.querySelector(".dislike-count");

  dislikeCount.textContent++;
}

document.querySelector(".like-button").onclick = like;

document.querySelector(".dislike-button").onclick = dislike;





//Sayfa açıldığında Animasyon ile yükle

document.addEventListener('DOMContentLoaded', function () {

var haberBolumleri = document.querySelectorAll('.metin1, #Sondakika, #Teknoleji, #Yapayzeka, #Ekonomi, #Gündem');

  haberBolumleri.forEach(function (bolum) {

  bolum.classList.add('animate');
  });
});





// Slayt pencere fonksiyonu

      // let slideIndex = 1;
      // showSlides(slideIndex);

      // function plusSlides(n) {
      //   showSlides((slideIndex += n));
      // }

      // function currentSlide(n) {
      //   showSlides((slideIndex = n));
      // }

      // function showSlides(n) {
      //   let i;
      //   let slides = document.getElementsByClassName("mySlides");
      //   let dots = document.getElementsByClassName("dot");
      //   if (n > slides.length) {
      //     slideIndex = 1;
      //   }
      //   if (n < 1) {
      //     slideIndex = slides.length;
      //   }
      //   for (i = 0; i < slides.length; i++) {
      //     slides[i].style.display = "none";
      //   }
      //   for (i = 0; i < dots.length; i++) {
      //     dots[i].className = dots[i].className.replace(" active", "");
      //   }
      //   slides[slideIndex - 1].style.display = "block";
      //   dots[slideIndex - 1].className += " active";
      // }

      // // Otomatik geçiş için sayfa yüklendiğinde başlat ve döngü yap
      // document.addEventListener("DOMContentLoaded", () => {
      //   setInterval(() => {
      //     plusSlides(1);
      //   }, 4000);
      // });