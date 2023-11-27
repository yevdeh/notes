// https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
function ajaxGet(url, callbackSuccess, callbackError) {
  var r = new XMLHttpRequest()
  r.onreadystatechange = function () {
    if (r.readyState !== XMLHttpRequest.DONE) return
    if (r.status === 200) {
      callbackSuccess(r.responseText)
    } else {
      callbackError()
    }
  }
  r.open('GET', url)
  r.send()
}

function getRandomElementInArray(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function sampleArray(array, n) {
  var a = array.slice()
  var len = a.length
  var n = Math.max(Math.min(n, len), 0)
  for (var i = len - 1; i >= len - n; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
  return a.slice(len - n)
}

/* Note: the script can be inserted with `document.head.appendChild(script)`,
but the chosen variant is preferred because:
- it's slightly better supported by old browsers;
- GA, GTM and FB Pixel use it
*/
function loadScript(url) {
  var script = document.createElement('script')
  script.async = true
  script.src = url
  // insert
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(script, firstScriptTag)
}

// addEventListener for multiple elements
function on(nodes, callback, event) {
  for (var i = 0, l = nodes.length; i < l; i++) {
    nodes[i].addEventListener(event || 'click', callback)
  }
}

/* https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/18650169
https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
*/
function shuffleArray(array) {
  var a = array.slice()
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
  return a
}
