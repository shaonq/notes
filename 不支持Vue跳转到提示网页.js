(function () {
  var version = ieVer();
  if (version < 9) {
    location.href = '//open.baidu.com/static/common/html/version.html';
  }

  function ieVer() {
    var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf('Opera') > -1;
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera;
    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
      reIE.test(userAgent);
      var IEVersion = parseFloat(RegExp['$1']);
      return Math.floor(IEVersion);
    }

    return Infinity;
  }
})();
