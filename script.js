window.addEventListener("resize", function () {
  // Tarayıcı genişliğini al
  let screenWidth = window.innerWidth;
  // Eğer tarayıcı genişliği 991 pikselin altındaysa
  if (screenWidth <= 991) {
    // Border-right sınıfını içeren elementleri seç ve sınıfı kaldır
    var elementsWithBorderRight = document.querySelectorAll(".border-end");
    elementsWithBorderRight.forEach(function (element) {
      element.classList.remove("border-end");
    });
  } else {
    // Tarayıcı genişliği 991 pikselin üstündeyse, border-right sınıfını eklemeyi kontrol etmek için herhangi bir gerek yok.
    // Bu durumda, bu sınıfı zaten eklemeye devam edecektir.
  }
});
