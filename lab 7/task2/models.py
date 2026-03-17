class Animal:

    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def speak(self):
        return "..."

    def describe(self):
        return self.name + " is " + str(self.age) + " years old and weighs " + str(self.weight) + " kg."

    def __str__(self):
        return "Animal: " + self.name


class Dog(Animal):

    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self):
        return self.name + " fetches the ball!"

    def __str__(self):
        return "Dog: " + self.name + ", breed: " + self.breed


class Cat(Animal):

    def __init__(self, name, age, weight, color):
        super().__init__(name, age, weight)
        self.color = color

    def speak(self):
        return "Meow!"

    def purr(self):
        return self.name + " is purring..."

    def __str__(self):
        return "Cat: " + self.name + ", color: " + self.color