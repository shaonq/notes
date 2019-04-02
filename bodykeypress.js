      !function (a) {
        function b() {
          var a = this.global = {list: [], key: ""};
          return document.body.onkeypress = function (b) {
            var d, e, f, c = b.key;
            if (1 === c.length && (a.key += c), "Enter" === c) for (d in a.list) if (e = a.list[d], f = new RegExp(e.code + "$"), f.test(a.key) && "function" == typeof e.func) return e.func()
          }, this
        }
        b.prototype.on = function (a, b) {
          return this.global.list.push({code: a, func: b}), this
        }, a.BodyKeypress = b
        /* demo new BodyKeypress().on('10086',function(){alert('10086拨打成功')}) */
      }(window);
