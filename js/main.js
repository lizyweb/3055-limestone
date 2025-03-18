document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });

  // Spinner
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();

  (function ($) {
    
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#robertoNav').classyNav();
    }

    })(jQuery);

});

class readMore {
    constructor() {
        this.content = '.readmore__content';
        this.buttonToggle = '.readmore__toggle';
    }

    bootstrap() {
        this.setNodes();
        this.init();
        this.addEventListeners();
    }

    setNodes() {
        this.nodes = {
            contentToggle: document.querySelector(this.content)
        };
        this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
    }

    init() {
        const { contentToggle } = this.nodes;
        this.stateContent = contentToggle.innerHTML;

        contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`;
    }

    addEventListeners() {
        this.buttonToggle.addEventListener('click', this.onClick.bind(this))
    }

    onClick(event) {
        const targetEvent = event.currentTarget;
        const { contentToggle } = this.nodes

        if (targetEvent.getAttribute('aria-checked') === 'true') {
            targetEvent.setAttribute('aria-checked', 'false')
            contentToggle.innerHTML = this.stateContent;
            this.buttonToggle.innerHTML = 'Read less...'

        } else {
            targetEvent.setAttribute('aria-checked', 'true')
            contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`
            this.buttonToggle.innerHTML = 'Read more...'
        }
    }
}

const initReadMore = new readMore();
initReadMore.bootstrap()

document.addEventListener("DOMContentLoaded", function() {
const aboutImgs = document.querySelectorAll(".about-img");
const largeImgContainer = document.querySelector(".large-img-container");
const largeImg = document.querySelector(".large-img");
const closeBtn = document.querySelector(".close-btn");
const overlayHeading = document.querySelector(".overlay-heading");
const overlayContent = document.querySelector(".overlay-content");
const aboutSec = document.querySelector(".about-sec");
const displaySecoundaryImage = document.querySelector(".display-secoundary-image");

const overlayData = [
    {
        src: "img/hall-3 2.png",
        heading: "Craftsmanship :",
        content: "Embark on a journey of architectural ingenuity at Limestone, where innovation and timeless elegance redefine modern living. Our architecture blends luxury and functionality to craft spaces that inspire and delight. We pride ourselves on the versatility and sophistication of our flooring options, from sleek micro concrete and timeless terrazzo to rustic oxide and elegant natural stone, each offering durability, style, and easy maintenance.<br>Our design philosophy extends beyond interiors to include stunning exteriors crafted with laterite stone, creating captivating exterior walls that stand out. We use premium wood for furniture, ensuring each piece adds warmth and sophistication to your home. Our expansive wooden-glass windows and doors invite natural light and ventilation, enhancing the spaciousness and elegance of every room. Additionally, our stone walls and stone flooring are ideal for roads, backyards, and parking areas, blending durability with a natural aesthetic. At Limestone, every detail is thoughtfully designed to elevate your living experience, combining style and practicality in perfect harmony. Invest in Limestone homes – the best investment for the future."
    },
    {
        src: "img/img-ApqHALd0rsSZ6rZj7cZt4 1.png",
        heading: "Connecting With Nature :",
        content: "In a tranquil countryside setting, birds chirp in the trees while animals roam freely in the surrounding fields, reminding us that in nature, birds and animals are not just inhabitants; they are our neighbors."
    },
    {
        src: "img/elevation31.png",
        heading: "Eco Living :",
        content: "In our community, we prioritize sustainability by implementing rainwater harvesting systems, ensuring efficient use of water resources while minimizing our environmental impact. Within our community, we also embrace greywater harvesting as a sustainable solution, repurposing wastewater from sinks, showers, and laundry to reduce water waste and promote environmental stewardship Residents of our community not only have the opportunity to cultivate their own fresh fruits and vegetables in their backyard, fostering a connection to nature and promoting sustainable living, but we also provide a seed store where they can conveniently purchase their preferred seeds for planting. In our architectural design, we seamlessly incorporate existing coconut trees within our spacious villas layouts, ensuring that the natural beauty and integrity of the coconut farm remain untouched. To enhance biodiversity and create a vibrant ecosystem, our community is adorned with numerous host plants and nectar plants, attracting an array of butterflies and birds, and enriching the natural surroundings with their presence."
    },
    {
        src: "img/img-ApqHALd0rsSZ6rZj7cZt4 1 (1).png",
        heading: "Coconut Paradise :",
        content: "Nestled within our coconut paradise, visitors discover not only breathtaking beauty but also an ecosystem teeming with life and environmental significance. Coconut trees stand as guardians of our diverse landscapes, promoting biodiversity and protecting against erosion with their extensive root systems. Moreover, they play a pivotal role in mitigating climate change by sequestering carbon dioxide and purifying the air we breathe. As natural air purifiers, coconut trees release oxygen and filter pollutants, creating a healthier environment for all.<br>Additionally, their lush foliage offers cooling shade, reducing temperatures and energy consumption while providing habitats for diverse species. In our Coimbatore farmhouse, guests experience the perfect harmony between nature's splendor and environmental stewardship, making it a must-visit destination for those seeking both serenity and sustainability."
    }
];

    aboutImgs.forEach((img, index) => {
        img.addEventListener("click", function() {
            aboutSec.style.opacity = "0";
            setTimeout(() => {
                aboutSec.style.display = "none";
                largeImgContainer.style.display = "block";
                const { src, heading, content } = overlayData[index];
                largeImg.setAttribute("src", src);
                overlayHeading.textContent = heading;
                overlayContent.innerHTML = content; // Use innerHTML to render HTML content
                aboutSec.style.opacity = "1";
                if (index === 1) { // If the second image is clicked
                    displaySecoundaryImage.style.display = "block"; // Show the secondary image container
                } else {
                    displaySecoundaryImage.style.display = "none"; // Hide the secondary image container
                }
            }, 500);
        });
    });

    closeBtn.addEventListener("click", function() {
        largeImgContainer.style.display = "none";
        displaySecoundaryImage.style.display = "none"; // Hide the secondary image container
        aboutSec.style.display = "block";
        setTimeout(() => {
            aboutSec.style.opacity = "1";
        }, 100);
    });
});