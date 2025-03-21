ServerEvents.recipes(event => {
    event.remove({ output: 'exdeorum:string_mesh' }) 
    event.remove({ output: 'exdeorum:flint_mesh' }) 
    event.remove({ output: 'exdeorum:iron_mesh' }) 
    event.remove({ output: 'exdeorum:golden_mesh' }) 
    event.remove({ output: 'exdeorum:diamond_mesh' }) 

    event.shaped(Item.of('exdeorum:string_mesh', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], { 
        A : 'minecraft:string', 
        B : 'minecraft:honeycomb'
    })

    event.shaped(Item.of('exdeorum:flint_mesh', 1), [
        'DED',
        'ECE',
        'DED'
    ], { 
        C : 'exdeorum:string_mesh', 
        D : 'cyclic:flint_block', 
        E : 'productivebees:wax'
    })

    event.shaped(Item.of('exdeorum:iron_mesh', 1), [
        'GGG',
        'GFG',
        'GGG'
    ], { 
        F : 'exdeorum:flint_mesh', 
        G : 'minecraft:iron_block'
    })

    event.shaped(Item.of('exdeorum:golden_mesh', 1), [
        'HIH',
        'IJI',
        'HIH'
    ], 
    {   H : 'minecraft:gold_block', 
        J : 'exdeorum:iron_mesh',
        I : Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:gold"}}').strongNBT() })

    event.shaped(Item.of('exdeorum:diamond_mesh', 1), [
        'LML',
        'MKM',
        'LML'
    ], { 
        K : 'exdeorum:golden_mesh', 
        L : 'minecraft:diamond_block', 
        M : Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:diamond"}}').strongNBT() 
    })
})


