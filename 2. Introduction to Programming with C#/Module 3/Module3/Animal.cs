public class Animal : IAnimal
{
    public void Eat()
    {
        Console.WriteLine("Some generic animal food.");
    }

    public virtual void MakeSound()
    {
        Console.WriteLine("Some generic animal sounds");
    }
}