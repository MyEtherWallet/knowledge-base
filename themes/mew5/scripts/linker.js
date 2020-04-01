var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

var fs = require('hexo-fs');
var pathFn = require('path');
var util = require('hexo-util');
var stripHTML = util.stripHTML;

var counter = function (content) {
  content = stripHTML(content);
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
  const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
  return [cn, en];
};

hexo.extend.tag.register('read_time', (args, content) => {
  let cn = 300;
  let en = 160;

  let docProcess = function(content){
    var len = counter(content);
    var readingTime = len[0] / cn + len[1] / en;
    return readingTime < 1 ? '1' : parseInt(readingTime, 10);
  }


  const inputType = args.shift();
  if(inputType === 'title'){
    const title = args.shift();
    const Post = hexo.model('Post');
    if (!title) return;
    //
    const post = Post.findOne({title});
    if (!post) return;

    return docProcess(post._content)
  } else if(inputType === 'path'){
    const value = args.shift();
    var path = pathFn.join(hexo.source_dir, value);

    return fs.readFile(path).then(docProcess);
  } else {
    const slug = args.shift();
    const Post = hexo.model('Post');
    if (!slug) return;
    //
    const post = Post.findOne({slug});
    if (!post) return;

    return docProcess(post._content)
  }

}, {async: true});


hexo.extend.tag.register('link_lang', (args, content) => {
  // // var lang = this.page.lang;
  // console.log(args); // todo remove dev item
  return content + '--------' + args;
  const Post = hexo.model('Post');
  // if (!title) return;
  // //
  const post = Post.forEach();
  const value = args.shift();
  var path = pathFn.join(hexo.source_dir, value);
  //
  // return fs.readFile(path).then(docProcess);
});

hexo.extend.tag.register('no_translate', (args, content) => {
  return args.shift();
});

hexo.extend.tag.register('demo', (args, content) => {
return '';
});

