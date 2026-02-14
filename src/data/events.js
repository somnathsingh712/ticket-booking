const events = [

  {
    id: 1,
    name: "Coldplay Live Concert",
    date: "2026-03-10T19:00:00",
    venue: "Delhi Stadium",
    price: 2000,
    image: "https://www.hindustantimes.com/ht-img/img/2025/01/18/400x225/coldplay_1737218505576_1737218515778.jpg"
  },
  {
    id: 2,
    name: "Standup Comedy Night",
    date: "2026-04-05T18:00:00",
    venue: "Mumbai Arena",
    price: 800,
    image: "https://hips.hearstapps.com/hmg-prod/images/best-standup-comedy-on-netflix-64d285ff26f83.jpg?crop=1xw:1xh;center,top&resize=640:*"
  },
  {
    id: 3,
    name: "Arijit Singh Live",
    date: "2026-05-12T19:30:00",
    venue: "Bangalore Palace",
    price: 2500,
    image: "https://wallpapers.com/images/featured/arijit-singh-q307hnimzo1z26ct.jpg"
  },
  {
    id: 4,
    name: "Tech Fest 2026",
    date: "2026-06-01T10:00:00",
    venue: "Hyderabad Expo Center",
    price: 500,
    image: "https://www.eventbrite.com/e/_next/image?url=https%3A%2F%2Fimg.evbuc.com%2Fhttps%253A%252F%252Fcdn.evbuc.com%252Fimages%252F1173664576%252F320798794691%252F1%252Foriginal.20251229-192756%3Fcrop%3Dfocalpoint%26fit%3Dcrop%26w%3D600%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26fp-x%3D0.5%26fp-y%3D0.5%26s%3D7ecd6d43d5748822a8ef183904a5e305&w=940&q=75"
  },
  {
    id: 5,
    name: "EDM Night Festival",
    date: "2026-03-25T20:00:00",
    venue: "Goa Beach Arena",
    price: 3000,
    image: "https://i.pinimg.com/736x/5a/19/23/5a1923b7e5d39f52161b0e719f8674c1.jpg"
  },
  {
    id: 6,
    name: "Startup Summit",
    date: "2026-07-15T09:00:00",
    venue: "Delhi Convention Hall",
    price: 1200,
    image: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20241009050437.jpg"
  },
  {
    id: 7,
    name: "Cricket T20 Finals",
    date: "2026-04-20T18:00:00",
    venue: "Wankhede Stadium",
    price: 3500,
    image: "https://i.guim.co.uk/img/media/dd58bb6bc082ded7f9f7edc52dede92d4a0132be/0_153_5177_3107/master/5177.jpg?width=465&dpr=1&s=none&crop=none"
  },
  {
    id: 8,
    name: "Food Carnival",
    date: "2026-08-10T12:00:00",
    venue: "Chandigarh Ground",
    price: 400,
    image: "https://img.freepik.com/free-photo/young-adults-having-block-party_23-2149571486.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 9,
    name: "Bollywood Dance Show",
    date: "2026-05-05T19:00:00",
    venue: "Jaipur Auditorium",
    price: 900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0opcZ1KVnR1BmzD0Izg1_abOqn5oOVE6HA&s"
  },
  {
    id: 10,
    name: "Rock Music Festival",
    date: "2026-09-18T20:00:00",
    venue: "Pune Arena",
    price: 2800,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 11,
    name: "Art Exhibition",
    date: "2026-03-28T11:00:00",
    venue: "Delhi Art Gallery",
    price: 300,
    image: "https://media.istockphoto.com/id/1218961153/photo/art-museum.jpg?s=612x612&w=0&k=20&c=9fK54fu1mjzFjDOSqg_jfrMy4Hkp8vsmImB7rLrbhJs="
  },
  {
    id: 12,
    name: "Fashion Week 2026",
    date: "2026-10-02T18:00:00",
    venue: "Mumbai Fashion Hub",
    price: 4000,
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fbae.hypebeast.com%2Ffiles%2F2025%2F10%2F06%2Fhttps___hypebeast.com_image_2025_10_07_thom-browne-spring-summer-2026-paris-fashion-week-womenswear-runway-0.png?w=1260&cbr=1&q=90&format=png&fit=max"
  },
  {
    id: 13,
    name: "Gaming Expo",
    date: "2026-06-20T10:00:00",
    venue: "Noida Expo Mart",
    price: 700,
    image: "https://www.eideticmarketing.com/wp-content/uploads/WCG_Cosplay_Contents_2_1600x840.jpg"
  },
  {
    id: 14,
    name: "Yoga Wellness Camp",
    date: "2026-04-12T06:00:00",
    venue: "Rishikesh Valley",
    price: 600,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9sS6rJo0HKFnEPtKjvqT_IxxhBH8MEBL9w&s"
  },
  {
    id: 15,
    name: "Business Leadership Summit",
    date: "2026-07-30T09:00:00",
    venue: "Gurgaon Convention Center",
    price: 1800,
    image: "https://www.arabianbusiness.com/wp-content/uploads/sites/3/cloud/2024/03/29/Arabian-Business-Leadership-Summit-2023.jpg"
  },
  {
    id: 16,
    name: "IPL Opening Ceremony",
    date: "2026-03-22T18:30:00",
    venue: "Ahmedabad Stadium",
    price: 5000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUq1xfNlZ-adMQ9bx0ufFYw3EiGNiKpuTzg&s"
  },
  {
    id: 17,
    name: "College Cultural Fest",
    date: "2026-04-08T10:00:00",
    venue: "Lovely Professional University",
    price: 200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmESkqWGl5DFHxneNvvLqIrBys0mpZDYmmQ&s"
  },
  {
    id: 18,
    name: "Photography Workshop",
    date: "2026-05-18T09:00:00",
    venue: "Shimla Hills",
    price: 1000,
    image: "https://images.squarespace-cdn.com/content/v1/593456b837c581fea8474fd6/5eb60cf7-5352-4ff6-84ce-e3eb94dbff0c/photography-students-workshop-taunton.jpg"
  },
  {
    id: 19,
    name: "Marathon 2026",
    date: "2026-11-10T05:00:00",
    venue: "Bangalore City",
    price: 300,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDr9j4zDxIhyzKhS7Sv-0p8TKMbObnpdFPTA&s"
  },
  {
    id: 20,
    name: "New Year DJ Bash",
    date: "2026-12-31T22:00:00",
    venue: "Goa Night Club",
    price: 3500,
    image: "https://www.adgully.com/img/800/201901/dj-suketu-at-imagica.jpg"
  }

];

export default events;
