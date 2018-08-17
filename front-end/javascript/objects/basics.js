//basic object array
var movies =[
  {
  name: "In Bruges",
  rating: 5,
  watched: false
},
{
  name: "frozen",
  rating: 4.5,
  watched: false
},
{
  name: "Black Hawk Down",
  rating: 5,
  watched: true
},
{
  name: "Mad Max Fury Road",
  rating: 4,
  watched: true
}
]
movies.forEach(function(movie){
  for(i = 0; i < movies.length; i++){
    if(movie.watched){
      console.log("You have watched "+movie.name+" - "+movie.rating+" star's");
    }else{
      console.log("You haven't watched "+movie.name+" - "+movie.rating+" star's");
    };
  }
})
