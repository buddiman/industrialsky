ServerEvents.recipes(event => {

    
    event.remove({ output: 'exdeorum:string_mesh' }) 
    event.remove({ output: 'exdeorum:flint_mesh' }) 
    event.remove({ output: 'exdeorum:iron_mesh' }) 
    event.remove({ output: 'exdeorum:golden_mesh' }) 
    event.remove({ output: 'exdeorum:diamond_mesh' }) 

    const A = 'minecraft:string'
    const B = 'minecraft:honeycomb'
    const C = 'exdeorum:string_mesh'
    const D = 'cyclic:flint_block'
    const E = 'productivebees:wax'
    const F = 'exdeorum:flint_mesh'
    const G = 'minecraft:iron_block'
    const H = 'minecraft:gold_block'
    const I = Item.of('productivebees:configurable_honeycomb', 1, {type:"productivebees:gold"})
    const J = 'exdeorum:iron_mesh'
    const K = 'exdeorum:golden_mesh'
    const L = 'minecraft:diamond_block'
    const M = Item.of('productivebees:configurable_honeycomb', 1, {type:"productivebees:diamond"})

    event.shaped(Item.of('exdeorum:string_mesh', 1), [
        'AAA',
        'ABA',
        'AAA'
    ], { A, B })
    event.shaped(Item.of('exdeorum:flint_mesh', 1), [
        'DED',
        'ECE',
        'DED'
    ], { C, D, E})
    event.shaped(Item.of('exdeorum:iron_mesh', 1), [
        'GGG',
        'GFG',
        'GGG'
    ], { F, G })
    event.shaped(Item.of('exdeorum:golden_mesh', 1), [
        'HIH',
        'IJI',
        'HIH'
    ], { H, I, J })
    event.shaped(Item.of('exdeorum:diamond_mesh', 1), [
        'LML',
        'MKM',
        'LML'
    ], { K, L, M })
})


