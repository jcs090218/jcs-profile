/**
 * $File: jcs_timer.js $
 * $Date: 2017-08-09 16:03:31 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */


jcsjsf.timer = function () {

  // record down the delta time for all other module can use.
  var deltaTime = 0;

  var lastUpdate = Date.now();

  return {

    /**
     * Throw this to your main loop function (setInterval). Then
     * call function `getDeltaTime' in order to find out the
     * current delta time.
     */
    tick : function () {
      var now = Date.now();
      deltaTime = now - lastUpdate;
      lastUpdate = now;
    },

    /**
     * Get delta time.
     *
     * @return { float } : delta time.
     */
    getDeltaTime : function () {
      return (deltaTime / 1000);
    }
  };

}();
