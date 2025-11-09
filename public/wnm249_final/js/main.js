/**
 * $File: main.js $
 * $Date: 2017-07-25 04:59:04 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */

/* Loading screen listener. */
window.addEventListener("load", function () {
  var load_screen = document.getElementById("load-screen");
  document.body.removeChild(load_screen);
});

/* JQuery */

(function ($) {
  /*************************************************
   * Preload Resources.
   *************************************************/
  var navPanel = $('#nav-panel');
  var navPanelActive = false;

  var layers = [];
  layers.push($('#layer-00'));
  layers.push($('#layer-01'));
  layers.push($('#layer-02'));
  layers.push($('#layer-03'));
  layers.push($('#layer-04'));
  layers.push($('#layer-05'));
  layers.push($('#layer-06'));

  /*************************************************
   * Rule Variables
   *************************************************/
  /**
   * Page Id Definition:
   * 0: Home.
   * 1: Right Page.
   * 2: Left Page.
   * 3: Up Page.
   */
  var currentPage = 0;
  var doneSwitchingPage = true;

  var canPageHome = true;
  var canPageLeft = true;
  var canPageRight = true;
  var canPageTop = true;

  var pageHomeBtn = $('.pageHome');
  var pageRightBtn = $('.pageRight');
  var pageLeftBtn = $('.pageLeft');
  var pageTopBtn = $('.pageTop');

  var contentPanel = $('#content-container');

  var contentHome = $('#content-home');
  var contentLeft = $('#content-left');
  var contentRight = $('#content-right');
  var contentTop = $('#content-top');

  contentLeft.hide();
  contentRight.hide();
  contentTop.hide();

  /* assign Announcement Marquee */
  $('#announcement-text').text(announcement);


  /*************************************************
   * Register Event
   *************************************************/

  $('#toggle-nav').click(function() {
    if (navPanelActive)
      deactiveNavPanel();
    else
      activeNavPanel();
  });

  pageHomeBtn.click(function() {
    switchPage(0);
  });

  pageRightBtn.click(function() {
    switchPage(1);
  });

  pageLeftBtn.click(function() {
    switchPage(2);
  });

  pageTopBtn.click(function() {
    switchPage(3);
  });

  $('#toggle-btn input').change(function () {
    if (this.checked) {
      isDayTime();
    } else {
      isNight();
    }
  });

  $('.shake-slow').mouseenter(function () {
    currentAnimObject = this;
    startAnim = true;
  });

  $('.shake-slow').mouseleave(function () {
    currentAnimObject = null;
    startAnim = false;
  });

  /*************************************************
   * Simplify functions.
   *************************************************/

  /**
   * Active navigation panel in the safe way.
   */
  function activeNavPanel() {
    // do not add multiple class, waste of resources!
    if (navPanelActive)
      return;

    navPanel.addClass('move');
    navPanelActive = true;
  }

  /**
   * Deactive navigation panel in the safe way.
   */
  function deactiveNavPanel() {
    navPanel.removeClass('move');
    navPanelActive = false;
  }

  /**
   * Switch the page by page id.
   *
   * @param { int } inPageId : target page id to switch.
   */
  function switchPage(inPageId) {

    if (!doneSwitchingPage)
      return;

    // if on the same page, don't switch page then.
    if (inPageId == currentPage)
      return;

    var animSuccess = false;

    switch (inPageId) {
    case 0:
      animSuccess = pageHome();
      break;
    case 1:
      animSuccess = pageRight();
      break;
    case 2:
      animSuccess = pageLeft();
      break;
    case 3:
      animSuccess = pageTop();
      break;
    }

    if (!animSuccess)
      return;

    playBtMouseClick();

    // clear last page.
    clearPage(currentPage);

    var lastPage = currentPage;

    // update current page id.
    currentPage = inPageId;

    // Every time we switch the page successfully, we de-active
    // the navigation panel.
    deactiveNavPanel();

    // Disable the navigation panel for a while.
    disableNavPanel();

    doneSwitchingPage = false;

    /**
     * Change the content here...
     */
    contentPanel.
      slideUp(slideUpSpeed, function () {
        switchContent(lastPage);

        switch (inPageId) {
        case 0:
          contentHome.show();
          break;
        case 1:
          contentRight.show();
          break;
        case 2:
          contentLeft.show();
          break;
        case 3:
          contentTop.show();
          break;
        }
      }).
      delay(slideDelay).
      slideDown(slideDownSpeed, function () {

        // re-enable the navigation panel.
        resetNavPanelByPageId(currentPage);

        doneSwitchingPage = true;
      });
  }

  /**
   * Switch page to 'home' page.
   */
  function pageHome() {
    /*
     * NOTE(jenchieh): every page could goto home page for now.
     * Page Home will just clean up all the animation code.
     */
    return true;
  }

  /**
   * Switch page to 'right' page.
   */
  function pageRight() {
    if (!canPageRight)
      return false;

    for (var index = 0;
         index < layers.length;
         ++index) {
      layers[index].addClass('page-right-1');
    }

    return true;
  }

  /**
   * Switch page to 'left' page.
   */
  function pageLeft() {
    if (!canPageLeft)
      return false;

    for (var index = 0;
         index < layers.length;
         ++index) {
      layers[index].addClass('page-left-1');
    }

    return true;
  }

  /**
   * Switch page to 'top' page.
   */
  function pageTop() {
    if (!canPageTop)
      return false;

    for (var index = 0;
         index < layers.length;
         ++index) {
      layers[index].addClass('page-top-1');
    }

    return true;
  }

  /**
   * Clear  page.
   *
   * @param { int } inLastPage : Current page to clear
   * before switch to the new page.
   */
  function clearPage(inLastPage) {
    var index = 0;

    switch (inLastPage) {
    case 0:
      break;

    case 1:
      {
        for (index = 0;
             index < layers.length;
             ++index) {
          layers[index].removeClass('page-right-1');
        }
      }
      break;

    case 2:
      {
        for (index = 0;
             index < layers.length;
             ++index) {
          layers[index].removeClass('page-left-1');
        }
      }
      break;

    case 3:
      {
        for (index = 0;
             index < layers.length;
             ++index) {
          layers[index].removeClass('page-top-1');
        }
      }
      break;
    }
  }

  /**
   * Switch to the target page content.
   *
   * @param { int } inLastPage : Hide the last page.
   */
  function switchContent(inLastPage) {
    switch (inLastPage) {
    case 0:
      contentHome.hide();
      break;

    case 1:
      contentRight.hide();
      break;

    case 2:
      contentLeft.hide();
      break;

    case 3:
      contentTop.hide();
      break;
    }
  }

  /**
   * Disable the Navigation Panel.
   */
  function disableNavPanel() {
    resetNavPanelByPageId(-1);
  }

  /**
   * Reset the Navigation Panel by page id.
   *
   * @param { int } inPageId : Current page id going to set
   * our navigation panel.
   */
  function resetNavPanelByPageId(inPageId) {
    var disableBtnOpacity = 0.5;
    var ableBtnOpacity = 1;

    switch (inPageId) {

      /* Home */
    case 0:
      canPageHome = false;
      canPageRight = true;
      canPageLeft = true;
      canPageTop = true;

      pageHomeBtn.css('opacity', disableBtnOpacity);
      pageRightBtn.css('opacity', ableBtnOpacity);
      pageLeftBtn.css('opacity', ableBtnOpacity);
      pageTopBtn.css('opacity', ableBtnOpacity);

      pageHomeBtn.removeClass('hover');
      pageRightBtn.addClass('hover');
      pageLeftBtn.addClass('hover');
      pageTopBtn.addClass('hover');
      break;

      /* Right */
    case 1:
      canPageHome = true;
      canPageRight = false;
      canPageLeft = true;
      canPageTop = false;

      pageHomeBtn.css('opacity', ableBtnOpacity);
      pageRightBtn.css('opacity', disableBtnOpacity);
      pageLeftBtn.css('opacity', ableBtnOpacity);
      pageTopBtn.css('opacity', disableBtnOpacity);

      pageHomeBtn.addClass('hover');
      pageRightBtn.removeClass('hover');
      pageLeftBtn.addClass('hover');
      pageTopBtn.removeClass('hover');
      break;

      /* Left */
    case 2:
      canPageHome = true;
      canPageRight = true;
      canPageLeft = false;
      canPageTop = false;

      pageHomeBtn.css('opacity', ableBtnOpacity);
      pageRightBtn.css('opacity', ableBtnOpacity);
      pageLeftBtn.css('opacity', disableBtnOpacity);
      pageTopBtn.css('opacity', disableBtnOpacity);

      pageHomeBtn.addClass('hover');
      pageRightBtn.addClass('hover');
      pageLeftBtn.removeClass('hover');
      pageTopBtn.removeClass('hover');
      break;

      /* Top */
    case 3:
      canPageHome = true;
      canPageRight = false;
      canPageLeft = false;
      canPageTop = false;

      pageHomeBtn.css('opacity', ableBtnOpacity);
      pageRightBtn.css('opacity', disableBtnOpacity);
      pageLeftBtn.css('opacity', disableBtnOpacity);
      pageTopBtn.css('opacity', disableBtnOpacity);

      pageHomeBtn.addClass('hover');
      pageRightBtn.removeClass('hover');
      pageLeftBtn.removeClass('hover');
      pageTopBtn.removeClass('hover');
      break;

      /* Disable */
    default:
      canPageHome = false;
      canPageRight = false;
      canPageLeft = false;
      canPageTop = false;

      pageHomeBtn.css('opacity', disableBtnOpacity);
      pageRightBtn.css('opacity', disableBtnOpacity);
      pageLeftBtn.css('opacity', disableBtnOpacity);
      pageTopBtn.css('opacity', disableBtnOpacity);

      pageHomeBtn.removeClass('hover');
      pageRightBtn.removeClass('hover');
      pageLeftBtn.removeClass('hover');
      pageTopBtn.removeClass('hover');
      break;
    }
  }

  /**
   * Initialize for jQuery Rule function.
   */
  function jQueryInit() {
    resetNavPanelByPageId(currentPage);

    /* default page as home. */
    switchPage(0);
  }

  jQueryInit();

}(this.jQuery));

