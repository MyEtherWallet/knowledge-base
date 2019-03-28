var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;


hexo.extend.tag.register('post_permalink', function (args) {
  const slug = args.shift();
  if (!slug) return this.permalink;

  const post = hexo.model('Post').findOne({slug: slug});
  console.log(post); // todo remove dev item
  if (!post) return;

  return post.permalink;
});