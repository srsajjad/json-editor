const $ = x => document.querySelector(x)
const $All = x => document.querySelectorAll(x)
const ce = x => document.createElement(x)
const ul = $('ul')
const file = $('#myFile')

function on (obj, event, callback) {
  obj.addEventListener(event, callback)
}
