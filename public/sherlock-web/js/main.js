"use strict";

var textarea = document.getElementById('text-area');
var tb_search = document.getElementById('tb-search');
var btn_search = document.getElementById('btn-search');
var info_version = document.getElementById('info-version');
var sherlock_data = { };
var sites_count = 0;
var version_info = "";

var query_counter = 0;     // Current process to Sherlock
var hunting = false;  // Flag to check weather if current hunting state

/* (@* "Utility" ) */

/* Construct base URL address. */
function getAddress() { return 'http://' + HOST + ':' + PORT; }

function append(str) {
  textarea.innerHTML += str;
  // Add upp `rows` for every newline
  let count = (str.match(/\r/g) || []).length || (str.match(/\n/g) || []).length;
  textarea.rows += count;
}

function erase() { textarea.innerHTML = ''; textarea.rows = 0; }

function request(type, url, callback, body) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState != 4 || this.status != 200)
      return;
    callback(this);
  };
  xhttp.open(type, url, true);
  xhttp.send(body);
}

/**
 * Enable/Disable search area elements.
 * @param {boolean} enable - True to enable, False to disable.
 */
function enableSearch(enable) {
  tb_search.disabled = !enable;
  btn_search.disabled = !enable;
}

/* Hide or Show text area. */
function enableTextArea(enable) {
  if (enable) textarea.style.display = 'inline';
  else textarea.style.display = 'none';
}

/* Return true if INPUT is a valid username. */
function validUsername(input) {
  return !input.includes('-') && input !== '';
}

/* Return true, if INPUT may be XSS. */
function isSensitive(input) {
  let escape = [";", "&", "<", ">", "=", "\"", "'"];
  for (let index = 0; index < escape.length; ++index) {
    if (input.includes(escape[index])) {
      return true;
    }
  }
  return false;
}

/* Form next query argument. */
function getNextQuery(input) {
  let args = input + " --print-all";
  let keys = Object.keys(sherlock_data);
  let limit = query_counter + QUERY_COUNT;
  for (let cnt = query_counter; cnt < limit; ++cnt) {
    args += " --site \"" + keys[cnt] + "\"";
  }
  query_counter += QUERY_COUNT;
  if (query_counter > sites_count)
    hunting = false;  // Done query from server
  return args;
}

function validate_data(data) {
  return data.replaceAll(/\r\n/g, '\n');
}

/* (@* "Preparation" ) */

function init() {
  request("GET", getAddress() + "/data/", function (xhr) {
    sherlock_data = JSON.parse(xhr.response);
    sites_count = Object.keys(sherlock_data).length;
    enableSearch(true);
  });
  request("POST", getAddress() + "/cli/", function (xhr) {
    let result = JSON.parse(xhr.response);
    version_info = result['output'];
    if (SHOW_VERSION)
      info_version.innerHTML = version_info;
  }, JSON.stringify({ args: "--version" }));
}
init();

/* (@* "Core" ) */

/**
 * Execute command except start searching for username.
 * @param {string} input - Other valid command except username.
 */
function executeCommand(input) {
  request("POST", getAddress() + "/cli/", function (xhr) {
    enableSearch(true);
    let result = JSON.parse(xhr.response);
    let output = result['output'];
    append(output);
    enableTextArea(true);
  }, JSON.stringify({ args: input }));
}

/**
 * Start hunting down accounts from social network.
 * @param {string} input - Must be a valid username.
 */
function executeUsername(input) {
  let args = getNextQuery(input);
  request("POST", getAddress() + "/cli/", function (xhr) {
    let result = JSON.parse(xhr.response);
    let output = result['output'];
    if (output === 'Invalid argument string') {
      hunting = false;
    } else {
      output = validate_data(output);
      {
        let lines = output.split('\n');
        lines.splice(0,1);
        output = lines.join('\n');
        output = output.slice(0, -1);
      }
    }
    append(output);
    enableTextArea(true);
    if (hunting)
      executeUsername(input);
    else
      enableSearch(true);
  }, JSON.stringify({ args: args }));
}

/* Execution when user hit search button */
function search() {
  enableSearch(false);
  erase();
  let input = tb_search.value;
  if (isSensitive(input)) {  // May be XSS
    append("[ERROR] Command contains invalid characters");
    enableTextArea(true);
    enableSearch(true);
  } else {
    if (validUsername(input)) {
      query_counter = 0;  // reset query counter
      hunting = true;
      executeUsername(input);
    } else {
      executeCommand(input);
    }
  }
}

/* (@* "Register" ) */

tb_search.onkeyup = function(event) { if (event.keyCode === 13) { search(); } };
btn_search.onclick = search;
