/**
 * $File: drop_effect.js $
 * $Date: 2017-08-09 17:01:10 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */


var maxJumpForce = 450;
var minJumpForce = 350;

// will go through from negative to positive.
// For example: 100, the range will be -100 ~ 100.
var spreadForce = 200;

var timeToLive = 10; // in seconds

var startAnim = false;
var currentAnimObject = null;

var gRotateSpeed = 500;


// assign update function for running graphics.
setInterval(dropUpdate, 1000/FPS);


// How many items in the pool.
var itemsInPool = 50;

var itemObjects = [];


/**
 * @class DropItem
 * @brief Item that drop.
 */
var DropItem = function (divElement) {
  this.divElement = divElement;

  this.x = 0;
  this.y = 0;
  this.velX = 0;
  this.velY = 0;

  this.rotateSpeed = 0;
  this.rotation = 0;  // in degree

  this.isActive = false;
  this.timer = 0;
};

/**
 * Do stuff when the drop effect item is active.
 */
DropItem.prototype.active = function (xPos, yPos) {
  this.x = xPos;
  this.y = yPos;

  // apply random x and y velocity.
  this.velX = jcsjsf.random.randomFloat(
    jcsjsf.math.toNegative(spreadForce),
    jcsjsf.math.toPositive(spreadForce));
  this.velY = jcsjsf.random.randomFloat(
    jcsjsf.math.toNegative(minJumpForce),
    jcsjsf.math.toNegative(maxJumpForce));

  this.showElement();

  this.rotateSpeed = jcsjsf.random.randomFloat(
    jcsjsf.math.toNegative(gRotateSpeed),
    jcsjsf.math.toPositive(gRotateSpeed));

  this.isActive = true;
};

/**
 * Deactive the drop effect item.
 */
DropItem.prototype.deactive = function () {
  this.hideElement();

  // reset timer
  this.timer = 0;

  this.isActive = false;
};

/**
 * Main loop for each item.
 */
DropItem.prototype.update = function (deltaTime) {
  // do nothing if is not active
  if (!this.isActive)
    return;

  /* Position */
  {
    this.velY += jcsjsf.physics.getGravity();

    this.x += this.velX * deltaTime;
    this.y += this.velY * deltaTime;

    this.divElement.style.left = this.x + 'px';
    this.divElement.style.top = this.y + 'px';
  }

  /* Rotation */
  {
    this.rotation += this.rotateSpeed * deltaTime;

    this.divElement.style.transform = "rotate(" + this.rotation + "deg)";
  }

  // start timer
  this.timer += deltaTime;
  if (this.timer > timeToLive) {
    this.deactive();
  }
};

/* Show the element. */
DropItem.prototype.showElement = function () {
  this.divElement.style.display = 'initial';
};

/* Hide the element. */
DropItem.prototype.hideElement = function () {
  this.divElement.style.display = 'none';
};

/**
 * Return the div element.
 */
DropItem.prototype.getElement = function () {
  return this.divElement;
};

window.onload = function() {
  // call initialize
  dropInit();
};

/**
 * Initialize this script.
 */
function dropInit () {
  initDropItems();
}

/**
 * This will run every frame no need to call.
 */
function dropUpdate() {

  // start ticking.
  jcsjsf.timer.tick();

  var deltaTime = jcsjsf.timer.getDeltaTime();

  // update each drop items in the list.
  updateDropItem(deltaTime);

  playEffectByObject(deltaTime, currentAnimObject);
}

/**
 * Initialzie each drop item and add to the list in order to
 * get manage.
 *
 * NOTE(jenchieh): not sure we need a manager here...
 */
function initDropItems() {
  for (var index = 0;
       index < itemsInPool;
       ++index)
  {
    var itemDiv = document.createElement('div');

    var targetLayer = document.getElementById('layer-06');
    targetLayer.appendChild(itemDiv);

    itemDiv.setAttribute("class", "item");


    var randIndex = jcsjsf.random.randomInt(0, dropImages.length - 1);

    var itemSpritePath = "url('" + dropDir + dropImages[randIndex] + "')";

    // load the image as the background.
    itemDiv.style.background = itemSpritePath;

    var width = dropImagesSize[randIndex][0];
    var height = dropImagesSize[randIndex][1];

    itemDiv.style.width = width + "px";
    itemDiv.style.height = height + "px";

    /**
     * Here you could visually see the where the object
     * have been place.
     */
    {
      itemDiv.style.top = '400px';  // 305
      itemDiv.style.left = '-2710px';  // 436
    }

    var tmpDropItem = new DropItem(itemDiv);

    itemObjects.push(tmpDropItem);
  }

  /*
   * IMPORTANT: In order to visually see the object
   * uncomment this line.
   */
  jcsjsf.util.hideElement('.item');
}

/**
 * Update each drop item.
 *
 * @param { float } deltaTime : delta time.
 */
function updateDropItem (deltaTime) {
  for (var index = 0;
       index < itemObjects.length;
       ++index)
  {
    itemObjects[index].update(deltaTime);
  }
}

/**
 * Find one avaliable item in the list, What do I mean avaliable
 * is item is not rendering, so when we trygin to reset the item
 * will not accidentally reset item that are still being render
 * or active in the scene, or else the item will have the big
 * jump between the render.
 */
function findOneAvaliableItem () {
  for (var index = 0;
       index < itemObjects.length;
       ++index)
  {
    if (!jcsjsf.util.isElementDisplay(itemObjects[index].divElement)) {
      // return the avaliable object in the pool.
      return itemObjects[index];
    }
  }

  console.log("No avaliable item currently...");

  // nothing we could return.
  return null;
}



var animTime = 0.3;  // how long each animation plays?
var animTimer = 0;

/**
 * Pass in the current effect object and play the drop effect.
 */
function playEffectByObject(deltaTime, inObj) {

  if (!startAnim)
    return;

  // no hover object.
  if (currentAnimObject == null)
    return;

  // start timer.
  animTimer += deltaTime;

  // check timer.
  if (animTimer < animTime)
    return;

  var dropItem = findOneAvaliableItem();

  // no more avaliable item can do the drop effect.
  if (dropItem == null)
    return;

  var classObj = inObj.getBoundingClientRect();

  var top = classObj.top + 80;
  var left = classObj.left - 3146;

  dropItem.active(left, top);

  // reset timer.
  animTimer = 0;
}
