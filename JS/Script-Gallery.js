// GALLERY
document.addEventListener('DOMContentLoaded', () => {
    const artworks = {
        ancientGreek: [
            {
                title: "Greek Ancient Mountain Temple", 
                artist: "Dekogun", 
                image: "../Asset/Picture/dekogon-studios-highresscreenshot00003.jpg", 
                description: "Took me hours to draw this, but it all pays off cuz this was one of my favorite Greek myths!", 
                comments: [{user: "Angela", text: "So cool!"}]
            },
            {
                title: "No. Regrets", 
                artist: "Jessica Marrubini", 
                image: "../Asset/Picture/jessica-marrubini-04-3.jpg"
            },
            {
                title: "Alexander the Great", 
                artist: "Javier Tercero", 
                image: "../Asset/Picture/javier-tercero-alexander-1-cam2.jpg"
            },
            {
                title: "Ancient Greek Garden", 
                artist: "Jason Peek", 
                image: "../Asset/Picture/jason-peek-highresscreenshot00034.jpg"
            },
            {
                title: "Athena and The Messenger", 
                artist: "George Patsouras", 
                image: "../Asset/Picture/george-patsouras-athenaminerva.jpg"
            },
        ],
        landscape: [
            {
                title: "Landscape",
                artist: "Alena Aenami",
                image: "../Asset/Picture/alena-aenami-revenant3-2.jpg",
                description: "Took me hours to draw this, but it all pays off cuz this was one of my favorite landscape art!", 
                comments: [{user: "Angela", text: "So cool!"}]
            },
            {
                title: "Horizon",
                artist: "Alena Aenami",
                image: "../Asset/Picture/alena-aenami-horizon-1k.jpg"
            },
            {
                title: "Engine City",
                artist: "Dylan Cole",
                image: "../Asset/Picture/dylan-cole-engine-city-the-first-snow.jpg"
            },
            {
                title: "Waters of Heija",
                artist: "Finnian MacManus",
                image: "../Asset/Picture/finnian-macmanus-finnian-macmanus-waters-of-heija-forauction.jpg"
            },
            {
                title: "バンビ (2022 HD リメイク) XD",
                artist: "ZUDartS Lee",
                image: "../Asset/Picture/zudarts-lee-20221128-02s.jpg"
            }
        ],
        digital2D: [
            {
                title: "Offering",
                artist: "Anato Finnstark",
                image: "../Asset/Picture/anato-finnstark-web-petit.jpg",
                description: "Took me hours to draw this, but it all pays off cuz this was one of my favorite art!", 
                comments: [{user: "Angela", text: "So cool!"}]
            },
            {
                title: "Galadriel Elf LOTR Saga",
                artist: "Anthony Catillaz",
                image: "../Asset/Picture/anthony-catillaz-gz235hz2.jpg"
            },
            {
                title: "Spider -Man vs Rain",
                artist: "Anthony Catillaz",
                image: "../Asset/Picture/anthony-catillaz-artico-luminos-design-a-black-spider-man-looking-over-the-rainy-fd96ccx-e05f-460e-abcc-4a1462881264.jpg"
            },
            {
                title: "Nazgûl 9",
                artist: "Anato Finnstark",
                image: "../Asset/Picture/anato-finnstark-web-petit (1).jpg"
            },
            {
                title: "KDA 'MORE'",
                artist: "Kevin Decatoire",
                image: "../Asset/Picture/kevin-decatoire-dmp-squareformat-04-upscale.jpg" 
            }
        ],
        
    };

    const gallery = document.getElementById('gallery');
    const tagLinks = document.querySelectorAll('.tag-link');
    const artworkModal = document.getElementById('artworkModal'); // The whole modal container
    const modalArtworkImage = document.getElementById('modalArtworkImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalArtist = document.getElementById('modalArtist');
    const modalDescription = document.getElementById('modalDescription');
    const modalComments = document.getElementById('modalComments');
    const closeBtn = document.querySelector('.close-btn'); // Get the close button

    function renderGallery(tag) {
        gallery.innerHTML = '';

        artworks[tag].forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="overlay">
                    <div class="card-info">
                        <div class="artist">${item.artist}</div>
                        <div class="title">${item.title}</div>
                    </div>
                    <div class="likes">
                        <span><img src="../Asset/Picture/heart likes.png" alt="<3" class="heart-icon"></span> 100K
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                openModal(
                    item.image,
                    item.title,
                    item.artist,
                    item.description || "No description available.",
                    item.comments || []
                );
            });

            gallery.appendChild(card);
        });

        // LIKE ICONS
        document.querySelectorAll('.heart-icon').forEach(icon => {
            icon.addEventListener('click', (event) => {
                event.stopPropagation();
                
                const isClicked = icon.classList.toggle('clicked');
                icon.src = isClicked
                    ? '../Asset/Picture/Filled Heart.png'
                    : '../Asset/Picture/heart likes.png';
            });
        });
    }

    tagLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            tagLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const selectedTag = link.getAttribute('data-tag');
            renderGallery(selectedTag);
        });
    });

    renderGallery('ancientGreek');

    function openModal(image, title, artist, description, comments) {
        modalArtworkImage.src = image;
        modalArtworkImage.alt = title;
        modalTitle.textContent = title;
        modalArtist.textContent = artist;
        modalDescription.textContent = description;

        modalComments.innerHTML = '';

        if (Array.isArray(comments) && comments.length > 0) {
            comments.forEach(c => {
                const commentDiv = document.createElement("div");
                commentDiv.classList.add("comment");
                commentDiv.innerHTML = `
                    <img src="../Asset/Picture/housekeeper.png" alt="${c.user}" class="comment-avatar">
                    <div class="comment-content">
                        <strong>${c.user}</strong>
                        <p>${c.text}</p>
                    </div>
                    <img src="../Asset/Picture/heart likes.png" class="comment-like" alt="like">
                `;
                modalComments.appendChild(commentDiv);
            });
        }

        artworkModal.style.display = "flex";
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        artworkModal.style.display = "none";
        document.body.classList.remove("modal-open");
    }

    closeBtn.addEventListener('click', closeModal);
});