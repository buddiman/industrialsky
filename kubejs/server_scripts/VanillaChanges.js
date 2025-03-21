ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:furnace' }) 
    event.remove({ output: 'minecraft:chest' }) 
    event.remove({ output: 'minecraft:smithing_table' }) 
    event.remove({ output: 'minecraft:blast_furnace' }) 
    event.remove({ output: 'minecraft:grindstone' }) 
          
    event.shaped(Item.of('minecraft:furnace', 1), [
        'ABA',
        'B B',
        'ABA'
    ], { 
        A : 'kubejs:double_compressed_cobblestone', 
        B : 'kubejs:triple_compressed_cobblestone'
    })
    event.shaped(Item.of('minecraft:chest', 1), [
        'ABA',
        'B B',
        'ABA'
    ], { 
        A : '#minecraft:logs', 
        B : '#minecraft:wooden_slabs'
    })
    event.shaped(Item.of('minecraft:smithing_table', 1), [
        'BB ',
        'AA ',
        'AA '
    ],{
        A : '#minecraft:stripped_woods', 
        B : Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:Iron"}}').strongNBT() 
    })
    event.shaped(Item.of('minecraft:blast_furnace', 1), [
            'BBB',
            'CDC',
            'AAA'
        ], { 
            A : 'kubejs:quadruple_compressed_cobblestone', 
            B : Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:Iron"}}').strongNBT(),
            C : 'minecraft:iron_block',
            D : 'minecraft:furnace'

        })
        event.shaped(Item.of('minecraft:grindstone', 1), [
            '   ',
            'ACA',
            'B B'
        ], { 
            A : 'minecraft:stick', 
            B : '#minecraft:stripped_wood',
            C : 'minecraft:smooth_stone_slab'

        })
        
}) 