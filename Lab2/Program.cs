/* ==============================================
        Author: Muhammad Saad
        Section: A
        Registration Number: 2018-CS-7
        Programming Language: C#
=================================================*/

using System;

namespace Lab2
{
	class Student
	{
		// class data members
		string studentName;
		string regNumber;
		DateTime dateOfBirth;
		double CGPA;
		string cnic;
		string[] hobbies = new string[15];
		int numOfHobbies;
		bool flag = true;

		/**
		*
		* main function where everything is called
		*/
		static void Main(string[] args)
		{
			Student obj1 = new Student();
			Student obj2 = new Student("Muhammad Saad", "2018-CS-7");
			obj1.Input();
			obj1.toString();
			obj2.Input();
			obj2.toString();
		}

		/**
		*
		* default constructor
		*/
		public Student()
		{
			Console.WriteLine("******** Default Constructor Called. ********\n\n");
		}

		/**
		*
		* @param {stdName} - student Name
		* @param {regNum} - student registeration number
		*/
		public Student(string stdName, string regNum)
		{
			studentName = stdName;
			while (!ValidateName(studentName))
			{
				Console.Write("INVALID NAME: Please enter a name with only alphabets: ");
				studentName = Console.ReadLine();
			}

			regNumber = regNum;
			while (!ValidateRegNum(regNumber))
			{
				Console.Write("INVALID REGISTRATION NO: Please enter registration number again: ");
				regNumber = Console.ReadLine();
			}

			flag = false;
		}

		/**
		*
		*
		* @param {name} - student name to validate
		*/
		public bool ValidateName(string name)
		{
			for (int i = 0; i < name.Length; i++)
			{
				if (name[i] == '0' || name[i] == '1' ||
					name[i] == '2' || name[i] == '3' ||
					name[i] == '4' || name[i] == '5' ||
					name[i] == '6' || name[i] == '7' ||
					name[i] == '8' || name[i] == '9')
				{
					return false;
				}
			}
			return true;
		}

		/**
		*
		*
		* @param {regNum} - student registration number to validate
		*/
		public bool ValidateRegNum(string regNum)
		{
			for (int i = 0; i < 4; i++)
			{
				if (regNum[i] != '0' && regNum[i] != '1' &&
					regNum[i] != '2' && regNum[i] != '3' &&
					regNum[i] != '4' && regNum[i] != '5' &&
					regNum[i] != '6' && regNum[i] != '7' &&
					regNum[i] != '8' && regNum[i] != '9')
				{
					return false;
				}
			}

			if (regNum[4] != '-')
			{
				return false;
			}

			for (int i = 5; i < 7; i++)
			{
				if (regNum[i] == '0' || regNum[i] == '1' ||
					regNum[i] == '2' || regNum[i] == '3' ||
					regNum[i] == '4' || regNum[i] == '5' ||
					regNum[i] == '6' || regNum[i] == '7' ||
					regNum[i] == '8' || regNum[i] == '9')
				{
					return false;
				}
			}

			if (regNum[7] != '-')
			{
				return false;
			}

			for (int i = 8; i < regNum.Length; i++)
			{
				if (regNum[i] != '0' && regNum[i] != '1' &&
					regNum[i] != '2' && regNum[i] != '3' &&
					regNum[i] != '4' && regNum[i] != '5' &&
					regNum[i] != '6' && regNum[i] != '7' &&
					regNum[i] != '8' && regNum[i] != '9')
				{
					return false;
				}
			}
			return true;
		}

		/**
		*
		*
		* @param {dob} - student date of birth to validate
		*/
		public bool ValidateDOB(string dob)
		{
			string[] sepDateOfBirth = dob.Split('/');
			int dobMonth = Convert.ToInt32(sepDateOfBirth[0]);
			int dobDate = Convert.ToInt32(sepDateOfBirth[1]);
			int dobYear = Convert.ToInt32(sepDateOfBirth[2]);

			if (dobYear > 2005)
			{
				return false;
			}
			else if (dobYear < 1990)
			{
				return false;
			}

			return true;
		}

