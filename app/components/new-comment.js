import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
  commentFormShow() {
    this.set('addNewComment', true);
  },

  commentSave1() {
    var commentParams =  {
      name: this.get('name'),
      detail: this.get('detail'),
      post: this.get('post')
    };
    this.set('addNewComment', false);
    this.sendAction('commentSave2', commentParams);
    }
  }
});
