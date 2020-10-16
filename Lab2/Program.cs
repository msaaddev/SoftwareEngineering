using System;

namespace Lab2
{
	class Student
	{
		string studentName;
		string regNumber;
		DateTime dateOfBirth;
		double CGPA;
		string cnic;
		string[] hobbies = new string[15];
		int numOfHobbies;

		static void Main(string[] args)
		{
			Student obj = new Student();
			obj.GetAge();
		}

		public Student()
		{

		}

		public Student(string stdName, string regNum)
		{

		}

		public void SetStudentName()
		{
			Console.WriteLine("What is your name?");
			studentName = Console.ReadLine();
		}

		public void SetRegistrationNum()
		{
			Console.WriteLine("Now may I ask what is your registration number?");
			regNumber = Console.ReadLine();
		}

		public void SetDOB()
		{
			Console.WriteLine("When were you born?");
			dateOfBirth = Convert.ToDateTime(Console.ReadLine());
		}

		public void SetCGPA()
		{
			Console.WriteLine("I know it is a bit daunting but what is your current CGPA?");
			CGPA = Convert.ToDouble(Console.ReadLine());
		}

		public void SetCNIC()
		{
			Console.WriteLine("Now for your CNIC number?");
			cnic = Console.ReadLine();
		}

		public void SetHobbies()
		{
			Console.WriteLine("What else you do? How many hobbies do you have?");
			numOfHobbies = Convert.ToInt32(Console.ReadLine());

			Console.WriteLine("Lovely! Now may I ask what are they?");
			for (int i = 0; i < numOfHobbies; i++)
			{
				hobbies[i] = Console.ReadLine();
			}

		}

		public void Input()
		{
			SetStudentName();
			SetRegistrationNum();
			SetDOB();
			SetCGPA();
			SetCNIC();
			SetHobbies();
		}

		public string GetAge()
		{
			DateTime today = DateTime.Now.Date;
			string date = today.GetDateTimeFormats('d')[0];
			Console.Write(date);

			return "Saad";
		}

		public string GetStatus()
		{
			if (this.CGPA < 2.0) return "Status is Suspended";
			else if (this.CGPA > 2.0 && this.CGPA < 2.5)
				return "Status is Below Average.";
			else if (this.CGPA > 2.5 && this.CGPA < 3.3)
				return "Status is Average.";
			else if (this.CGPA > 3.3 && this.CGPA < 3.5)
				return "Status is Below Good.";
			else
				return "Status is Excellent.";
		}

		public int NumberOfWordsInName()
		{
			string[] word = studentName.Split(" ");
			int counter = 0;

			foreach (string i in word)
			{
				counter++;
			}
			return counter;
		}

		public string GetGender()
		{
			char[] charInCNIC = cnic.ToCharArray();
			int lengthOfCharInCNIC = charInCNIC.Length - 1;
			int lastChar = Convert.ToInt32(charInCNIC[lengthOfCharInCNIC]);

			if (lastChar % 2 == 0)
			{
				return "Female";
			}
			else
			{
				return "Male";
			}

		}

		public void toString()
		{
			Console.WriteLine("Name: Muhammad Saad", "(Contains ", NumberOfWordsInName(), " words.)");
			Console.WriteLine("Registration Number: ", regNumber);
			Console.WriteLine("CGPA: ", CGPA, " ", GetStatus());
			Console.WriteLine("Date of Birth: ", dateOfBirth, " Age is ", GetAge());
			Console.WriteLine("CNIC: ", cnic);
			Console.WriteLine("Gender: ", GetGender());
			Console.Write("Hobbies: ");
			for (int i = 0; i < hobbies.Length; i++)
			{
				int j = i;
				Console.Write(hobbies[i]);
				if (j++ != hobbies.Length)
				{
					Console.Write(", ");
				}
			}
		}

		~Student()
		{
			Console.WriteLine("Destructor Called.");
		}
	}
}
