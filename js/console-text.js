if (window.console) {
    Function.prototype.makeMulti = function () {
      let l = new String(this);
      l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
      return l;
    };
    let string = function () {
      /*
   __     __             _               _____        _ _       
   \ \   / /            | |             |  __ \      (_) |      
    \ \_/ /_ _ _ __   __| | __ _  ___   | |  | | __ _ _| |_   _ 
     \   / _` | '_ \ / _` |/ _` |/ _ \  | |  | |/ _` | | | | | |
      | | (_| | | | | (_| | (_| | (_) | | |__| | (_| | | | |_| |
      |_|\__,_|_| |_|\__,_|\__,_|\___/  |_____/ \__,_|_|_|\__, |
                                                           __/ |
                                                          |___/ 
      */
    };
    console.log(string.makeMulti());
    console.log("欢迎访问%cYandao Daily", "color:#1fc7b6;font-weight:bold");
  }