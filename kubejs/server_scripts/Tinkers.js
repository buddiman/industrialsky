ServerEvents.recipes(event => {
    event.remove({ output: 'tconstruct:grout' })
    event.remove({ output: 'tconstruct:seared_fuel_gauge' })
    event.remove({ output: 'tconstruct:seared_ingot_gauge' })
    
    
    
    
    event.shaped(Item.of('tconstruct:grout', 3), [
        'ABB',
        'BBC',
        'CCC'
    ], { 
        A : 'minecraft:clay', 
        B : 'minecraft:sand',
        C : 'minecraft:gravel'

    })
    event.shaped(Item.of('tconstruct:seared_fuel_gauge', 1), [
        'ABA',
        'BAB',
        'ABA'
    ], { 
        A : 'tconstruct:seared_brick', 
        B : 'minecraft:tinted_glass',

    })
    event.shaped(Item.of('tconstruct:seared_ingot_gauge', 1), [
        'BAB',
        'ABA',
        'BAB'
    ], { 
        A : 'tconstruct:seared_brick', 
        B : 'minecraft:tinted_glass',

    })










}) 