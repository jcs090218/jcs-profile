/**
 * $File: jcs_random.js $
 * $Date: 2017-08-09 17:11:57 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */

jcsjsf.random = function() {

  return {
    /**
     * Return the random value base on mininum value and
     * maxinum value.
     *
     * @param { int/float } min : mininum value.
     * @param { int/float } max : maxinum value.
     * @return { int/flaot } : return value between `min'
     * and `max' value.
     */
    randomInt : function (min, max) {
      var gap = max - min;
      return Math.round((Math.random() * gap) + min);
    },

    /**
     * Return the random value base on mininum value and
     * maxinum value.
     *
     * @param { int/float } min : mininum value.
     * @param { int/float } max : maxinum value.
     * @return { int/flaot } : return value between `min'
     * and `max' value.
     */
    randomFloat : function (min, max) {
      var gap = max - min;
      return (Math.random() * gap) + min;
    }

  };
}();
