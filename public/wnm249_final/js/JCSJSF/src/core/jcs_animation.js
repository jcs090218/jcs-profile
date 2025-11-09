/**
 * $File: jcs_animation.js $
 * $Date: 2017-05-14 23:35:04 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */

jcsjsf.animation = function() {

  /**
   * Play animation by DOM Id.
   * @param {stirng} idName : string of the id name to find
   * DOM object.
   * @param {float} timePerFrame : time per frame.
   */
  function doAnimationById(idName, timePerFrame) {
    var frames = document.getElementById(idName).children;
    var frameCount = frames.length;
    var index = 0;

    setInterval(function () {
      frames[index % frameCount].style.display = "none";
      ++index;
      frames[index % frameCount].style.display = "block";
    }, timePerFrame);
  }

  /**
   * Play animation in DOM class.
   * @param {string} className : string of the class name to find
   * the DOM object.
   * @param {float} timePerFrame : time per frame.
   */
  function doAnimationByClass(className, timePerFrame) {
    var animClasses = document.getElementsByClassName(className);

    for (var animClass = 0;
         animClass < animClasses.length;
         ++animClass) {

      // Play the animation
      doAnimationByClassObject(
        animClasses[animClass],
        timePerFrame);
    }
  }

  /**
   * Play animation by 'class' object from the 'class' array.
   * @param {object} classObj : class object in the DOM.
   * @param {float} timePerFrame : time per frame.
   */
  function doAnimationByClassObject(classObj, timePerFrame) {

    var frames = classObj.children;
    var frameCount = frames.length;
    var index = 0;

    /* Initialize all the frame to none. */
    {
      for (var frame = 0;
           frame < frameCount;
           ++frame) {
        frames[frame].style.display = "none";
      }
    }

    setInterval(function () {
      frames[index % frameCount].style.display = "none";
      ++index;
      frames[index % frameCount].style.display = "block";
    }, timePerFrame);
  }

  /**
   * Play animation by 'tag' object from the 'class' array.
   * @param {object} inTag : class object in the DOM.
   * @param {float} timePerFrame : time per frame.
   */
  function doAnimationByTag(inTag, timePerFrame) {
    var animTag = document.getElementsByTagName(inTag);

    for (var animClass = 0;
         animClass < animTag.length;
         ++animClass) {

      // Play the animation
      doAnimationByClassObject(
        animTag[animClass],
        timePerFrame);
    }
  }

  /*
   * Public Variable/Function locate here.
   * 公開變數，外部程式可透過myUtil.publicProperty取得test這個值
   */
  return {

    /**
     * Do the animation for this class / id from DOM.
     * @param {string} inIdClassTag : class nmae or id
     * name string.
     * @param {float} timePerFrame : time per frame.
     */
    doAnimation : function (inIdClassTag, timePerFrame) {
      // get the first character.
      var firstChar = inIdClassTag.charAt(0);

      // get the rest of the string except the first character.
      var nameWithourFirstChar = inIdClassTag.substring(1);

      switch (firstChar) {
      case '#':
        doAnimationById(nameWithourFirstChar, timePerFrame);
        break;
      case '.':
        doAnimationByClass(nameWithourFirstChar, timePerFrame);
        break;
      default:
        doAnimationByTag(inIdClassTag, timePerFrame);
        break;
      }
    }
  };

}();
