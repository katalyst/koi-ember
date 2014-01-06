Koi.CurrentNavItemsController = Ember.ArrayController.extend({
});

Koi.initializer({
  name: "loadNavItems",

  initialize: function(container, application) {
    var navItems = container.lookup('store:main').find('navItem');
    var controller = container.lookup('controller:currentNavItems').set('content', navItems);
    container.typeInjection('controller', 'currentNavItems', 'controller:currentNavItems')
  }
});

Koi.Router.map(function () {
  this.resource('pages', { path: '/' }, function () {
    this.route('page', { path: '/:page_id' });
  });
  this.resource('nav_items', { path: '/nav_items' }, function () {
    this.route('nav_item', { path: '/:nav_item_id' });
  });
  this.resource('news_items', { path: '/news_items' }, function () {
    this.route('news_item', { path: '/:news_item_id' });
  });
  this.resource('categories', { path: '/categories' }, function () {
    this.route('category', { path: '/:category_id' });
  });
  this.resource('products', { path: '/products' }, function () {
    this.route('product', { path: '/:product_id' });
  });
});

Koi.NavItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('navItem');
  }
});

Koi.NewsItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('newsItem');
  }
});

Koi.PagesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('page');
  }
});

Koi.CategoriesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('category');
  }
});

Koi.ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('product');
  }
});
