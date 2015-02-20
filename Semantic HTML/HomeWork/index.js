function template(locals) {
var jade_debug = [{ lineno: 1, filename: "index.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "index.jade" });
jade_debug.unshift({ lineno: 1, filename: "index.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "index.jade" });
buf.push("\n<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "index.jade" });
buf.push("\n  <head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "index.jade" });
buf.push("\n    <title>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("jadesdas");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "index.jade" });
buf.push("\n  <body>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</html>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\r\nhtml\r\n    head\r\n        title jadesdas\r\n    body\r\n");
}
}