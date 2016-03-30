import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('post.title'),
        author: this.get('post.author'),
        content: this.get('post.content'),
        image: this.get('post.image')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
