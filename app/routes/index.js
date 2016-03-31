import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    save3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },

    commentSave3(commentParams) {
      var newComment = this.store.createRecord('comment', commentParams);
      newComment.save();
      this.transitionTo('index');
    }
  }
});
