List<Animal> animals = new List<Animal>();
animals.Add(new Dog());
animals.Add(new Cat());

foreach (Animal animal in animals)
{
    animal.MakeSound();
    animal.Eat();
}