import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params) {
    return ajax({
      url: 'https://api.twitch.tv/kraken/streams/' +params.streamer,
      type: 'get',
      dataType: 'jsonp'
    });
  }
});
