/**
 * Search List Helpers 
 */

Template.search.helpers({
  settings: {
    position: 'top',
    limit: 10,
    rules: [
      {
        collection: Games,
        field: 'gameName',
        matchAll: true,
        template: Template.games
      }
    ]
  }
});

Template.search.events({
  'click .go-back': function(evt, template){
    Router.go('/menu');
  },

  'submit form.gameSearch': function(evt, template) {
    evt.preventDefault();
    var gameName = template.find('.searchingGame').value;
    var gameId = Games.findOne({gameName: gameName});

    Session.set('currentGameId', gameId._id);
    Router.go('/game');
  }
});

/**
 * Search Game Helpers
 */

Template.games.helpers({
  ownerLabelClass: function() {
    var player = Meteor.users.findOne(this.createdBy);
    return player.username;
  }
});