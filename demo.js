var koa = require('koa');
var app = koa();


app.use(function *() {
    var path = this.path;
    this.body = '<p>我是个html片段</p>';
});


app.listen(3000);