/**
 * $File: jcs_util.js $
 * $Date: 2017-08-09 17:10:35 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */


jcsjsf.util = function () {

  /**
   * Change display properties to a class or an id selector.
   *
   * @param { string } inIdClassTag : id or class name using '.'
   * or '#' syntax.
   * @param { string } inDiplayProp : properties type text.
   */
  function displayElement(inIdClassTag, inDisplayProp) {
    var firstChar = inIdClassTag.charAt(0);
    var nameWithourFirstChar = inIdClassTag.substring(1);

    var index = 0;

    switch (firstChar) {
    case '#':
      {
        var tempId = document.getElementById(nameWithourFirstChar);
        tempId.style.display = inDisplayProp;
      }
      break;

    case '.':
      {
        var tempClass = document.getElementsByClassName(nameWithourFirstChar);
        for (index = 0;
             index < tempClass.length;
             ++index) {
          tempClass[index].style.display = inDisplayProp;
        }
      }
      break;

      // tag
    default:
      var tempTag = document.getElementsByTagName(inIdClassTag);
      for (index = 0;
           index < tempTag.length;
           ++index) {
        tempTag[index].style.display = inDisplayProp;
      }
      break;
    }
  }


  return {
    /**
     * Hide element with jQuery rules.
     *
     * @param { string } inIdClassTag : id or class name using '.'
     * or '#' syntax.
     */
    hideElement : function (inIdClassTag) {
      displayElement(inIdClassTag, 'none');
    },

    /**
     * Show element with jQuery rules.
     *
     * @param { string } inIdClassTag : id or class name using '.'
     * or '#' syntax.
     */
    showElement : function (inIdClassTag) {
      displayElement(inIdClassTag, 'initial');
    },

    /**
     * Return boolean is the element display on the screen.
     *
     * ATTENTION(jenchieh): if your parent element does not
     * display then this will be incorrect. This function
     * only check if the style display in that specific
     * object and does NOT check the parent object.
     *
     * @return { boolean } : true, element is display on the
     * screen. false, element is NOT display on the screen.
     */
    isElementDisplay : function (inElement) {
      return (inElement.style.display == 'initial');
    },

    /**
     * Set filter 'contrast' and  'brightness'.
     *
     * @param { string } inIdClassTag : Id, Class, Tag string.
     */
    setFilter : function (inIdClassTag, inCon, inBri) {
      var firstChar = inIdClassTag.charAt(0);

      var nameWithourFirstChar = inIdClassTag.substring(1);

      var val = "contrast("+ inCon + "%) brightness(" + inBri + ")";

      var index = 0;

      switch (firstChar) {
        // id
      case '#':
        {
          var tempId = document.getElementById(nameWithourFirstChar);
          if (tempId != null)
            tempId.style.webkitFilter = val;
        }
        break;

        // class
      case '.':
        {
          var tempClass = document.getElementsByClassName(nameWithourFirstChar);
          for (index = 0;
               index < tempClass.length;
               ++index) {
            tempClass[index].style.webkitFilter = val;
          }
        }
        break;

        // tag
      default:
        {
          var tempTags = document.getElementsByTagName(inIdClassTag);
          for (index = 0;
               index < tempTags.length;
               ++index) {
            tempTags[index].style.webkitFilter = val;
          }
        }
        break;
      }
    }

  };
}();
