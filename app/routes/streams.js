import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    return ajax({
      url: 'https://api.twitch.tv/kraken/streams?limit=100',
      type: 'get',
      dataType: 'jsonp'
    });
  }
});
