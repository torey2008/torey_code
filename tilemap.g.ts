// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001060a060606060e0606060c0d06060903020002020c0d02020d020202020e040e0200000000000000000000000202040302020000020e020202020200020c04030c0d00000002000c02000000000d0403000000020002000000000000000204030002020200020202000002020002040300020c0e02020e0200020d02000c040d000202020002020200020c020002040c00020d0200020c0200020e0200020403000000000000000000000002020c040e0002020d00020202020c00020e02040300020c02000c020e02020200020d0403000e0200000000000000000000000403020202000202020202020202020e04070c05050b0505050e05050c05050508`, img`
. 2 . 2 . . . . . . . . . . . . 
. 2 . 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 . . . . . . . . . . . 2 . . 
. . 2 . . 2 2 2 2 2 2 2 . 2 . . 
2 2 2 . . . 2 . 2 2 . . . . 2 . 
2 . . . 2 . 2 . . . . . . . 2 . 
2 . 2 2 2 . 2 2 2 . . 2 2 . 2 . 
2 . 2 2 2 2 2 . 2 . 2 2 2 . 2 . 
2 . 2 2 2 . 2 . 2 . 2 2 2 . 2 . 
2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 . 
2 . . . . . . . . . . . 2 2 2 . 
2 . 2 2 2 . 2 2 . 2 2 . 2 2 . . 
2 . 2 2 2 . 2 2 2 2 2 2 . 2 2 2 
2 . 2 2 . . . . . . . . . . . 2 
2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 . 2 . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.swamp.swampTile13,sprites.dungeon.chestClosed,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.dungeon.floorLight1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
