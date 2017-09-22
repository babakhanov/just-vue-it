require.context("reveal.js/lib/font/league-gothic", true, /\.(eot|ttf|svg|woff)$/);
require('./stylesheets/main.scss');
require('./data/users.json');

import Reveal from 'reveal.js';
import hljs from 'highlight.js/lib/highlight.js';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

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

