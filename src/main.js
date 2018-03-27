require.context("reveal.js/lib/font/league-gothic", true, /\.(eot|ttf|svg|woff)$/);
require('./stylesheets/main.scss');
require('./data/users.json');

import Reveal from 'reveal.js';
import hljs from 'highlight.js/lib/highlight.js';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

document.onkeydown = function(e) {
  if (e.which === 40 && !document.getElementsByClassName('navigate-down')[0].disabled) return;
  if (e.which === 38 && !document.getElementsByClassName('navigate-up')[0].disabled) return;
  setTimeout(function(){
      if (e.which === 40 && document.getElementsByClassName('navigate-down')[0].disabled) {
        document.getElementsByClassName('navigate-right')[0].click();
      } else if (e.which === 38 && document.getElementsByClassName('navigate-up')[0].disabled) {
        document.getElementsByClassName('navigate-left')[0].click();
      }
  })
}


Reveal.initialize({
  history: true,
  controls: true,
  progress: true,
  slideNumber: true,
  keyboard: true,
  overview: true,
  vertical: true,
  touch: true,
  loop: false,
});

hljs.initHighlightingOnLoad();

