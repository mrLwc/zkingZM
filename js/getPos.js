  function getPos(oBj) {
      var pos = {
          left: 0,
          top: 0
      };
      //先定义一个json存储obj的原始left与top值
      while (oBj) {
          pos.top += oBj.offsetTop;
          //修改json中的top，通过与第一个对有定位的父级
          pos.left += oBj.offsetLeft;
          //修改json中的left，通过与第一个对有定位的父级
          oBj = oBj.offsetParent;
          //然后将对象转为上一级的定位父级
      }
      return pos;
      //返回修改json修改后的值
  }

  function GetStep(elemet, num) {
      var T = getPos(elemet).top
      var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      var oneTop = document.documentElement.scrollTop || document.body.scrollTop;
      var WinT = clientHeight + oneTop;
      var result = WinT > (T + num);
      return result;
  }