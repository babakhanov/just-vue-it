require.context("./fonts", true, /\.(eot|ttf|svg|woff)$/);
require.context("reveal.js/lib/font/league-gothic", true, /\.(eot|ttf|svg|woff)$/);
//require.context("./images", true, /\.(jpg|png|svg|jpg)$/);
require('./stylesheets/main.scss');

import Reveal from 'reveal.js';
import hljs from 'highlight.js/lib/highlight.js';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));

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

