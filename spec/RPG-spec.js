import {Game} from './../js/RPG.js';

describe('Game', function() {
  it('should test whether a ATK Boss is true', function() {
    var gameCheck = new Game()
    expect(gameCheck.AtkBoss(10,5)).toEqual(5)
  });
});
