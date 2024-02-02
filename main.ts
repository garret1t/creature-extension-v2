namespace SpriteKind {
    export const Grass = SpriteKind.create()
    export const House = SpriteKind.create()
    export const Lab = SpriteKind.create()
}
function makePlayer () {
    myPlayer = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    characterAnimations.loopFrames(
    myPlayer,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    160,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    myPlayer,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    160,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    myPlayer,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    160,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    myPlayer,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    160,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    controller.moveSprite(myPlayer, 80, 80)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Grass, function (sprite, otherSprite) {
    if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.Moving))) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            5 7 5 7 7 7 6 6 6 6 7 7 7 7 7 7 
            7 7 7 7 7 c 6 7 7 6 c 7 7 1 7 7 
            7 7 7 1 c 6 7 5 7 7 6 c 1 7 1 7 
            7 7 6 6 c c 6 5 5 6 c c 6 6 6 7 
            6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
            6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
            7 c c c 6 6 7 6 6 5 7 6 c c 6 7 
            6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
            6 6 7 7 7 c c c c c c 7 7 7 6 6 
            6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
            c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
            7 c c 5 5 7 6 7 7 6 7 5 5 c c 1 
            7 c 6 7 5 5 6 7 7 6 5 5 7 6 c d 
            7 6 6 7 7 6 6 5 5 6 6 7 7 6 6 6 
            7 7 6 6 6 6 c 6 7 6 c 6 6 6 6 7 
            7 7 5 6 6 c 7 6 6 6 7 c 6 7 7 7 
            `,img`
            7 7 7 7 6 6 7 6 6 6 c 1 d 6 7 7 
            7 7 1 6 6 7 6 c 6 7 6 c c 6 6 7 
            7 1 7 6 6 7 c 6 7 7 c c 6 6 6 7 
            7 7 1 6 7 7 c 6 7 7 c 5 7 7 6 6 
            7 7 c c 5 7 6 6 7 6 6 5 5 7 6 c 
            7 c 6 c 5 5 7 6 c 6 7 7 5 6 c 7 
            6 6 7 6 6 5 5 6 c c 6 6 6 6 6 6 
            6 7 7 5 5 7 6 c c c c 7 7 5 7 6 
            6 7 5 5 7 6 6 c c c c 7 7 5 6 6 
            6 6 7 6 6 7 7 6 c c 6 6 6 6 c 7 
            7 c 6 c 5 5 6 6 c 6 7 7 5 6 6 c 
            7 7 c c 5 7 6 6 7 6 6 5 5 7 6 6 
            7 7 1 6 5 7 c 6 7 7 c 5 7 7 6 6 
            5 7 7 6 6 7 c 6 7 7 c c 6 6 6 5 
            7 7 7 7 6 6 c c 6 7 6 c c 6 7 7 
            5 7 7 7 6 6 7 6 6 6 c 7 7 7 7 7 
            `,img`
            7 7 7 6 c 7 6 6 6 7 c 6 6 5 7 7 
            7 6 6 6 6 c 6 7 6 c 6 6 6 6 7 7 
            6 6 6 7 7 6 6 5 5 6 6 7 7 6 6 7 
            d c 6 7 5 5 6 7 7 6 5 5 7 6 c 7 
            1 c c 5 5 7 6 7 7 6 7 5 5 c c 7 
            c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
            6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
            6 6 7 7 7 c c c c c c 7 7 7 6 6 
            6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
            7 6 c c 6 7 5 6 6 7 6 6 c c c 7 
            6 7 7 7 7 5 5 7 6 7 5 7 7 7 6 6 
            6 6 6 7 5 5 6 5 7 6 5 5 5 6 6 6 
            7 6 6 6 c c 6 5 5 6 c c 6 6 7 7 
            7 1 7 1 c 6 7 7 5 7 6 c 1 7 7 7 
            7 7 1 7 7 c 6 7 7 6 c 7 7 7 7 7 
            7 7 7 7 7 7 6 6 6 6 7 7 7 5 7 5 
            `,img`
            7 7 7 7 7 c 6 6 6 7 6 6 7 7 7 5 
            7 7 6 c c 6 7 6 c c 6 6 7 7 7 7 
            5 6 6 6 c c 7 7 6 c 7 6 6 7 7 5 
            6 6 7 7 5 c 7 7 6 c 7 5 6 1 7 7 
            6 6 7 5 5 6 6 7 6 6 7 5 c c 7 7 
            c 6 6 5 7 7 6 c 6 6 5 5 c 6 c 7 
            7 c 6 6 6 6 c c 6 7 7 6 6 7 6 6 
            6 6 5 7 7 c c c c 6 6 7 5 5 7 6 
            6 7 5 7 7 c c c c 6 7 5 5 7 7 6 
            6 6 6 6 6 6 c c 6 5 5 6 6 7 6 6 
            7 c 6 5 7 7 6 c 6 7 5 5 c 6 c 7 
            c 6 7 5 5 6 6 7 6 6 7 5 c c 7 7 
            6 6 7 7 5 c 7 7 6 c 7 7 6 1 7 7 
            7 6 6 6 c c 7 7 6 c 7 6 6 7 1 7 
            7 6 6 c c 6 7 6 c 6 7 6 6 1 7 7 
            7 7 6 d 1 c 6 6 6 7 6 6 7 7 7 7 
            `],
        100,
        false
        )
        if (Math.percentChance(10)) {
            sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
            creatures.creatureBattleCreature(pikachuCreature, charmanderCreature)
            scene.cameraFollowSprite(myPlayer)
            sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        } else {
            sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
            pause(200)
            sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        }
    }
})
let myPlayer: Sprite = null
let mySprite: Sprite = null
let charmanderCreature: creatures.Creature = null
let pikachuCreature: creatures.Creature = null
let pikachu = sprites.create(img`
    1111111111111111111111111111111111114111
    11111111111111111111111111111111111ff111
    1111f111111ddd1111111111111114f111f1f111
    1111ff11111ddd11111111111114ff111f11f111
    111144f11111dd111111111114f4f111f111f111
    11111f4f11111dd111111114f44f111f11114111
    11111444f11111d1111114f11df111f1111f1111
    111111f1df1111111114f111df111f1111f11111
    11111141ddf4ffffffff41ddf111f1111f111111
    1111111fd4d111111111d4f4411f111111f11111
    1d11111ffd111111111111df1111f411111f1111
    11d1111f411111111111111df1111df4ddddf111
    111dd11fd11111111dd111114111dd11fddddf11
    111111fffd111111dffd1111df11d1111fddf111
    111111f1ff111111f1ff111114111111fddf1111
    11111fffff111111ffff11111df1111fddf11111
    11111f1ff11111111ff11d4d11411111f44f1111
    1111f1d11114f1111111d414d1df11111f44f111
    1111f44111111111111144444114111111f4f111
    1111f4d1d1111111d111d444d11f411111f4f111
    1111fd11411ff11141111d4d11d4f1111f4f1111
    11111f111f4114ff111111111144f411f4f11111
    111111f111111111111111111d444f11f4f11111
    111d114111ddddddd111d11114444f11f4f11111
    1dd11f111dddddddddd14111d444d441f4f11d11
    d11114111dddddddddddf11d444d1df14f11dd11
    1111f111dddddddddddfd111ddd1d4f4f11dd111
    1111fd41ddddddddddf44d41111d444ff1dd1111
    111144f1dddddddddddf44f111d4444f11111111
    111114fddddddddddddd4f11111dddf111111111
    11111114ddddddddddddd111111111f111111111
    1111111fddddddddddddd4d1111111f111111111
    111111114ddddddddddd4d1111111d4111111111
    11111d11f1ddddddddd4d1111111141111111111
    1111dd11411dddddddd411111111df11dd111111
    111dd1111411ddddddd41111111df1111ddd1111
    11ddd1111f4111dddd4fdd1111df111111dddd11
    1111111111f44d4ff41144ddd4f11111111dd111
    1111111111f44441111f4444f111111111111111
    11111111114ff4111114fff41111111111111111
    `, SpriteKind.Creature)
let charmander = sprites.create(img`
    1111111111111111111111111111111111111111
    1111111111111111111111111111111111111111
    1111111111111111111111111111111411111411
    1111111111111111111111111111114411114111
    1111111111111111111111111111114411111111
    11111111144ffff4111111141111144411111111
    11111111f1144444f11111144111144411111411
    1111111f114411144f1111144111144411114411
    111111ff144114f4441111114111144441114411
    111111f444414f1144f111111111144444114111
    1111114f4444ff41f44111111111144444411111
    11111ff444444ff4f4f111111f11144444441111
    1111f4444444f1ff44ff111f1f1f144444444111
    1114444444444f4444f4f11fff4f144444444111
    111f41144444444444f444f114f4114444444111
    111f444444444444f44f4f4114f1114444444411
    111f444444444f4f444ff44444f1114444444411
    1111f4444444ff4f444f444444f1114444444411
    111f1f44444ffff4444444444f11111444444411
    1111ff4ffffff444444444444f11111114444411
    11111f114444411144444444f111111111f44111
    111111f44444111114444444f111111111ff1111
    1111111f444111111144444f111111111f4f1111
    11111111ff4111111144444ff1111111f44f1111
    1111111111f11111111444444f11111f144f1111
    111111111141111114f44f4444f114f144441111
    1111111111f411114f1ff411444ff41444f11111
    111111111f1f4114f1f1f414444444444f111111
    11111111141f4414ff4f4444444f4444f1111111
    111111114111f444f444f444444f44ff11111111
    11111111f1111f4ff4444f44444ff41111111111
    11111111f11144fff44444f4444f111111111111
    111111114111444ff4444444f4f1111111111111
    111111111f1444444f444444ff11111111111111
    1111111111f444444f444444f111111111111111
    111111111114f44444f4444f1111111111111111
    111111111f44444444f1fff11111111111111111
    11111111441144444f4111111111111111111111
    11111111f1f114ff411111111111111111111111
    111111114f4f4111111111111111111111111111
    `, SpriteKind.Creature)
pikachuCreature = creatures.makeCreatureFromSprite(
pikachu,
CreatureType.Bug,
"Pikachu"
)
charmanderCreature = creatures.makeCreatureFromSprite(
charmander,
CreatureType.Bug,
"Charmander"
)
makePlayer()
tiles.setCurrentTilemap(tilemap`level`)
tileUtil.createSpritesOnTiles(assets.tile`myTile1`, img`
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . c 6 7 7 6 c . . . . . 
    . . . . c 6 7 5 7 7 6 c . . . . 
    . . 6 6 c c 6 5 5 6 c c 6 6 . . 
    6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
    6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
    . c c c 6 6 7 6 6 5 7 6 c c 6 . 
    6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
    6 6 7 7 7 c c c c c c 7 7 7 6 6 
    6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
    c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
    . c c 5 5 7 6 7 7 6 7 5 5 c c . 
    . c 6 7 5 5 6 7 7 6 5 5 7 6 c . 
    . 6 6 7 7 6 6 5 5 6 6 7 7 6 6 . 
    . . 6 6 6 6 c 6 7 6 c 6 6 6 . . 
    . . . 6 6 c . 6 6 6 . c 6 . . . 
    `, SpriteKind.Grass)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    mySprite = sprites.create(img`
        dddddddddddd1ddddddddddddddd1ddddddddddddddd1ddddddddddddddd1ddddddddddddddd1d
        ddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
        ddddddddbb44444444444444444444444444444444444444444444444444444444eeccdddddddd
        d1ddddbbdd44444444444444444444444444444444444444444444444444444444eeeecc9ddddd
        ddddbb4ddd44444444444444444444444444444444444444444444444444444444eeeeeeccdd9d
        ddbbdd4ddd444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeeccdd
        bb4ddd4ddd444e4444444444444444444444444444444444444444444444444444eeeeeeeeeecc
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeeeeeee
        dd4ddd4ddd444e4444444444444444444444444444444444444444444444444e44eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeeeeeee
        dd4ddd4ddd444e4444444444444444444444444444444444444444444444444e44eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeeeeeeee
        dd4ddd4ddd444e4444444444444444444444444444444444444444444444444e44eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4ddd44444444444444444444444444444444444444444444444444444444eeeeeeeeeeee
        dd4ddd4deccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeee
        dd4dddcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeee
        dd4dcceeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeecceeee
        ddcceeeccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcceeeccee
        cceeeccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcceeecc
        eeeccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcceee
        eccbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbcce
        ccbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcc
        bc1dddbdddddddddccccccccccccccccccccccddccccccccccccccccccccccdddddddddbdddbcb
        bc1dddbdddddddddc666666666cc666666666cddc666666666cc666666666cdddddddddbdddbcb
        bc1dddbdddddddddc666666666cc666666666cddc666666666cc666666666cdddddddddbdddbcb
        bc1dddbdddddddddc999999999cc999999999cddc999999999cc999999999cdddddddddbdddbcb
        bc1dddbdddddddddc999999999cc999999999cddc999999999cc999999999cdddddddddbdddbcb
        bc1dddbdddddddddc999999999cc999999999cddc999999999cc999999999cdddddddddbdddbcb
        bc1dddbdddddddddc999999999cc999999999cddc999999999cc999999999cdddddddddbdddbcb
        bc1dddbdddddddddcbbbbbbbbbccbbbbbbbbbcddcbbbbbbbbbccbbbbbbbbbcdddddddddbdddbcb
        bc1dddbdddddddddccccccccccccccccccccccddccccccccccccccccccccccdddddddddbdddbcb
        bc1dddbddddddddd1111111111111111111111dd1111111111111111111111dddddddddbdddbcb
        bc1dddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddbcb
        bc1dddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddbcb
        bc1dddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddbcb
        bc1dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbcb
        bc1dddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddbcb
        bc1dddbddddddddccccccccccccccccddddddddddddddddddddddddddddddddddddddddbdddbcb
        bc1dddbddddddddcbbbbbbbbbbbbbbcdddddddddccccccccccccccccccccccdddddddddbdddbcb
        bc1dddbddddddddcbccccccccccccbcdddddddddc666666666cc666666666cdddddddddbdddbcb
        bc1dddbddddddddcec6666666666cecdddddddddc666666666cc666666666cdddddddddbdddbcb
        bc1dddbddddddddcec6666666666c3cdddddddddc999999999cc999999999cdddddddddbdddbcb
        bc1dddbddddddddcec6666666666c3cdddddddddc999999999cc999999999cdddddddddbdddbcb
        bc1dddbddddddddcec9999999999c3cdddddddddc999999999cc999999999cdddddddddbdddbcb
        bc1dddbddddddddcec9999999999c3cdddddddddc999999999cc999999999cdddddddddbdddbcb
        bc1dddbddddddddcecccccccccccc3cdddddddddcbbbbbbbbbccbbbbbbbbbcdddddddddbdddbcb
        bc1dddbddddddddccc333333333333cdddddddddccccccccccccccccccccccdddddddddbdddbcb
        bc1dddbddddddddc1dc44444444444cddddddddd1111111111111111111111dddddddddbdddbcb
        bcddddbddddddddcddceeeeeeeeeeecddddddddddddddddddddddddddddddddddddddddbdddbcb
        bcddddbddddddddccceeeeeeeeeeeecddddddddddddddddddddddddddddddddddddddddbdddbcb
        bcddddbddddddddceeeeeeeeeeeeeecddddddddddddddddddddddddddddddddddddddddbdddbcb
        `, SpriteKind.House)
    tiles.placeOnTile(mySprite, value)
    mySprite.x += 16
    mySprite.y += -32
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    mySprite = sprites.create(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111ddddddb
        dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbb
        dbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbeccccccccccbbb
        dbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbecccccccccccbb
        dbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbeeeeeeeeeebecccccccccccbb
        dbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbeeeeeeeeeebecccccccccccbb
        dbcbbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbccccbbeeeeeeeeeebeccccbbbbbbcbb
        dbcbbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbbbbbcbbbcbbcbbeeeeeeeeeebecbbcbbbbbbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddcebcbbccccccccccbecbecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceecbbccccccccccbeceecbbdddbcbb
        dbcbbddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddceecbbccccccccccbeceecbbdddbcbb
        dbccccccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbccceecbbccccccccccbeceecbbcccbcbb
        dbcbbddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddceecbbccccccccccbeceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceecbbccccccccccbeceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceecbbbbbbbbbbbbbeceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceecbbbbbbbbbbbbbeceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceeceeeeeeeeeeeeeeceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceeceeeeeeeeeeeeeeceecbbdddbcbb
        dbcbbddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddceeceeeeeeeeeeeeeeceecbbdddbcbb
        dbccccccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbccceeceeeeeeeeeeeeeeceecbbcccbcbb
        dbcbbddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddceeceeeeeeeeeeeeeeceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceeceeeeeeeeeeeeeeceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceecccccccccccccccceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceeceeeeeeeeeeeeeeceecbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceceeeeeeeeeeeeeeeececbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddceceeeeeeeeeeeeeeeececbbdddbcbb
        dbcbbddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddcceeeeeeeeeeeeeeeeeeccbbdddbcbb
        dbccccccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbcccccbbbccccccccccccccccccccccccbbcccbcbb
        dbcbbddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddddddbdddbbbbbbbbbbbbbbbbbbbbbbbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcddddbbbbbbbbbbbbbbbbbbbbbbbdddbcbb
        dbcbbddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcdddddddcddddddbcbb
        dbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbb
        dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cdbbbdddddd4d1111d4dddddddd4d1111d4dddddddddddddddddddddddddddddddddddddddd4d1111d4dddddddd4d1111d4ddddddbbbbc
        c1dddddddd411bccb114dddddd411bccb114dddddddddddddddddddddddddddddddddddddd411bccb114dddddd411bccb114dddddddbbc
        c1dddddddbd1c6666c1dbddddbd1c6666c1dbddddddddddddddddddddddddddddddddddddbd1c6666c1dbddddbd1c6666c1dbddddddbbc
        c1bbbdddd41b666666b14dddd41b666666b14dddddddddddddddddddddddddddddddddddd41b666666b14dddd41b666666b14ddddbbbbc
        c1bbbdddd41c666666c14dddd41c666666c14dddddddddddddddddddddddddddddddddddd41c666666c14dddd41c666666c14ddddbbbbc
        c1ddddddd41c999999c14dddd41c999999c14dddddddddddddddddddddddddddddddddddd41c999999c14dddd41c999999c14ddddddbbc
        c1ddddddd41b499994b14dddd41b499994b14dddddddddddddddddddddddddddddddddddd41b499994b14dddd41b499994b14ddddddbbc
        c1bbbddddbd1c4444c1dbddddbd1c4444c1dbddddddddddddddddddddddddddddddddddddbd1c4444c1dbddddbd1c4444c1dbddddbbbbc
        c1bbbddddd411bccb114dddddd411bccb114dddddddddddddddddddddddddddddddddddddd411bccb114dddddd411bccb114dddddbbbbc
        c1ddddddddd4d1111d4dddddddd4d1111d4dddddddddddddddddddddddddddddddddddddddd4d1111d4dddddddd4d1111d4ddddddddbbc
        c1ddddddddddb4444bddddddddddb4444bddddddddddddddddddddddddddddddddddddddddddb4444bddddddddddb4444bdddddddddbbc
        c1bbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbc
        c1bbbddddddddddccccccccccccccccccccccccddddddddddddddddddddddddddddddddccccccccccccccccccccccccddddddddddbbbbc
        c1dddddddddddddcbebbbbbbbbbbbbbbbbbbebcddddddddccccccccccccccccddddddddcbebbbbbbbbbbbbbbbbbbebcddddddddddddbbc
        c1dddddddddddddcbebbbbbbbbbbbbbbbbbbebcddddddddcbbbbbbbbbbbbbbcddddddddcbebbbbbbbbbbbbbbbbbbebcddddddddddddbbc
        c1bbbddddddddddceeeeeeeeeeeeeeeeeeeeeecddddddddcbbbbccccccbbbbcddddddddceeeeeeeeeeeeeeeeeeeeeecddddddddddbbbbc
        c1bbbddddddddddccccccccccccccccccccccccddddddddc666c666666c666cddddddddccccccccccccccccccccccccddddddddddbbbbc
        c1ddddddddddddddc666666666cc666666666cdddddddddc66c66666666c66cdddddddddc666666666cc666666666cdddddddddddddbbc
        c1ddddddddddddddc666666666cc666666666cdddddddddc66c66666666c66cdddddddddc666666666cc666666666cdddddddddddddbbc
        c1bbbdddddddddddc666666666cc666666666cdddddddddc66c66666666c66cdddddddddc666666666cc666666666cdddddddddddbbbbc
        c1bbbdddddddddddc999999999cc999999999cdddddddddc66c99999999c66cdddddddddc999999999cc999999999cdddddddddddbbbbc
        c1ddddddddddddddc999999999cc999999999cdddddddddc666c999999c666cdddddddddc999999999cc999999999cdddddddddddddbbc
        c1ddddddddddddddc444444444cc444444444cdddddddddccc66cccccc6666cdddddddddc444444444cc444444444cdddddddddddddbbc
        c1bbbdddddddddddccccccccccccccccccccccdddddddddc1dc66666666666cdddddddddccccccccccccccccccccccdddddddddddbbbbc
        c1bbbddddddddddd1111111111111111111111dddddddddcddc66666666666cddddddddd1111111111111111111111dddddddddddbbbbc
        c1dddddddddddddddddddddddddddddddddddddddddddddccc666666666666cdddddddddddddddddddddddddddddddddddddddddddddbc
        c1dddddddddddddddddddddddddddddddddddddddddddddc66666666666666cdddddddddddddddddddddddddddddddddddddddddddddbc
        c1dddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddbc
        `, SpriteKind.Lab)
    tiles.placeOnTile(mySprite, value)
    mySprite.x += 0
    mySprite.y += -32
}
myPlayer.z = 90
tiles.placeOnTile(myPlayer, tiles.getTileLocation(32, 32))
scene.cameraFollowSprite(myPlayer)
