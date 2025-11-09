/**
 * $File: main.js $
 * $Date: 2020-01-09 18:27:12 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2020 by Shen, Jen-Chieh $
 */

"use strict";


/**
 * Check if the variable exists/defined.
 * @param { string } varName : The property name.
 */
function bound(varName) {
  return window.hasOwnProperty(varName);
}

/**
 * Create a new div and return it.
 * @param { JSON } parent : Parent node.
 */
function createElementWithParent(elm, parent = null) {
  let newElem = document.createElement(elm);
  if (parent) parent.appendChild(newElem);
  return newElem;
}

/**
 * Apply title name.
 */
function applyTitle() {
  document.title = TITLE;
  document.body.style.backgroundImage = "url('" + BG_IMG + "')";
}

/**
 * Apply links.
 *
 * Well, this is the core of this template/application.
 */
function applyLinks() {
  let container = document.getElementById('container');

  let baseName = 'SLOT_';  // Variable name for the slot variable.
  let slotCount = 10;      // Maxinum possible slot.

  for (let count = 1; count < slotCount; ++count) {
    let varName = baseName + count;
    if (!bound(varName))
      continue;

    let slotInfo = window[varName];

    if (!slotInfo.visible)
      continue;

    // Create new div.
    let newSlot = createElementWithParent('div', container);
    newSlot.setAttribute('class', 'slot');

    let aTagImg = createElementWithParent('a', newSlot);
    aTagImg.setAttribute('href', slotInfo.url);

    let img = createElementWithParent('img', aTagImg);
    img.setAttribute('id', 'image');
    img.setAttribute('src', slotInfo.image);

    let aTagDesc = createElementWithParent('a', newSlot);
    aTagDesc.setAttribute('id', 'desc');
    aTagDesc.setAttribute('href', slotInfo.url);
    aTagDesc.innerHTML = slotInfo.text;
  }
}

/**
 * Apply copyright text.
 */
function applyCopyright() {
  let copyright = document.getElementById('copyright');
  copyright.innerHTML = COPYRIGHT_INFO;
}

function main() {
  applyTitle();
  applyLinks();
  applyCopyright();
}
main();