		/**
		*
		*
		* @param {nym} - student CGPA to validate
		*/
		public bool ValidateCGPA(double num)
		{
			if (num < 0 || num > 4)
			{
				return false;
			}
			return true;
		}

		/**
		*
		*
		* @param {temp} - student CNIC number to validate
		*/
		public bool ValidateCNIC(string temp)
		{
			if (temp.Length != 13)
			{
				return false;
			}
			return true;
		}

		/**
		*
		*
		* setting student name
		*/
		public void SetStudentName()
		{
			Console.Write("What is your name? ");
			studentName = Console.ReadLine();

			while (!ValidateName(studentName))
			{
				Console.Write("INVALID NAME: Please enter a name with only alphabets: ");
				studentName = Console.ReadLine();
			}
		}

		/**
		*
		*
		* setting student registration number
		*/
		public void SetRegistrationNum()
		{
			Console.Write("Now may I ask what is your registration number? (2010-CS-414) ");
			regNumber = Console.ReadLine();

			while (!ValidateRegNum(regNumber))
			{
				Console.Write("INVALID REGISTRATION NO: Please enter registration number again: ");
				regNumber = Console.ReadLine();
			}
		}

		/**
		*
		*
		* setting student date of birth
		*/
		public void SetDOB()
		{
			Console.Write("When were you born? ");
			string temp = Console.ReadLine();

			while (!ValidateDOB(temp))
			{
				Console.Write("INVALID DOB: Please enter a DOB between Dec 31, 1990 & Jan 1, 2005: ");
				temp = Console.ReadLine();
			}

			dateOfBirth = Convert.ToDateTime(temp);
		}

		/**
		*
		*
		* setting student CGPA
		*/
		public void SetCGPA()
		{
			Console.Write("I know it is a bit daunting but what is your current CGPA? ");
			CGPA = Convert.ToDouble(Console.ReadLine());
			while (!ValidateCGPA(CGPA))
			{
				Console.Write("INVALID CGPA: Please enter CGPA between 0 & 4: ");
				CGPA = Convert.ToDouble(Console.ReadLine());
			}
		}

		/**
		*
		*
		* setting student CNIC
		*/
		public void SetCNIC()
		{
			Console.Write("Now for your CNIC number? ");
			cnic = Console.ReadLine();
			while (!ValidateCNIC(cnic))
			{
				Console.Write("INVALID CNIC: Please enter a valid CNIC: ");
				cnic = Console.ReadLine();
			}
		}

		/**
		*
		*
		* setting student hobbies
		*/
		public void SetHobbies()
		{
			Console.Write("What else you do? How many hobbies do you have? ");
			numOfHobbies = Convert.ToInt32(Console.ReadLine());

			Console.WriteLine("Lovely! Now may I ask what are they? ");
			for (int i = 0; i < numOfHobbies; i++)
			{
				hobbies[i] = Console.ReadLine();
			}

		}

		/**
		*
		*
		* return {studentName} - student name
		*/
		public string GetStudentName()
		{
			return studentName;
		}

		/**
		*
		*
		* return {regNumber} - student registration number
		*/
		public string GetRegistrationNum()
		{
			return regNumber;
		}

		/**
		*
		*
		* return {dateOfBirth} - student DOB
		*/
		public DateTime GetDOB()
		{
			return dateOfBirth;
		}

		/**
		*
		*
		* return {CGPA} - student CGPA
		*/
		public double GetCGPA()
		{
			return CGPA;
		}

		/**
		*
		*
		* return {cnic} - student cnic
		*/
		public string GetCNIC()
		{
			return cnic;
		}

		/**
		*
		*
		* return {hobbies} - student hobbies
		*/
		public string[] GetHobbies()
		{
			return hobbies;
		}