/**
 * Give website random period of time.
 */
function doRandomTime() {
  var randomNumberBetween0and3 = Math.floor(Math.random() * 4);

  switch (randomNumberBetween0and3) {
  case 0:
    isMorning();
    break;

  case 1:
    isDayTime();
    break;

  case 2:
    isDusk();
    break;

  case 3:
    isNight();
    break;
  }
}


/*************************************************
 * JCS
 *************************************************/

jcsjsf.animation.doAnimation('.air-balloon', 500);
jcsjsf.animation.doAnimation('.air-flag', 500);
jcsjsf.animation.doAnimation('.smoke', 500);
jcsjsf.animation.doAnimation('#lenario', 250);
jcsjsf.animation.doAnimation('#moppie', 250);
jcsjsf.animation.doAnimation('.eak', 250);

/*************************************************
 * Browser's trigger event
 *************************************************/

window.onfocus = function () {
  playBGM();
};

window.onblur = function () {
  pauseBGM();
};

/**
 * Disable the Zoom for cross browser. (JQuery needed)
 *
 * SOURCE: https://stackoverflow.com/questions/27116221/prevent-zoom-cross-browser
 */
function disableZoom() {
  $(document).keydown(function(event) {
    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
      event.preventDefault();
    }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
  });

  $(window).bind('mousewheel DOMMouseScroll', function (event) {
    if (event.ctrlKey == true) {
      event.preventDefault();
    }
  });
}

/*************************************************
 * For this Website
 *************************************************/

/**
 * Initialize the website logic.
 */
function init() {
  isDayTime();
}

/* Start initialize... */
init();
