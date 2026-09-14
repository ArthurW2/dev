#print("Hello Python world!")
#message = "Hello Python world!"
#print(message)
#message = 'Hello Python Crash Course Reader'
#print(message)

#name = "ada lovelace"
#print(name.title()) #changes string to title case Ada Lovelace
#print(name.upper())
#print(name.lower())

# first_name = 'ada'
# last_name = 'lovelace'
# full_name = f"{first_name} {last_name}"
# print(full_name)

# CONSTANT_VARIABLE = "ALL UPPERCASE"
# MAX_CONNECTIONS = 5000

bicycles = ['trek','cannondale','redline','specialized']
# print(bicycles)
message = f"My first bicycle was a {bicycles[1]}"
# print(message)
bicycles[0] = 'N/a'
# print(bicycles)
bicycles.append('mountain')
# print(bicycles)
bicycles.insert(2, 'trek')
# print(bicycles)
pop_bike = bicycles.pop()
# print(bicycles)
# print(pop_bike)
bicycles.sort(reverse=True)
# print(bicycles)
# print(sorted(bicycles))
# print(len(bicycles))

# for bike in bicycles:
    # print(bike)

# for value in range(1, 5):
    # print(value)

# numbers = list(range(1,6))
# print(numbers)
# even_numbers = list(range(2, 11, 2))
# print(even_numbers)

# digits = [1,2,3,4,5,6,7,8,9,0]
# print(min(digits))
# print(max(digits))
# print(sum(digits))

# squares = [value**2 for value in range(1,11)] # ** = ^
# print(squares)

#slicing a list
players= ['charles','martina','michael','florence','eli']
# print(players[0:3])
# print(players[1:4])
# print(players[:4])
# print(players[2:])
# print(players[-3:]) # - = from the end

new_players = players[:] # copy list
print(new_players)

#tuple is an immutable list, defined with ()
dimensions = (200, 50)
print(dimensions[0])
print(dimensions[1])

# dimensions[0] = 250   # error

revised_foods = []
foods = ('pizza', 'pasta','salad','soup','bread')
for food in foods:
    print(food)
    revised_foods.append(food)
# foods[1] = 'carbonara'

revised_foods.append('vegetables')
new_foods = (revised_foods)
for food in new_foods:
    print(food)