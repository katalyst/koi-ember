Koi.Store = DS.Store.extend();

Koi.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000',
  buildURL: function(record, suffix) {
    var s = this._super(record, suffix);
    return s + ".json";
  }
});

Koi.ApplicationSerializer = DS.ActiveModelSerializer.extend();
