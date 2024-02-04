namespace SpriteKind {
    export const Grass = SpriteKind.create()
    export const House = SpriteKind.create()
    export const Lab = SpriteKind.create()
}
function makeMap () {
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
    for (let value2 of tiles.getTilesByType(assets.tile`myTile3`)) {
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
        tiles.placeOnTile(mySprite, value2)
        mySprite.x += 0
        mySprite.y += -32
    }
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
    myPlayer.z = 90
    tiles.placeOnTile(myPlayer, tiles.getTileLocation(32, 32))
    scene.cameraFollowSprite(myPlayer)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Grass, function (sprite, otherSprite) {
    // If player is running through grass, run a chance to start a wild battle with a random pokemon from the route list
    if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.Moving))) {
        timer.throttle("battleChance", 200, function () {
            if (Math.percentChance(15)) {
                sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
                controller.moveSprite(sprite, 0, 0)
                wildCreature = creatures.makeCreatureFromID(
                routeOneIds._pickRandom()
                )
                creatures.creatureBattleCreature(pikachuCreature, wildCreature)
                scene.cameraFollowSprite(myPlayer)
                timer.after(500, function () {
                    controller.moveSprite(sprite, 80, 80)
                    pikachuCreature.hp = 20
                })
                timer.after(7000, function () {
                    sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
                })
            }
        })
        timer.throttle("animateGrass", 160, function () {
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
        })
    }
})
let wildCreature: creatures.Creature = null
let myPlayer: Sprite = null
let mySprite: Sprite = null
let routeOneIds: number[] = []
let pikachuCreature: creatures.Creature = null
// Spawn a pikachu for the players pokemon
pikachuCreature = creatures.makeCreatureFromID(
25
)
// Set the Route 1 Pokemon to be Pidgey, Rattata, and the three starters
routeOneIds = [
16,
16,
7,
19,
19,
1,
4
]
// Make tile map, spawn grass sprites so they can animate and place house sprites on place holder tiles
makeMap()
// Make player and set to animate when moving direction. Also place in middle of tile map and set camera to follow
makePlayer()
