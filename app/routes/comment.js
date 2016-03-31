import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
    }
}
});
