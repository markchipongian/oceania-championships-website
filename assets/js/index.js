(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 71
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  //On hover dropdown
  function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(
      function() {
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
      },
      e.type === 'mouseleave' ? 50 : 0
    );
  }

  $('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);

  // Parallax function
  // https://codepen.io/roborich/pen/wpAsm
  var background_image_parallax = function($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({ 'background-attatchment': 'fixed' });
    $(window).scroll(function() {
      var from_top = $doc.scrollTop(),
        bg_css = 'center ' + multiplier * from_top + 'px';
      $object.css({ 'background-position': bg_css });
    });
  };

  // Parallax image background
  background_image_parallax($('.parallax'), 0.4);

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
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $('body')
      .on('input propertychange', '.floating-label-form-group', function(e) {
        $(this).toggleClass(
          'floating-label-form-group-with-value',
          !!$(e.target).val()
        );
      })
      .on('focus', '.floating-label-form-group', function() {
        $(this).addClass('floating-label-form-group-with-focus');
      })
      .on('blur', '.floating-label-form-group', function() {
        $(this).removeClass('floating-label-form-group-with-focus');
      });
  });

  //Modal for hotels setup
  $('.portfolio-item').click(function() {
    var item = $(this).attr('id');
    $('#accomodationModal').modal('toggle');
    switch (item) {
      case '1':
        document.getElementById('accomodation_name').innerHTML =
          'Grand Pacific Hotel';
        document
          .getElementById('accomodation_img')
          .setAttribute('src', 'assets/imgs/accomodation1.jpg');
        document.getElementById('accomodation_desc').innerHTML =
          'Once established as the standard of luxury that was fit for royalty; now more than 100 years later,' +
          'the Grand Pacific Hotel remains true to the ideals of delivering the best of old world charms, South Pacific hospitality and contemporary service.';
        document.getElementById('wesbiteLink').innerHTML =
          'http://grandpacifichotel.com.fj';
        document.getElementById('wesbiteLink').href =
          'http://grandpacifichotel.com.fj';
        document.getElementById('address_content').innerHTML =
          'Victoria Parade 584 - 628, Suva';
        document.getElementById('phone_content').innerHTML = '(+679) 322 2000';
        document.getElementById('email_content').innerHTML = 'info@gph.com.fj';
        document.getElementById('reserve_content').innerHTML =
          '(+679) 322 2000';
        document
          .getElementById('map')
          .setAttribute(
            'src',
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5361.797136749262!2d178.42200943920542!3d-18.147179202881954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd525af1b09b9ef40!2sGrand%20Pacific%20Hotel!5e0!3m2!1sen!2sfj!4v1571907449478!5m2!1sen!2sf'
          );

        break;
      case '2':
        document.getElementById('accomodation_name').innerHTML = 'Holiday Inn';
        document
          .getElementById('accomodation_img')
          .setAttribute('src', 'assets/imgs/accomodation2.jpg');
        document.getElementById('accomodation_desc').innerHTML =
          " Holiday Inn Suva is well-located for business, within 5 minutes' walk of major banks, embassies and the EU headquarters. Their 3 flexible meeting rooms, with wireless Internet and harbour views, provide a unique backdrop for events and you can catch up in the 24-hour Business Centre.";
        document.getElementById('wesbiteLink').innerHTML =
          'https://www.ihg.com/holidayinn/<br>hotels/us/en/suva/suvvp/hoteldetail';
        document.getElementById('wesbiteLink').href =
          'https://www.ihg.com/holidayinn/hotels/us/en/suva/suvvp/hoteldetail';
        document.getElementById('address_content').innerHTML =
          'Victoria Parade, Suva';
        document.getElementById('phone_content').innerHTML =
          '(679) 0 3301600 322';
        document.getElementById('email_content').innerHTML =
          'reservations.holidayinnsuva@ihg.com';
        document.getElementById('reserve_content').innerHTML =
          'CALL RESERVATIONS 1 888 HOLIDAY (1 888 465 4329)';
        document
          .getElementById('map')
          .setAttribute(
            'src',
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4508.765792567359!2d178.42160993780323!3d-18.14524825241142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb781246d035c491!2sHoliday%20Inn%20Suva!5e0!3m2!1sen!2sfj!4v1571910103058!5m2!1sen!2sfj'
          );

        break;
      case '3':
        document.getElementById('accomodation_name').innerHTML =
          'Suva Peninsula Hotel';
        document
          .getElementById('accomodation_img')
          .setAttribute('src', 'assets/imgs/accomodation3.jpg');
        document.getElementById('accomodation_desc').innerHTML =
          'With 106 rooms, the hotel also offers a casual dining Restaurant, relaxing Lounge Bar and Conference facilities. Suva is the Capital of Fiji and is a beautiful Harbour City. The city is perched on a hilly Peninsula between Laucala Bay and Suva Harbour.';
        document.getElementById('wesbiteLink').innerHTML =
          'https://peninsula.com.fj';
        document.getElementById('wesbiteLink').href =
          'https://peninsula.com.fj';
        document.getElementById('address_content').innerHTML =
          'Cnr. McGregor Road and Pender Street, Suva';
        document.getElementById('phone_content').innerHTML = '(679) 331 3711 ';
        document.getElementById('email_content').innerHTML =
          'reservations@peninsula.com.fj';
        document.getElementById('reserve_content').innerHTML = '(679) 331 3711';
        document
          .getElementById('map')
          .setAttribute(
            'src',
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3791.3731338835664!2d178.42812361745132!3d-18.14671724278076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa0b3b15438e84fe!2sPeninsula%20International%20Hotel%20Suva!5e0!3m2!1sen!2sfj!4v1571910581414!5m2!1sen!2sfj'
          );
        break;
      case '4':
        document.getElementById('accomodation_name').innerHTML =
          'Tanoa Plaza Hotel';
        document
          .getElementById('accomodation_img')
          .setAttribute('src', 'assets/imgs/accomodation4.jpg');
        document.getElementById('accomodation_desc').innerHTML =
          'Located in the heart of Suva, Fiji’s capital city and home to the nation’s businesses and diplomatic services, this is the place for corporate-minded travellers. From our central location, a short walk will take you to business houses, retail malls, and a myriad of markets and eateries.';
        document.getElementById('wesbiteLink').innerHTML =
          'https://www.tanoaplaza.com';
        document.getElementById('wesbiteLink').href =
          'https://www.tanoaplaza.com';
        document.getElementById('address_content').innerHTML =
          'Cnr Gordon and Malcom Street';
        document.getElementById('phone_content').innerHTML = '(679) 331 2300';
        document.getElementById('email_content').innerHTML =
          'plaza@tanoahotels.com';
        document.getElementById('reserve_content').innerHTML = '(679) 331 2300';
        document
          .getElementById('map')
          .setAttribute(
            'src',
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3188.2077773803367!2d178.42461107504138!3d-18.143662821496072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd46946c01b99d46!2sTanoa%20Plaza%20Hotel!5e0!3m2!1sen!2sfj!4v1571910792826!5m2!1sen!2sfj'
          );

        break;
      case '5':
        document.getElementById('accomodation_name').innerHTML =
          'Souther Cross Hotel';
        document
          .getElementById('accomodation_img')
          .setAttribute('src', 'assets/imgs/accomodation5.jpg');
        document.getElementById('accomodation_desc').innerHTML =
          'Suva Southern Cross Hotel is a 10-minute walk from the Fiji Museum and a 15-minute drive from jungle trails and trails that lead to a waterfall. The tour desk organizes boat trips to other Fiji islands, shark diving sessions and excursions around the town. The property also offers a 24-hour business room and a spa with massage and beauty treatments.';
        document.getElementById('wesbiteLink').innerHTML =
          'http://southerncrosshotel.com-fiji.com/en';
        document.getElementById('wesbiteLink').href =
          'http://southerncrosshotel.com-fiji.com/en';
        document.getElementById('address_content').innerHTML =
          '63 Gordon Street, 16874 Suva';
        document.getElementById('phone_content').innerHTML = '(679) 331 4233';
        document.getElementById('email_content').innerHTML = 'N/A';
        document.getElementById('reserve_content').innerHTML = '(679) 331 4233';
        document
          .getElementById('map')
          .setAttribute(
            'src',
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3791.447142374694!2d178.42391770095813!3d-18.143304525497328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6df824c280a202b!2sSouthern%20Cross%20Hotel!5e0!3m2!1sen!2sfj!4v1572264953286!5m2!1sen!2sfj'
          );

        break;
      case '6':
        document.getElementById('accomodation_name').innerHTML =
          'Suva Motor Inn';
        document
          .getElementById('accomodation_img')
          .setAttribute('src', 'assets/imgs/accomodation6.jpg');
        document.getElementById('accomodation_desc').innerHTML =
          'The Suva Motor Inn is centrally located within walking distance to the city and close to the Government Buildings. Accommodation is in modern two bedroom and studio units set in quiet, peaceful rainforest surroundings, all two bedroom units have full kitchen facilities.';
        document.getElementById('wesbiteLink').innerHTML =
          'https://www.hexagonfiji.com/<br>suva_motor.html';
        document.getElementById('wesbiteLink').href =
          'https://www.hexagonfiji.com/suva_motor.html';
        document.getElementById('address_content').innerHTML =
          'The Hexagon Group 12697, Suva';
        document.getElementById('phone_content').innerHTML = '(679) 3306466';
        document.getElementById('email_content').innerHTML =
          'suvamotorinn@connect.com.fj';
        document.getElementById('reserve_content').innerHTML = '(679) 3306466';
        document
          .getElementById('map')
          .setAttribute(
            'src',
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5361.827055399227!2d178.4254618494903!3d-18.146203748670388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed96108b3de5b44d!2sSuva%20Motor%20Inn!5e0!3m2!1sen!2sfj!4v1571910925190!5m2!1sen!2sfj'
          );

        break;
      default:
        break;
    }
  });
})(jQuery); // End of use strict
