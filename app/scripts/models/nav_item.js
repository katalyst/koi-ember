Koi.NavItem = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  key: DS.attr('string'),
  children: DS.hasMany('navItem', { async: true }),

  formattedURL: function () {
    return '#' + this.get('url');
  }.property('url')
});
