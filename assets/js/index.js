(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    //On hover dropdown
    // function toggleDropdown (e) {
    //   const _d = $(e.target).closest('.dropdown'),
    //       _m = $('.dropdown-menu', _d);
    //   setTimeout(function(){
    //     const shouldOpen = e.type !== 'click' && _d.is(':hover');
    //     _m.toggleClass('show', shouldOpen);
    //     _d.toggleClass('show', shouldOpen);
    //     $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    //   }, e.type === 'mouseleave' ? 50 : 0);
    // }
    
    // $('body')
    //   .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    //   .on('click', '.dropdown-menu a', toggleDropdown);
    
    // Parallax function
    // https://codepen.io/roborich/pen/wpAsm
    var background_image_parallax = function($object, multiplier) {
      multiplier = typeof multiplier !== "undefined" ? multiplier : 0.5;
      multiplier = 1 - multiplier;
      var $doc = $(document);
      $object.css({ "background-attatchment": "fixed" });
      $(window).scroll(function() {
        var from_top = $doc.scrollTop(),
          bg_css = "center " + multiplier * from_top + "px";
        $object.css({ "background-position": bg_css });
      });
    };

    // Parallax image background
    background_image_parallax($(".parallax"), 0.4);
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict