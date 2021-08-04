scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.playMelody("B G - C5 - B - D ", 120)
    game.over(true)
})
scene.setBackgroundColor(1)
music.baDing.play()
let mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f c a e 4 4 4 4 e a c f . . 
    . . f a a a a a a a a a a f . . 
    . f a a e c a e e a c e a a f . 
    . f a a f f e e e e f f a a f . 
    . f c c f b f e e f b f c c f . 
    . f c c e 1 f 4 4 f 1 e c c f . 
    f f c c f 4 4 2 2 4 4 f c c f f 
    f c c f f f e e e e f f f c c f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile13)
scene.cameraFollowSprite(mySprite)
