import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return this.store.query('article', {filter: { genre: 'entertainment'}});
     return this.store.query('article', {orderBy: 'genre', equalTo: 'entertainment'});
  },
});
