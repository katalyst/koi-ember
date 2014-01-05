Koi.Router.map(function () {
  this.resource('pages', { path: '/pages' }, function () {
    this.route('page', { path: '/:page_id' });
  });
  this.resource('nav_items', { path: '/nav_items' }, function () {
    this.route('nav_item', { path: '/:nav_item_id' });
  });
  this.resource('news_items', { path: '/news_items' }, function () {
    this.route('news_item', { path: '/:news_item_id' });
  });
});

Koi.NavItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('navItem');
  }
});

Koi.NavItemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('navItem', params.nav_item_id);
  }
});

Koi.NewsItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('newsItem');
  }
});

Koi.NewsItemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('newsItem', params.news_item_id);
  }
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
