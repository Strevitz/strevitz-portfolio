const sections = document.querySelectorAll('section');
const a = document.querySelectorAll('a');
const bubble = document.querySelector('.bubble');
const gradients = ['#ffdf2c', 'white', 'black'];
const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry =>{
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
})



$(document).ready(function() {

  $(window).scroll(function() {
      if ($(document).scrollTop() > 500) {
          $('#headline2').fadeIn(600);
        } else {
          $('#headline2').fadeOut(600);
        }
  });

  $(window).scroll(function() {
      if ($(document).scrollTop() > 800) {
          $('#headline3').fadeIn(600);
        } else {
          $('#headline3').fadeOut(600);
        }
  });


  $( "#headline1" ).slideUp(300).delay(1000).fadeIn(600);

  $('#avatar').effect("slide", {direction: "up"}, 1000);



  $(window).scroll(function() {
      if ($(document).scrollTop() > 950) {
        $('.list-item').css('color', '#dabb0f', {duration:200});
      } else {
        $('.list-item').css('color', 'black');
      }
  });

  /*$(window).scroll(function() {
      if ($(document).scrollTop() > 400) {
        $('.circle1b, #github').effect("slide", {direction: "up"}, 800);
      } else {
          $('.circle1b, #github').hide();
      }
  });
  */
  const github = document.querySelectorAll('.circle1');
  const tl = new TimelineMax();
  tl.fromTo(github, 0.8, {y: '-230%'}, {y: '0%'});


  /*
  let mouseCursor = document.querySelector('.cursor');
  window.addEventListener('mousemove', cursor);
  function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
  }
*/

  $("#carousel").waterwheelCarousel();

  $("#titleTooltip1, #titleTooltip2, #titleTooltip3, #titleTooltip4, #titleTooltip5").qtip({
    content: 'See the project',
         position: {
             my: 'top center',  // Position my top left...
             at: 'bottom right', // at the bottom right of...
             target: 'mouse', // Track the mouse as the positioning target
             adjust: { x: 1, y: 18 } // Offset it slightly from under the mouse
         },
         style: {
          classes: 'qtip-bootstrap'
      },

      show: {
        effect: function(offset) {
            $(this).slideDown(200); // "this" refers to the tooltip
        }
    }

  });


});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click", () =>{
  navLinks.classList.toggle("open");
  links.forEach(link =>{
    link.classList.toggle("fade");
  });
});

