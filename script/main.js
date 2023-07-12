// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Scroll pozisyonu 20px'den büyükse veya belgenin tepesinden 20px aşağıdaysa, düğmeyi görünür yap
    mybutton.style.display = "block";
  } else {
    // Aksi takdirde, düğmeyi gizle
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // Düğmeye tıklandığında, belgenin en üstüne kaydır
  document.body.scrollTop = 0; // Safari için
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ve Opera için
}

// Navbar öğelerine tıklandığında collapse durumunu değiştirme ve sayfayı ilgili bölüme kaydırma
document.querySelectorAll('.navbar-nav .nav-link').forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault(); // Sayfanın kaymasını engelleme

    var navbar = document.querySelector('.navbar-collapse');
    var isCollapsed = navbar.classList.contains('show');
    if (isCollapsed) {
      // Eğer menü öğeleri görüntülüyorsa, menüyü gizle
      navbar.classList.remove('show');
    }

    var target = document.querySelector(element.getAttribute('href'));
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var targetPosition = target.offsetTop - navbarHeight;

    // İlgili bölüme yumuşak bir kaydırma efektiyle kaydır
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    // Menü tuşuna tıklandığında menü simgesini "fa-bars" olarak güncelle
    menuIcon.className = 'fa-solid fa-bars';
  });
});

// Menü düğmesine tıklandığında
const menuButton = document.getElementById('menuButton');
const menuIcon = document.getElementById('menuIcon');
const navbarCollapse = document.getElementById('navbarNav');

menuButton.addEventListener('click', function() {
  // Menü düğmesine tıklandığında, menüyü aç veya kapat
  navbarCollapse.classList.toggle('active');
  const isExpanded = navbarCollapse.classList.contains('active');
  menuButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  menuIcon.className = isExpanded ? 'fa-solid fa-times' : 'fa-solid fa-bars';
});