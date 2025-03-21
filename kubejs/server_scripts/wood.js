ServerEvents.recipes(e => {
    e.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' }, r => {
        let ingredients = r.originalRecipeIngredients
        let output = r.originalRecipeResult
        e.shapeless(Item.of(output.id, 1), ingredients[0]).id(r.getOrCreateId())
    })
})