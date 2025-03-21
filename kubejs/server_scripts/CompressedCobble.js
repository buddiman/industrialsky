ServerEvents.recipes(event => {
    event.shaped(
    Item.of('kubejs:double_compressed_cobblestone', 1), //2
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'exdeorum:compressed_cobblestone'
    }
  )  
  event.shaped(
    Item.of('kubejs:triple_compressed_cobblestone', 1), //3
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'kubejs:double_compressed_cobblestone'
    }
  )
  event.shaped(
    Item.of('kubejs:quadruple_compressed_cobblestone', 1), //4
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'kubejs:triple_compressed_cobblestone'
    }
  )
  event.shaped(
    Item.of('kubejs:quintuple_compressed_cobblestone', 1), //5
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'kubejs:quadruple_compressed_cobblestone'
    }
  )
  event.shaped(
    Item.of('kubejs:sextuple_compressed_cobblestone', 1), //6
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'kubejs:quintuple_compressed_cobblestone'
    }
  )
  event.shaped(
    Item.of('kubejs:septuple_compressed_cobblestone', 1), //7
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'kubejs:sextuple_compressed_cobblestone'
    }
  )
  event.shaped(
    Item.of('kubejs:octuple_compressed_cobblestone', 1), //8
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'kubejs:septuple_compressed_cobblestone'
    }
  )
  event.shaped(
    Item.of('kubejs:nonuple_compressed_cobblestone', 1), //9
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'kubejs:octuple_compressed_cobblestone'
    }
  )
  event.shaped(
    Item.of('minecraft:bedrock', 1), //bedrock
    [
        'AAA',
        'AAA', 
        'AAA'
    ],
    {
      A: 'kubejs:nonuple_compressed_cobblestone'
    }
  )
})