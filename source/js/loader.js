// site loader

export function siteLoader() {
  this.init = function() {
    var b = document.querySelector("body");

    window.setTimeout(function() {
      b.className += " l";      
    }, 200);
  }
}