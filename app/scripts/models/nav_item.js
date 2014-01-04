Koi.NavItem = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  children: DS.hasMany('navItem', { async: true })
});
