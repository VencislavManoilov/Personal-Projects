# Ask the user for the ingredients in their fridge
ingredients = input("What ingredients do you have in your fridge? Please list them separated by commas: ")

# Split the ingredients into a list
ingredients_list = ingredients.split(",")

# Create a recipe based on the ingredients
recipe = "Here's a simple recipe you can make using the ingredients you have: \n"
recipe += "1. Heat a pan over medium heat and add 1 tablespoon of oil. \n"
recipe += "2. Once the oil is hot, add the following ingredients to the pan: " + ingredients + "\n"
recipe += "3. Stir the ingredients until they are cooked to your liking. \n"
recipe += "4. Serve the cooked ingredients with rice or pasta on the side. \n"
recipe += "Enjoy your meal!"

# Print the recipe
print(recipe)
