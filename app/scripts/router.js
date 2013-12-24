Koi.Router.map(function () {
  this.resource('pages', { path: '/pages' }, function () {
    this.route('page', { path: '/:page_id' }, function () {

    });
  });
});

Koi.PagesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('page');
  }
});

Koi.PageRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('page', params.page_id);
  }
});
