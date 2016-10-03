import {siteLoader} from './loader';

var sl = new siteLoader();

document.addEventListener("DOMContentLoaded", function() {
  sl.init();
}, false);

