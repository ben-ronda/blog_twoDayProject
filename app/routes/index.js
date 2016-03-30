import Ember from 'ember';

var posts = [{
  id: 1,
  title: "First Post",
  author: "Jon Snow",
  content: "This is the first post on the blog!",
  image: "http://animaliaz-life.com/image.php?pic=/data_images/dog/dog7.jpg"
}];

export default Ember.Route.extend({
  model() {
    return posts;
  },
});
