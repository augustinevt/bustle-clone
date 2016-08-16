import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  genre: DS.attr(),
  body: DS.attr(),
  photo: DS.attr()
});
