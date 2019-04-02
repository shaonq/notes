  !function (a) {
    function b() {
      var a = this.g = {list: [], key: ""};
      return document.onkeypress = function (b) {
        var c, d, e, f, g;
        if (b ? f = b.key : (g = window.event.keyCode, f = 13 === g ? "Enter" : String.fromCharCode(g)), 1 === f.length && (a.key += f), "Enter" === f) for (c in a.list) if (d = a.list[c], e = new RegExp(d.code + "$"), e.test(a.key) && "function" == typeof d.func) return a.key = "", d.func()
      }, this
    }

    b.prototype.on = function (a, b) {
      return this.g.list.push({code: a, func: b}), this
    }, a.BodyKeypress = b

    /** Demo： new BodyKeypress().on('10086', function () { alert('10086拨打成功') })  */
  }(window);
