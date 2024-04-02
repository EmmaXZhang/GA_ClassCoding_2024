# floor = "sticky"
# walls = "clean"

# if floor == "sticky":
#     print("clean the floor, it is sticky")
# if walls == "sticky":
#     print("clean the wall")
# else:
#     print("the walls are clean")


# color = ""
# while True:
#     color = input('input something: ')
#     if color == 'quit':
#         break
#     if color=='green':
#         print('Go!')
       
#     elif color=='yellow':
#         print('slow down')
      
#     elif color=='red':
#         print('stop')
   
#     else: print('bogus')



# names = ["Tom", "Deborah", "Murray", "Axel"]

# for name in names:
#     print(name)


# exercise-01 Vowel or Consonant

# Write the code that:
# 1. Prompts the user to enter a letter in the alphabet:
#      Please enter a letter from the alphabet (a-z or A-Z):
# 2. Write the code that determines whether the letter entered is a vowel
# 3. Print one of following messages (substituting the letter for x):
#      - The letter x is a vowel
#      - The letter x is a consonant

# Hints:  Use the in operator to check if a character is in another string
#         For example, if some_char in 'abc':

alphabet = input('Please enter a letter from the alphabet (a-z or A-Z): ')
if alphabet.lower() in 'aeiou':
  print(f"The letter {alphabet} is a vowel")
else:
  print(f"The letter {alphabet} is a consonant")

# exercise-02 Length of Phrase

# Write the code that:
# 1. Prompts the user to enter a phrase:
#      Please enter a word or phrase:
# 2. Print the following message:
#      - What you entered is xx characters long
# 3. Return to step 1, unless the word 'quit' was entered.

phrase = input('Please enter a word or phrase: ')
print(f"what you entered is {len(phrase)} characters long")

# exercise-03 Calculate Dog Years

# Write the code that:
# 1. Prompts the user to enter a dog's age like this:
#      Input a dog's age:
# 2. Calculates the equivalent dog years, where:
#      - The first two years count as 10 years each
#      - Any remaining years count as 7 years each
# 3. Prints the answer in the following format:
#      The dog's age in dog years is xx

# Hints:
# Use the int() function to convert the string returned from input() into an integer
# Start with an if that checks if the age is less than 3

dog_years = float(input("Input a dog's age: "))
if dog_years > 0 and dog_years <= 2:
  print(f"The dog's age in dog years is {dog_years*10}")
else:
  remaining_years = (dog_years - 2) * 7
  print(f"The dog's age in dog years is {remaining_years+20}")

# exercise-04 What kind of Triangle?

# Write the code that:
# 1. Prompts the user to enter the three lengths of a triangle (one at a time):
#      Enter the lengths of three side of a triangle:
#      a:
#      b:
#      c:
# 2. Write the code that determines if the triangle is:
#      equilateral - all three sides are equal in length
#      scalene - all three sides are unequal in length
#      isosceles - exactly two sides are the same length
# 3. Print a message such as:
#      - A triangle with sides of <a>, <b> & <c> is a <type of triangle> triangle

print('Enter the lengths of three side of a triangle:')
triangle_a = input('a:')
triangle_b = input('b:')
triangle_c = input('c:')

if triangle_a == triangle_b and triangle_b == triangle_c:
  print(
      f"A triangle with sides of {triangle_a}, {triangle_b} & {triangle_c} is a equilateral triangle"
  )
elif triangle_a != triangle_b and triangle_a != triangle_c and triangle_b != triangle_c:
  print(
      f"A triangle with sides of {triangle_a}, {triangle_b} & {triangle_c} is a scalene triangle"
  )
else:
  print(
      f"A triangle with sides of {triangle_a}, {triangle_b} & {triangle_c} is a isosceles triangle"
  )