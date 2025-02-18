public class Dog : Animal
{
    public static new void Eat()
    {
        Console.WriteLine("Dog food");
    }

    public override void MakeSound()
    {
        Console.WriteLine("Bark");
    }
}