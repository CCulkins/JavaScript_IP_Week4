import Ember from 'ember';

export default Ember.Component.extend({

  addNewPost: false,
  actions: {
    newPostFormShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        user: this.get('user'),
        userTime: this.get('userTime'),
        catPic: this.get('catPic'),
        title: this.get('title'),
        message: this.get('message'),
        awards: parseInt(this.get('awards')),
        tldr: this.get('tldr')
      };

      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