		/**
		*
		*
		* calling all setter functions inside this function
		*/
		public void Input()
		{
			if (flag)
			{
				SetStudentName();
				SetRegistrationNum();
			}
			else
			{
				Console.WriteLine("******** Parameterized Constructor has been called ********\n\n");

			}

			SetDOB();
			SetCGPA();
			SetCNIC();
			SetHobbies();
		}

		/**
		*
		*
		* calculate total age of the student
		*/
		public string GetAge()
		{
			DateTime today = DateTime.Now.Date;
			string date = today.GetDateTimeFormats('d')[0];

			string[] sepTodayDate = date.Split('/');
			int currentMonth = Convert.ToInt32(sepTodayDate[0]);
			int currentDate = Convert.ToInt32(sepTodayDate[1]);
			int currentYear = Convert.ToInt32(sepTodayDate[2]);

			string dateOfBirthInString = Convert.ToString(dateOfBirth);
			char[] separator = { '/', ' ' };
			string[] sepDateOfBirth = dateOfBirthInString.Split(separator);
			int dobMonth = Convert.ToInt32(sepDateOfBirth[0]);
			int dobDate = Convert.ToInt32(sepDateOfBirth[1]);
			int dobYear = Convert.ToInt32(sepDateOfBirth[2]);

			int tempYearCalculation = currentYear - dobYear;
			int tempMonthCalculation = currentMonth - dobMonth;
			int monthsAfterLatestDOB;
			string month = "";

			if (tempMonthCalculation < 0)
			{
				tempYearCalculation--;
				monthsAfterLatestDOB = 12 + tempMonthCalculation;
			}
			else
			{
				monthsAfterLatestDOB = tempMonthCalculation;
			}

			currentDate = currentDate - dobDate;

			switch (dobMonth)
			{
				case 1:
					month = "Januray";
					break;
				case 2:
					month = "February";
					break;
				case 3:
					month = "March";
					break;
				case 4:
					month = "April";
					break;
				case 5:
					month = "May";
					break;
				case 6:
					month = "June";
					break;
				case 7:
					month = "July";
					break;
				case 8:
					month = "August";
					break;
				case 9:
					month = "September";
					break;
				case 10:
					month = "October";
					break;
				case 11:
					month = "November";
					break;
				case 12:
					month = "December";
					break;
			}

			string DOB = month + " " + dobDate + ", " + dobYear + " (Age is " + tempYearCalculation + " years " + monthsAfterLatestDOB + " months and " + currentDate + " days)";

			return DOB;
		}

		/**
		*
		*
		* calculates student status based on their CGPA
		*/
		public string GetStatus()
		{
			if (this.CGPA < 2.0) return "Suspended";
			else if (this.CGPA > 2.0 && this.CGPA < 2.5)
				return "Below Average";
			else if (this.CGPA > 2.5 && this.CGPA < 3.3)
				return "Average";
			else if (this.CGPA > 3.3 && this.CGPA < 3.5)
				return "Below Good";
			else
				return "Excellent";
		}

		/**
		*
		*
		* calculate total number of words in student name
		*/
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

		/**
		*
		*
		* figure out student's gender
		*/
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

		/**
		*
		*
		* print all the student's data on the screen
		*/
		public void toString()
		{
			Console.WriteLine("\n\nName: " + studentName + " (Contains " + NumberOfWordsInName() + " words)");
			Console.WriteLine("Registration Number: " + regNumber);
			Console.WriteLine("CGPA: " + CGPA + " " + GetStatus());
			Console.WriteLine("Date of Birth: " + GetAge());
			Console.WriteLine("CNIC: " + cnic);
			Console.WriteLine("Gender: " + GetGender());
			Console.Write("Hobbies: ");

			for (int i = 0; i < numOfHobbies; i++)
			{
				int j = i;
				j++;
				Console.Write(hobbies[i]);
				if (j != numOfHobbies)
				{
					Console.Write(", ");
				}
			}
			Console.Write("\n\n");
		}

		/**
		*
		*
		* destructor
		*/
		~Student()
		{
			Console.WriteLine("Destructor Called.");
		}
	}
}
