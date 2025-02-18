public class Cat : Animal
{
    public static new void Eat()
    {
        Console.WriteLine("Cat food");
    }
    public override void MakeSound()
    {
        Console.WriteLine("Meow");
    }
}