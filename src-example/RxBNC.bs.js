// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Fs from "fs";
import * as Rxjs from "rxjs";

var bnc1 = Rxjs.bindNodeCallback((function (prim, prim$1) {
        Fs.readFile(prim, prim$1);
        return /* () */0;
      }));

var bnc2 = Rxjs.bindNodeCallback((function (prim, prim$1, prim$2) {
        Fs.readFile(prim, prim$1, prim$2);
        return /* () */0;
      }));

var z1 = bnc1("/home/harshal/ub/bs-rx/README.md");

var z2 = bnc2("/home/harshal/ub/bs-rx/README.md", "utf-8");

z1.subscribe((function (y) {
        console.log(y);
        return /* () */0;
      }));

z2.subscribe((function (y) {
        console.log(y);
        return /* () */0;
      }));

export {
  bnc1 ,
  bnc2 ,
  z1 ,
  z2 ,
  
}
/* bnc1 Not a pure module */
