// travel database creation
const TravelDatabase = {}

// Student table in database
TravelDatabase.cities = []

// Add cities to the student table in the student database
TravelDatabase.cities.push(
   {
       city: “Jacob Smith”,
       year: “El Paso, TX”,
       image: “M”
   },
   {
       city: “Rachael Babcock”,
       year: “Tulsa, OK”,
       image: “F”
   },
   {
       city: “Daniel Beecroft”,
       year: “Kingston Springs, TN”,
       image: “M”
   },
   {
       city: “Deanna Vickers”,
       year: “Dollar bay, MI”,
       image: “F”
   },
   {
       city: “Hayley Landsberg”,
       year: “Coral Springs, FL”,
       image: “F”
   },
   {
       city: “Ronnie Young”,
       year: “Middlesboro, KY”,
       image: “M”
   }
)

localStorage.setItem(
    "TravelDatabase",
    JSON.stringify(TravelDatabase)