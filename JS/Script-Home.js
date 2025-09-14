// HERO SECTION
const slides = [
    {
        img: "../Asset/Picture/tyler-smith-tropforestwolves01-finalrender02.jpg",
        artist: "- TYLER SMITH -"
    },
    {
        img: "../Asset/Picture/vladimir-motsar-uewe324332.jpg",
        artist: "- VLADIMIR MOTSAR -"
    }
];

let currentIndex = 0;
const heroImage1 = document.getElementById('hero-image-1');
const heroImage2 = document.getElementById('hero-image-2');
const artistName = document.getElementById('artist-name');

artistName.innerText = slides[currentIndex].artist;

function showNextSlide() {
    let currentImage = heroImage1.classList.contains('active') ? heroImage1 : heroImage2;
    let nextImage = currentImage === heroImage1 ? heroImage2 : heroImage1;

    const nextSlideIndex = (currentIndex + 1) % slides.length;

    nextImage.src = slides[nextSlideIndex].img;

    currentImage.classList.remove('active');
    nextImage.classList.add('active');

    artistName.style.opacity = 0;
    setTimeout(() => {
        artistName.innerText = slides[nextSlideIndex].artist;
        artistName.style.opacity = 1;
    }, 500);

    currentIndex = nextSlideIndex;
}

setInterval(showNextSlide, 5000);


// CARD
const artworks = [
  {
    img: "../Asset/Picture/nikjas-adam-stop-and-stare-ue5-lumen-by-nikjas-adam.jpg",
    alt: "Stop and Stare",
    artist: "Nickjas Adam",
    title: "Stop and Stare (UE5 Lumen)",
    likes: "100K",
    cardClass: "card1",
    imgClass: "card_img1"
  },
  {
    img: "../Asset/Picture/qing-ying-20250427-093915.jpg",
    alt: "Lost Land, Fairy Fan",
    artist: "Qing Ying",
    title: "Lost Land, Fairy Fan",
    likes: "100K",
    cardClass: "card2",
    imgClass: "card_img2"
  },
  {
    img: "../Asset/Picture/xiaoran-chen-revised-fishhouse.jpg",
    alt: "Stardew Valley Seaside",
    artist: "Xiaoran Chen",
    title: "Stardew Valley Seaside",
    likes: "50K",
    cardClass: "card3",
    imgClass: "card_img3"
  },
  {
    img: "../Asset/Picture/anato-finnstark-web.jpg",
    alt: "Calling for Help",
    artist: "Anato Finnstark",
    title: "Calling for Help",
    likes: "1.4M",
    cardClass: "card4",
    imgClass: "card_img4"
  },
  {
    img: "../Asset/Picture/sina-hayati-red-env-mt-heiei-sina-hayati.jpg",
    alt: "Assassin's Creed Shadows, Mount Hiei",
    artist: "Sina Hayati",
    title: "Assassin's Creed Shadows,<br> Mount Hiei",
    likes: "100K",
    cardClass: "card5",
    imgClass: "card_img5"
  },
  {
    img: "../Asset/Picture/tang-4-23.jpg",
    alt: "最近的速涂",
    artist: "Tang",
    title: "最近的速涂",
    likes: "10K",
    cardClass: "card6",
    imgClass: "card_img6"
  },
  {
    img: "../Asset/Picture/wogan-1.jpg",
    alt: "Daily Painting",
    artist: "Wogan",
    title: "Daily Painting",
    likes: "889K",
    cardClass: "card7",
    imgClass: "card_img7"
  },
  {
    img: "../Asset/Picture/yousaf-ejaz-khan-msv-yousaf-ejaz-khan-conceptart-dlc1-crash-veldt-keyframe.jpg",
    alt: "Avatar: Frontiers of Pandora Keyframes",
    artist: "Yousaf Ejaz Khan",
    title: "Avatar: Frontiers of Pandora <br>Keyframes",
    likes: "679K",
    cardClass: "card8",
    imgClass: "card_img8"
  },
  {
    img: "../Asset/Picture/sylvain-sarrailh-dawnwalk.jpg",
    alt: "Forest of Liars",
    artist: "Sylvain Sarrailh",
    title: "Forest of Liars: the Dawn <br>March",
    likes: "150K",
    cardClass: "card9",
    imgClass: "card_img9"
  },
  {
    img: "../Asset/Picture/aw-anqi-icarus-for-int.jpg",
    alt: "Icarus",
    artist: "Aw Anqi",
    title: "Icarus",
    likes: "2.3M",
    cardClass: "card10",
    imgClass: "card_img10"
  }
];

const featuredContainer = document.getElementById("featured-container");
const section = document.createElement("div");
section.className = "featured-artwork";
section.innerHTML = `<h1>Featured Artwork</h1><div class="gallery"></div>`;

const gallery = section.querySelector(".gallery");

artworks.forEach(art => {
    const card = document.createElement("div");
    card.className = `card ${art.cardClass}`;
    card.innerHTML = `
        <img src="${art.img}" alt="${art.alt}" class="${art.imgClass}">
        <div class="overlay">
        <div class="card-info">
            <div class="artist">${art.artist}</div>
            <div class="title">${art.title}</div>
        </div>
        <div class="likes">
            <span><img src="../Asset/Picture/heart likes.png" alt="<3" class="heart-icon"></span> ${art.likes}
        </div>
        </div>
    `;
    gallery.appendChild(card);
});

featuredContainer.appendChild(section);


// LIKE ICONS
document.querySelectorAll('.heart-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const isClicked = icon.classList.toggle('clicked');
        icon.src = isClicked
        ? '../Asset/Picture/Filled Heart.png'
        : '../Asset/Picture/heart likes.png';
    });
});