class Dog():
    # class attribute
    next_id = 1

    # instance attributes
    # self -> this
    #  age=0 , give default value 0
    def __init__(self,name,age=0):
        # self.name -> name is the attribute defined
        self.name = name
        self.age = age
        self.id = Dog.next_id
        Dog.next_id += 1

        # define a method
        # use self to access attribute created above
    def bark(self):
        print(f"{self.name} says woof!")

        #override the str method
    def __str__(self):
        return f'Dog {self.id} named {self.name} is {self.age} years old'

    @classmethod
    def get_total_dogs(cls):
        return cls.next_id - 1

spot = Dog("Spot",5)


# inheritate from parent class <Dog> to subclass ShowDog
class ShowDog(Dog):
    def __init__(self,name,age=0, total_earnings=0):
        #inherite all attribute from parent class
        Dog.__init__(self,name,age)
        # new attribute
        self.total_earnings = total_earnings

    def add_prize_money(self,amount):
        self.total_earnings += amount
        print(f'{self.name}\'s new total earnings are {self.total_earnings}')

winky = ShowDog('Winky',3,1000)

print(winky)