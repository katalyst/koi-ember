Koi.Product = DS.Model.extend({
  name: DS.attr('string'),
  thumb: DS.attr('string'),
  category: DS.belongsTo('category', { async: true })
});
