$(document).ready(function(){
  //Functions
  function etc() {
    $('a[href=#]').click(function(e){
      e.preventDefault()
    });
  };
  function carousel() {
    $(".carousel").responsiveSlides({
      manualControls: '.carousel-pager',
      auto: false
    });
  };
  function tabs() {
    var $tabsNavLink = $('.tabs-nav a');
    $('.tabs-item').hide();
    $('.tabs-content').find('.tabs-item:first').show();
    $('.tabs-nav').find('li:first').find('a').addClass('current');

    $tabsNavLink.click(function(e) {
      e.preventDefault();
      $tabsNavLink.removeClass('current');
      $(this).addClass('current');
      $(this.hash).show().siblings().hide();
    });
  };

  $("a.burger").click(function(){
    $(this).toggleClass("selected");
    $('.main-menu').toggleClass('menu-opened');
  });


  if ($(window).width() <= 1000) {
    $('.main-menu').append( $('.main-search') );
  };
  function mobile() {
    var $WW = $(window).width();

    if ($WW > 1000) {
      $('.top-header').prepend( $('.main-search') );
    } else if ($WW <= 1000) {
      $('.main-menu').append( $('.main-search') );
    };
  };
  $(document).ready(mobile);
  $(window).resize(mobile);

  //Func init
  etc();
  carousel();
  tabs();
  burger();


});

