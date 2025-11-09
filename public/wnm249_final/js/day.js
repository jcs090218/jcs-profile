/**
 * $File: day.js $
 * $Date: 2017-08-07 14:19:21 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */


/*************************************************
 * Day
 *************************************************/
var timeCover = document.getElementById('time-cover');
var currentBgm = null;

function isMorning() {
  stopBGM();
  currentBgm = morningBgm;
  playBGM();

  document.body.style.backgroundColor = "#77ffff";
  timeCover.style.opacity = '0.1';
  timeCover.style.backgroundColor = '#77ffff';

  jcsjsf.util.hideElement('#moon');
}

function isDayTime() {
  stopBGM();
  currentBgm = dayTimeBgm;
  playBGM();

  document.body.style.backgroundColor = "#55ddff";
  timeCover.style.opacity = '0';
  timeCover.style.backgroundColor = '#FFF';

  document.getElementById('logo').style.backgroundImage = "url('./images/" + logoImage + "')";;
  document.getElementById('star-bg').style.backgroundImage = "none";

  // For Navigation Panel
  var navColor = 'rgba(0,0,0,0.5)';
  document.getElementById('toggle-nav').style.backgroundColor = navColor;
  document.getElementById('nav-panel').style.backgroundColor = navColor;

  /* Add filter to all the sprite.  */
  {
    // -webkit-filter: contrast(100%) brightness(0.2);
    jcsjsf.util.setFilter('#back-1', 100, 1);
    jcsjsf.util.setFilter('#back-2', 100, 1);
    jcsjsf.util.setFilter('#back-4', 100, 1);
    jcsjsf.util.setFilter('.back-5', 100, 1);
    jcsjsf.util.setFilter('#back-17', 100, 1);
    jcsjsf.util.setFilter('#ground', 100, 1);
    jcsjsf.util.setFilter('#gil', 100, 1);
    jcsjsf.util.setFilter('.air-flag', 100, 1);
    jcsjsf.util.setFilter('.air-balloon', 100, 1);
    jcsjsf.util.setFilter('#sign', 100, 1);
    jcsjsf.util.setFilter('.back-19', 100, 1);
    jcsjsf.util.setFilter('.back-20', 100, 1);
    jcsjsf.util.setFilter('.tree-01', 100, 1);
    jcsjsf.util.setFilter('.tree-02', 100, 1);
    jcsjsf.util.setFilter('.cloud-01', 100, 1);
    jcsjsf.util.setFilter('.cloud-02', 100, 1);

    jcsjsf.util.setFilter('.eak', 100, 1);

    jcsjsf.util.setFilter('#content', 100, 1);
  }

  /* Show Daytime item. */
  {
    jcsjsf.util.showElement('.cloud-01');
    jcsjsf.util.showElement('.cloud-02');
    jcsjsf.util.showElement('.light-00');
    jcsjsf.util.showElement('.light-01');
    jcsjsf.util.showElement('.light-02');
    jcsjsf.util.showElement('.rainbow');
    jcsjsf.util.showElement('.smoke');
    jcsjsf.util.showElement('#gil');

    // show NPC
    jcsjsf.util.showElement('#lenario');
    jcsjsf.util.showElement('#chief');
    jcsjsf.util.showElement('#moppie');
  }

  jcsjsf.util.hideElement('#moon');
}

function isDusk() {
  stopBGM();
  currentBgm = duskBgm;
  playBGM();

  document.body.style.backgroundColor = "#ffd47a";
  timeCover.style.opacity = '0.1';
  timeCover.style.backgroundColor = 'yellow';

  jcsjsf.util.hideElement('#moon');
}

function isNight() {
  stopBGM();
  currentBgm = nightBgm;
  playBGM();

  document.body.style.backgroundColor = "#101020";
  timeCover.style.opacity = '0.0';
  timeCover.style.backgroundColor = '#113';
  document.getElementById('logo').style.backgroundImage = "url('./images/" + logoNightImage + "')";;
  document.getElementById('star-bg').style.backgroundImage = "url('./images/" + starImage + "')";

  // For navigation panel
  var navColor = 'rgba(255,255,255,0.5)';
  document.getElementById('toggle-nav').style.backgroundColor = navColor;
  document.getElementById('nav-panel').style.backgroundColor = navColor;

  /* Add filter to all the sprite.  */
  {
    // -webkit-filter: contrast(100%) brightness(0.2);
    jcsjsf.util.setFilter('#back-1', 100, 0.2);
    jcsjsf.util.setFilter('#back-2', 100, 0.2);
    jcsjsf.util.setFilter('#back-4', 100, 0.2);
    jcsjsf.util.setFilter('.back-5', 100, 0.2);
    jcsjsf.util.setFilter('#back-17', 100, 0.3);
    jcsjsf.util.setFilter('#ground', 100, 0.3);
    jcsjsf.util.setFilter('#gil', 100, 0.3);
    jcsjsf.util.setFilter('.air-flag', 100, 0.2);
    jcsjsf.util.setFilter('.air-balloon', 100, 0.2);
    jcsjsf.util.setFilter('#sign', 100, 0.3);
    jcsjsf.util.setFilter('.back-19', 100, 0.3);
    jcsjsf.util.setFilter('.back-20', 100, 0.3);
    jcsjsf.util.setFilter('.tree-01', 100, 0.3);
    jcsjsf.util.setFilter('.tree-02', 100, 0.3);
    jcsjsf.util.setFilter('.cloud-01', 1, 0.3);
    jcsjsf.util.setFilter('.cloud-02', 1, 0.3);

    jcsjsf.util.setFilter('.eak', 100, 0.8);

    // Content
    jcsjsf.util.setFilter('#content', 100, 0.85);
  }

  /* Remove Daytime item. */
  {
    // jcsjsf.util.hideElement('.cloud-01');
    // jcsjsf.util.hideElement('.cloud-02');
    jcsjsf.util.hideElement('.light-00');
    jcsjsf.util.hideElement('.light-01');
    jcsjsf.util.hideElement('.light-02');
    jcsjsf.util.hideElement('.rainbow');
    jcsjsf.util.hideElement('.smoke');
    jcsjsf.util.hideElement('#gil');

    // remove NPC
    jcsjsf.util.hideElement('#lenario');
    jcsjsf.util.hideElement('#chief');
    jcsjsf.util.hideElement('#moppie');
  }

  jcsjsf.util.showElement('#moon');
}
