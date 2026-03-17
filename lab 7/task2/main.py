from models import Dog, Cat

dog = Dog("Rex", 3, 28.5, "Labrador")
cat = Cat("Whiskers", 5, 4.2, "white")

animals = [dog, cat]

print("=== All animals ===")
for animal in animals:
    print(animal)
    print(animal.describe())
    print()

print("=== Who says what? ===")
for animal in animals:
    print(animal.name + " says: " + animal.speak())

print()

print("=== Unique methods ===")
print(dog.fetch())
print(cat.purr())