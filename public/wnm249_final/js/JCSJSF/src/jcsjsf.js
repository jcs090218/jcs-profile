/**
 * $File: jcsjsf.js $
 * $Date: 2017-08-09 17:16:33 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */


/* Initialize the namespace. */
var jcsjsf = jcsjsf || {};


if (typeof jcsjsf_dir !== 'undefined') {
  var path = jcsjsf_dir;

  var lastChar = path.slice(-1);

  // make sure the path is correct.
  if (lastChar != '/') {
    jcsjsf_dir += '/';
  }

  /* Defined source path. */
  var srcPath = "<script src=\"./" + jcsjsf_dir;

  /** Start register class files. **/
  {
    /* util */
    document.writeln(srcPath + "util/jcs_math.js\"></script>");
    document.writeln(srcPath + "util/jcs_physics.js\"></script>");
    document.writeln(srcPath + "util/jcs_util.js\"></script>");
    document.writeln(srcPath + "util/jcs_random.js\"></script>");
    document.writeln(srcPath + "util/jcs_timer.js\"></script>");

    /* core */
    document.writeln(srcPath + "core/jcs_animation.js\"></script>");
    document.writeln(srcPath + "core/jcs_animator.js\"></script>");
  }
}
else {

  // Error check
  console.error("'jcsjsf_dir' variable have not been \
defined before loading 'jcsjsf.js' file.");
}
