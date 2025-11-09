/**
 * $File: main.js $
 * $Date: 2017-07-11 12:01:48 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */


(function ($) {

  /* Settings Properties. */

  // in ms
  var slideSpeed = 1000 * 0.5;

  // 0 mean no delay between switch page.
  var switchPageDelay = 1000 * 0.5;

  /**
   * Index Defiinition:
   *
   * 0 : Home Page
   * 1 : Asha Tea
   * 2 : Boba Guy
   * 3 : I-Tea
   * 4 : Shared Tea
   */
  var currentPageIndex = 0;   /* [Default : 0] */

  // boolean to check is the page still switching?
  var switchingPage = false;

  var pageHome = $('#pageHome');
  var pageAshaTea = $('#pageAshaTea');
  var pageBobaGuy = $('#pageBobaGuy');
  var pageITea = $('#pageITea');
  var pageSharedTea = $('#pageSharedTea');

  // hide all other page at the beginning.
  pageAshaTea.hide();
  pageBobaGuy.hide();
  pageITea.hide();
  pageSharedTea.hide();

  /**
   * Get the current active page base on the page
   * index defines.
   *
   * @return { object } : Page object/pointer.
   */
  function getCurrentActivePage() {
    switch (currentPageIndex) {
    case 0:
      return pageHome;
    case 1:
      return pageAshaTea;
    case 2:
      return pageBobaGuy;
    case 3:
      return pageITea;
    case 4:
      return pageSharedTea;
    }

    // should not get here...
    console.log("Current Active Page is null reference...");
    return null;
  }

  /**
   * Switch the pages to target page by page index.
   * @see : currentPageIndex variable's comment.
   *
   * @param { int } inPageIndex : page index we want to switch.
   */
  function switchPage(inPageIndex) {

    // Prevent loading the same page.
    if (inPageIndex == currentPageIndex)
      return;

    // return is still switching page.
    if (switchingPage == true)
      return;

    switchingPage = true;

    getCurrentActivePage()
      .slideUp(slideSpeed, function () {
        // update the current page index.
        currentPageIndex = inPageIndex;
        getCurrentActivePage().delay(switchPageDelay).slideDown(slideSpeed, function () {
          switchingPage = false;
        });
      });
  }

  /* Register Event */

  $('.toHome').click(function () {
    switchPage(0);
  });

  $('.toAshaTea').click(function () {
    switchPage(1);
  });

  $('.toBobaGuys').click(function () {
    switchPage(2);
  });

  $('.toITea').click(function () {
    switchPage(3);
  });

  $('.toSharedTea').click(function () {
    switchPage(4);
  });

  /* Register Sound Effect Event */

  $('.clickSound').click(function () {
    playBtMouseClick();
  });

  $('.hoverSound').mouseenter(function () {
    playBtMouseOver();
  });

  var muteBtnPtr = $('#muteBtn');
  muteBtnImage = muteBtnPtr.children('img');

  muteBtnPtr.click(function () {

    if (bgmTrigger) {
      pauseBGM();
    } else {
      playBGM();
    }
  });

}(this.jQuery));

/* ION Sound JS */
var bgmTrigger = true;
var muteBtnImage;

ion.sound({
  sounds: [
    {name: "BtMouseClick"},
    {name: "BtMouseOver"},
    {
      name: "skytown",
      loop: true,  // this mean loop forever
      volume: 1,
      multiplay: false
    }
  ],


  // Default config.
  path: "sound/",
  preload: true,
  multiplay: true,
  volume: 1
});

/**
 * window API (Event Call)
 */

window.onload = function () {
  playBGM();
};

window.onfocus = function () {
  playBGM();
};

window.onblur = function () {
  pauseBGM();
};


/**
 * Below are function get call by GUI.
 */

function playBtMouseClick() {
  ion.sound.play("BtMouseClick", {
    volume: 1
  });
}


function playBtMouseOver() {
  ion.sound.play("BtMouseOver", {
    volume: 1
  });
}


function playBGM() {
  muteBtnImage.attr('src', "./image/sound/noun_975399_cc.png");
  ion.sound.play("skytown");
  bgmTrigger = true;
}

function pauseBGM() {
  muteBtnImage.attr('src', "./image/sound/noun_975393_cc.png");
  ion.sound.pause("skytown");
  bgmTrigger = false;
}

/* Unuse */
function stopBGM() {
  ion.sound.stop("skytown");
}
