Koi.ApplicationRoute = Ember.Route.extend({
});

Koi.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('pages');
  }
});
