/**
 * $File: jcs_math.js $
 * $Date: 2017-08-10 16:00:49 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */


jcsjsf.math = function () {
  return {
    /* Absolute Number */
    abs : function (inVal) {
      return (inVal < 0) ? -inVal : inVal;
    },

    /* To Positive Number */
    toPositive : function (inVal) {
      return this.abs(inVal);
    },

    /* To Negative Number */
    toNegative : function (inVal) {
      return -this.abs(inVal);
    }
  };
}();
