
student={
    'name':'Maria',
    'course':'SEI',
    'current_week':7
}

name = student['name']

for item_tuple in student.items():
    print(f"key={item_tuple[0]} / value={item_tuple[1]}")

# unpack tuples = destructure each property
for key,value in student.items():
    print(f"key={key} / value={value}")