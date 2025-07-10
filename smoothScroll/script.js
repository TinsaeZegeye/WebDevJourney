// Using jQuery

/* $("nav ul li a").click(function () {
  const thisSection = $(this).attr("href");
  const thisLink = $(this);

  $("html").stop().animate(
      { scrollTop: $(thisSection).offset().top - 80 },
      800,
      "easeOutCirc"
    );
  return false;
});

$(window).on("load", function () {
  var posts = $("section");
  var allLinks = $("nav ul li a");
  var pageTop;
  var postPos;
  var postTop = [];
  var preCounter = 0;
  var counter = 0;
  var doneResizing;
  resetPagePosition();

  $(window).scroll(function () {
    pageTop = $(window).scrollTop() + 150;
    if (pageTop > postTop[counter + 1]) {
      counter++;
    } else if (counter > 0 && pageTop < postTop[counter]) {
      counter--;
    }

    if (counter != preCounter) {
      $(allLinks).removeAttr("class");
      $("nav ul li a").eq(counter).addClass("selected");
      preCounter = counter;
    }
  });

  $(window).on("resize", function () {
    clearTimeout(doneResizing);
    doneResizing = setTimeout(function () {
      resetPagePosition();
    }, 500);
  });

  function resetPagePosition() {
    postTop = [];
    posts.each(function () {
      postTop.push(Math.floor($(this).offset().top));
    });

    var pagePosition = $(window).scrollTop() + 150;
    counter = 0;

    for (var i = 0; i < postTop.length; i++) {
      if (pagePosition > postTop[i]) {
        counter++;
      }
    }
    counter--;
    $(allLinks).removeAttr("class");
    $("nav ul li a").eq(counter).addClass("selected");
  }
});
 */

// Using JS

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function (eachLink) {

  eachLink.addEventListener('click', smoothScroll);
});
 
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  const originalTop = Math.floor(targetSection.getBoundingClientRect().top - 150);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
}

window.addEventListener('load', function () { 
  const posts = this.document.querySelectorAll('section');
  let postTops = [];
  let pageTop;
  let counter = 1;
  let prevCounter = 1;
  let doneResizing;

  resetPagePosition();

  this.window.addEventListener('scroll', function () { 
    pageTop = this.window.pageYOffset + 170;

    if (pageTop > postTops[counter]) {
      counter++;
    } else if (counter > 1 && pageTop < postTops[counter - 1]) {
      counter--;
    }

    if (counter != prevCounter) {
      navLinks.forEach(function (eachLink) {
        eachLink.removeAttribute('class');
      });

      const thisLink = this.document.querySelector(`nav ul li:nth-child(${counter}) a`);
      thisLink.className = 'selected';

      prevCounter = counter;
    }
  });


  this.window.addEventListener('resize', function () { 
    this.clearTimeout(doneResizing);

    doneResizing = this.setTimeout(function () { 
      resetPagePosition();
    }, 500);
  });

  function resetPagePosition() {
    postTops = [];

    posts.forEach(function (eachPost) {
      postTops.push(Math.floor(eachPost.getBoundingClientRect().top + window.pageYOffset));
    });

    const pagePosition = window.pageYOffset + 170;
    counter = 0;

    postTops.forEach(function (post) {
      if (pagePosition > post) {
        counter++;
      }
    });

    navLinks.forEach(function (eachLink) {
        eachLink.removeAttribute('class');
    });

    const thisLink = this.document.querySelector(`nav ul li:nth-child(${counter}) a`);
    thisLink.className = 'selected';
  }
});