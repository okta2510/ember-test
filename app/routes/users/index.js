import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  model() {
    return this.store.findAll('user');
  },

  setupController(controller, model) {
    set(controller, 'users', model);
  }
});
