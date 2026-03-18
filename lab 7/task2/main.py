from models import Dog, Cat

dog = Dog("Aqtos", 3, 28.5, "Alabai")
cat = Cat("Vasia", 5, 4.2, "white")

animals = [dog, cat]

for animal in animals:
    print(animal)
    print(animal.describe())
    print()

for animal in animals:
    print(animal.name + " says: " + animal.speak())

print()

print(dog.fetch())
print(cat.purr())