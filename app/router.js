import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('entertainment');
  this.route('article', {path: 'article/:article_id'});
  this.route('news');
});

export default Router;
