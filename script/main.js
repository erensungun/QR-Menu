// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Navbar öğelerine tıklandığında collapse durumunu değiştirme ve sayfayı ilgili bölüme kaydırma
document.querySelectorAll('.navbar-nav .nav-link').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault(); // Sayfanın kaymasını engelleme

        var navbar = document.querySelector('.navbar-collapse');
        var isCollapsed = navbar.classList.contains('show');
        if (isCollapsed) {
            bootstrap.Collapse.getInstance(navbar).hide();
        }

        var target = document.querySelector(element.getAttribute('href'));
        var navbarHeight = document.querySelector('.navbar').offsetHeight;
        var targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Yumuşak kaydırma efekti için
        });
    });
});