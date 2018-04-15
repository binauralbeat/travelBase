// travel database creation
const TravelDatabase = {}

// city table in database
TravelDatabase.cities = []

// Add cities to the student table in the student database
TravelDatabase.cities.push(
   {
       city: "Nehalem Bay OR",
       year: "2003",
       image: "",
       attracions :""
   },
   {
       city: "",
       year: "",
       image: "",
       attracions :""

   },
   {
       city: "",
       year: "",
       image: "",
       attracions :""

   },
   {
       city: "",
       year: "",
       image: "",
       attracions :""
   },
   {
       city: "",
       year: "",
       image: "",
       attracions :""
   },
   {
       city: "",
       year: "",
       image: "",
       attracions :""
       
   }
)

localStorage.setItem(
    "TravelDatabase",
    JSON.stringify(TravelDatabase))