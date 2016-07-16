$('a').click(function() {
var hrefStr = $(this).attr("href");
if(hrefStr.includes("out.reddit.com"))
{
  event.preventDefault();
  hrefStr = hrefStr.split("%2F").join("/");
  hrefStr = hrefStr.split("%3A").join(":");
  hrefStr = hrefStr.split("%3F").join("?");
  hrefStr = hrefStr.split("%3D").join("=");
  hrefStr = hrefStr.split("%26h").join("&h");
  hrefStr = hrefStr.split("%26w").join("&w");
  hrefStr = hrefStr.split("%26s").join("&s");
  hrefStr = hrefStr.split("url=")[1];
  hrefStr = hrefStr.split("&token")[0];
  window.open(hrefStr);
}})