require.context("./fonts", true, /\.(eot|ttf|svg|woff)$/);
//require.context("./images", true, /\.(jpg|png|svg|jpg)$/);
require('./stylesheets/main.scss');

import Reveal from 'reveal.js';
import hljs from 'highlight.js';

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

