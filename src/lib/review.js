const reviews = [
  {
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b",
    name: "Nadia",
    rating: 5,
    text: "Lezat banget, ga nyesel coba!",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    name: "Rian",
    rating: 4,
    text: "Gak kecewa, rasanya enak.",
  },
  {
    image: "https://listovative.com/wp-content/uploads/2023/08/Food.jpg",
    name: "Dinda",
    rating: 3,
    text: "Lumayan, tapi kurang gurih.",
  },
  {
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505",
    name: "Fajar",
    rating: 4,
    text: "Mantep, rasanya pas!",
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    name: "Alya",
    rating: 5,
    text: "Wah, ini sih favoritku!",
  },
  {
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    name: "Danu",
    rating: 3,
    text: "Biasa aja, tapi oke lah.",
  },
  {
    image:
      "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
    name: "Cinta",
    rating: 4,
    text: "Enak, tapi sedikit asin.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqZY2q_4LpCwRmvGONLcklCteU-0otulUOQ&s",
    name: "Rafi",
    rating: 5,
    text: "Perfect, sesuai ekspektasi!",
  },
  {
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
    name: "Zahra",
    rating: 4,
    text: "Nyobain, dan gak menyesal.",
  },
  {
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
    name: "Ardi",
    rating: 3,
    text: "Rasanya oke, cuma porsi kurang.",
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    name: "Maya",
    rating: 4,
    text: "Makanan enak, pelayanan juga bagus.",
  },
  {
    image:
      "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1631868970/131631868969321.jpg",
    name: "Tama",
    rating: 5,
    text: "Mantap, rekomendasi buat semua!",
  },
  {
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/170203122442-new-mexican-flat-enchiladas.jpg?q=w_2048,h_1356,x_0,y_0,c_fill",
    name: "Rina",
    rating: 3,
    text: "Cukup enak, tapi bisa lebih baik.",
  },
  {
    image:
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/e6980c61-d073-4b72-a958-72ce062b59ce-us_favourite_foods_burger.jpg",
    name: "Bagas",
    rating: 4,
    text: "Suka banget, rasanya pas!",
  },
  {
    image:
      "https://media.cntraveler.com/photos/586eb8449d2b725a71af8123/16:9/w_2580,c_limit/hot-dogs-gene-and-judes-photo-credit-Nick-Holmes.jpg",
    name: "Ayu",
    rating: 5,
    text: "Wow, luar biasa enak!",
  },
  {
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    name: "Dewi",
    rating: 4,
    text: "Enak, tapi agak mahal.",
  },
  {
    image:
      "https://oishipedia.com/wp-content/uploads/2023/12/kelly-visel-MIMgqOQLnOc-unsplash-scaled.jpg",
    name: "Fikri",
    rating: 3,
    text: "Oke, tapi porsinya kecil.",
  },
  {
    image:
      "https://i0.wp.com/billypenn.com/wp-content/uploads/2016/07/halalcart-credit-marcosespinoza-02.jpg?resize=780%2C520&ssl=1",
    name: "Bella",
    rating: 5,
    text: "Favoritku! Bakal beli lagi.",
  },
  {
    image:
      "https://cdn.vox-cdn.com/thumbor/ECdFP3bj_aiMmt9xvnUORzh6Z6g=/0x0:1440x1440/1200x900/filters:focal(605x605:835x835)/cdn.vox-cdn.com/uploads/chorus_image/image/70653387/104739535_1166343137066034_7773120124122957295_n.7.jpeg",
    name: "Irfan",
    rating: 4,
    text: "Enak banget, tapi bisa lebih pedas.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsMnEsL8dXd6nDUJbkStzbVwBkugKZ9MxNQ&s",
    name: "Lala",
    rating: 5,
    text: "Rasanya luar biasa, nggak nyesel coba!",
  },
];

export function getReview() {
  const randomReview = [];

  while (randomReview.length < 3) {
    const index = Math.floor(Math.random() * reviews.length);
    const selectedReview = reviews[index];

    if (!randomReview.includes(selectedReview)) {
      randomReview.push(selectedReview);
    }
  }

  return randomReview;
}
