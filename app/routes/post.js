import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key){
        if (params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('/post/:post_id');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    commentSave3(commentParams){
      console.log(commentParams);
      var newComment = this.store.createRecord('comment', commentParams);
      console.log(commentParams.post);
      var post = commentParams.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return post.save();
      });
      this.transitionTo('post', commentParams.post);
    }
  }
});
