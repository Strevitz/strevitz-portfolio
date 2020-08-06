/***********************[ Navbar bubble animation ]***********************/

const sections = document.querySelectorAll("section");
const a = document.querySelectorAll("a");
const bubble = document.querySelector(".bubble");
const gradients = ["white", "#18c9e0", "white"];
const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

/***********************[ Headlines effects ]***********************/

$("#headline1 #headline4").slideUp(300).delay(1000).fadeIn(600);

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
      $("#headline2").fadeIn(600);
    } else {
      $("#headline2").fadeOut(600);
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 1000) {
      $("#headline3").fadeIn(600);
    } else {
      $("#headline3").fadeOut(600);
    }
  });

  /***********************[ Profile picture animation ]***********************/

  $("#avatar").effect("slide", { direction: "up" }, 1000);

  /***********************[ Change color of list items ]***********************/

  /*$(window).scroll(function () {
    if ($(document).scrollTop() > 950) {
      $(".list-item").css("color", "#dabb0f", { duration: 200 });
    } else {
      $(".list-item").css("color", "black");
    }
  });

  */

  /***********************[ Cursor sign ]***********************/
  /*
  let mouseCursor = document.querySelector('.cursor');
  window.addEventListener('mousemove', cursor);
  function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
  }

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

  */
});

/***********************[ Menu animation ]***********************/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

$(links).click(function () {
  $(navLinks).removeClass("open");
});

/***********************[ Typing text hero ]***********************/

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

/***********************[ Cookies compliance message ]***********************/

(function () {
  //Change these values
  var msg =
    "We use cookies to enhance your web browsing experience. By continuing to browse the site you agree to our policy on cookie usage.";
  var closeBtnMsg = "OK";
  var privacyBtnMsg = "Privacy Policy";
  var privacyLink = "https://strzewiczek.pl";

  //check cookies
  if (document.cookie) {
    var cookieString = document.cookie;
    var cookieList = cookieString.split(";");
    // if cookie named OKCookie is found, return
    for (x = 0; x < cookieList.length; x++) {
      if (cookieList[x].indexOf("OKCookie") != -1) {
        return;
      }
    }
  }

  var docRoot = document.body;
  var okC = document.createElement("div");
  okC.setAttribute("id", "okCookie");
  var okCp = document.createElement("p");
  var okcText = document.createTextNode(msg);

  //close button
  var okCclose = document.createElement("a");
  var okcCloseText = document.createTextNode(closeBtnMsg);
  okCclose.setAttribute("href", "#");
  okCclose.setAttribute("id", "okClose");
  okCclose.appendChild(okcCloseText);
  okCclose.addEventListener("click", closeCookie, false);

  //privacy button
  var okCprivacy = document.createElement("a");
  var okcPrivacyText = document.createTextNode(privacyBtnMsg);
  okCprivacy.setAttribute("href", privacyLink);
  okCprivacy.setAttribute("id", "okCprivacy");
  okCprivacy.appendChild(okcPrivacyText);

  //add to DOM
  okCp.appendChild(okcText);
  okC.appendChild(okCp);
  okC.appendChild(okCclose);
  okC.appendChild(okCprivacy);
  docRoot.appendChild(okC);

  okC.classList.add("okcBeginAnimate");

  function closeCookie() {
    var cookieExpire = new Date();
    cookieExpire.setFullYear(cookieExpire.getFullYear() + 2);
    document.cookie = "OKCookie=1; expires=" + cookieExpire.toGMTString() + ";";
    docRoot.removeChild(okC);
  }
})();

/***********************[ animated scroll ]***********************/

jQuery(function ($) {
  //reset scroll
  $.scrollTo(0);

  $("#link1").click(function () {
    $.scrollTo($("#headline1"), 500);
  });
  $("#link2").click(function () {
    $.scrollTo($("#github-corner"), 500);
  });
  $("#link3").click(function () {
    $.scrollTo($("#contact-box"), 500);
  });

  $(document).scroll(function () {
    windowScroll();
  });

  function windowScroll() {
    var st = $(document).scrollTop();

    $("#carousel").css({ top: -160 - st * 0.25 + "px" });
    //$("#carousel").css({ left: 400 - st * 0.3 + "px" });
  }
});

// recaptcha

window.onloadCallback = onloadCallback;

var onloadCallback = function () {
  grecaptcha.render("captcha", {
    sitekey: "6Lc9ArAZAAAAAEaBFpSIh2vng-r3SdHccKA4aigp",
    theme: "dark",
  });
};
