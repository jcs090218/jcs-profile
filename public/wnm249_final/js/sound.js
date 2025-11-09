/**
 * $File: sound.js $
 * $Date: 2017-08-07 14:16:18 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */


/*************************************************
 * ION Sound JS
 *************************************************/
var bgmTrigger = true;
var mute = false;

ion.sound({
  sounds: [
    {name: "BtMouseClick"},
    {name: "BtMouseOver"},
    {
      name: dayTimeBgm,
      loop: true,
      volume: 1,
      multiplay: false
    },
    {
      name: nightBgm,
      loop: true,
      volume: 1,
      multiplay: false
    }
  ],

  // Default Config
  path: "sound/",
  preload: true,
  multiplay: true,
  volume: 1
});

/**
 * Play BGM the safe way.
 */
function playBGM() {
  if (bgmTrigger)
    return;

  ion.sound.play(currentBgm);
  bgmTrigger = true;
}

/**
 * No safe way, I think ION handle the
 * error itself.
 */
function pauseBGM() {
  if (!bgmTrigger || currentBgm == null)
    return;

  ion.sound.pause(currentBgm);
  bgmTrigger = false;
}

/**
 * Stop BGM the safe way.
 */
function stopBGM() {
  if (!bgmTrigger || currentBgm == null)
    return;

  ion.sound.stop(currentBgm);
  bgmTrigger = false;
}

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
