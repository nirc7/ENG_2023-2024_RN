namespace WebApplication1.Models
{
    public static class TimerServices
    {
        //code for timer
        public static void DoSomethingWithtimer(string path)
        {
            Console.WriteLine(path    );
            File.AppendAllText(path + "fileFromGATimer.txt", "hey there time:" + DateTime.Now.ToString() + "\r\n");
        }
    }
}
