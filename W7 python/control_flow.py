# floor = "sticky"
# walls = "clean"

# if floor == "sticky":
#     print("clean the floor, it is sticky")
# if walls == "sticky":
#     print("clean the wall")
# else:
#     print("the walls are clean")


color = ""
while True:
    color = input('input something: ')
    if color == 'quit':
        break
    if color=='green':
        print('Go!')
       
    elif color=='yellow':
        print('slow down')
      
    elif color=='red':
        print('stop')
   
    else: print('bogus')




# names = ["Tom", "Deborah", "Murray", "Axel"]

# for name in names:
#     print(name)