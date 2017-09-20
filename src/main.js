require.context("./fonts", true, /\.(eot|ttf|svg|woff)$/);
require.context("./images", true, /\.(jpg|png|svg|jpg)$/);
require('./stylesheets/main.scss');

window.xoxo = (string) => {
  let greating = `hello ${string}`;
  console.log(greating);
};
