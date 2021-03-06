import Ember from 'ember';

export default Ember.Component.extend({
  fullUserInfo: Ember.computed('post.user', 'post.userTime', function() {
    return this.get('post.user') + ' - (' + this.get('post.userTime') + ')';
  }),
  fullPostDisplaying: false,
  editPostForm: false,
  bookmarked: Ember.inject.service(),


  actions: {
    fullPostDisplays: function() {
      this.set('fullPostDisplaying', true);
    },

    fullPostNoDisplay: function() {
      this.set('fullPostDisplaying', false);
    },

    edit(post, params) {
      this.sendAction('edit', post, params);
    },

    delete(post) {
      if (confirm('Are you sure you would like to delete this post permanently?')) {
        this.sendAction('deletePost', post);
      }
    },

    add(params) {
      this.sendAction('add', params);
    },

    bookmark(item) {
      this.get('bookmarked').add(item);
    }
  }
});
