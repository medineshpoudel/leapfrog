/* EXERCISE 2
Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.
Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
Name: ABC School of Schoolery, Date: 2000
Name: BCD School of Trickery, Date: 2006

*/
const myObject = {
  name: "Dinesh Poudel",
  address: "Manamaiju, Kathmandu",
  emails: ["dineshpoudel58@gmail.com"],
  interests: ["Coding", "Football", "Gaming"],
  education: [
    {
      name: "Jagat Mandir School",
      date: 2002,
    },
    {
      name: "Kathmandu University",
      date: 2017,
    },
  ],
};

for (let i = 0; i < myObject.education.length; i++) {
  console.log(
    "Name:" +
      myObject.education[i].name +
      "," +
      "Date:" +
      myObject.education[i].date
  );
}
