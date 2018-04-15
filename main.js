// travel database creation
const TravelDatabase = {}

// Student table in database
TravelDatabase.cities = []

// Add cities to the student table in the student database
TravelDatabase.cities.push(
   {
       city: “Nehalem Bay, OR”,
       year: “2003”,
       image: “src=”
       "top five":
   },
   {
       city: “”,
       year: “”,
       image: “F”
   },
   {
       city: “”,
       year: “”,
       image: “”
   },
   {
       city: “”,
       year: “”,
       image: “”
   },
   {
       city: “”,
       year: “”,
       image: “F”
   },
   {
       city: “”,
       year: “”,
       image: “”
   }
)

localStorage.setItem(
    "TravelDatabase",
    JSON.stringify(TravelDatabase)