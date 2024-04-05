
# student={
#     'name':'Maria',
#     'course':'SEI',
#     'current_week':7
# }

# name = student['name']

# for item_tuple in student.items():
#     print(f"key={item_tuple[0]} / value={item_tuple[1]}")

# # unpack tuples = destructure each property
# for key,value in student.items():
#     print(f"key={key} / value={value}")




scores = [
   {
     'name': 'Bob',
     'points': 25  # points the player scored
   }
 ]

scores.append({
    'name':'Mic',
    'points': 30
})

for dic in scores:
    print(f"{dic['name']} scored {dic['points']} points")


def main():
  run = True
  while run:
    menu()
    selection = int(input('Enter a selection: '))

    match selection:
      case 1: contacts.show_contacts(addressbook)
      case 2: contacts.add_contact(addressbook)
      case 3: contacts.delete_contact(addressbook)
      case 4: run = False
      case _: print('\nThat selection is not valid, please try again!\n')

  print('\nGoodbye!\n')
main()