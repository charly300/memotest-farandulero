import {Game} from './../../app/game'
import {Player} from './../../app/player'
import {Router} from 'aurelia-router'
import {inject} from 'aurelia-framework'

@inject(Router, Game)
export class Home {
    constructor(router, game) {
        this.router = router
        this.game = game
    }
    submit() {
        this.game.start(new Player(this.player1), new Player(this.player2))
        this.router.navigate('memo')
    }
}