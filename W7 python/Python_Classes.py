class Dog():
    # self -> this
    #  age=0 , give default value 0
    def __init__(self,name,age=0):
        # self.name -> name is the attribute defined
        self.name = name
        self.age = age

        # define a method
        # use self to access attribute created above
    def bark(self):
        print(f"{self.name} says woof!")

        #override the str method
    def __str__(self):
        return f'Dog named {self.name} is {self.age} years old'


spot = Dog("Spot",5)