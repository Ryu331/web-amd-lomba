
const carouselItems = [
  {
    title: "AMD Ryzen™ 7 9800X3D",
    desc: "Harness the ultimate gaming edge with AMD Ryzen™ 7 9800X3D Processor. Enjoy faster gaming with 2nd gen AMD 3D V-Cache™ technology for low latency.",
    img: "asset/gambar/top_seller/2505503-ryzen-7-7800x3d.avif",
  },
  {
    title: "AMD Ryzen™ 7 7800X3D",
    desc: "Whatever the setting, whatever the resolution, lead your team to victory with this incredible gaming processor. Plus, enjoy the benefits of next-gen AMD 3D V-Cache™ technology for low latency and even more game performance.",
    img: "asset/gambar/top_seller/2505503-ryzen-7-7800x3d.avif",
  },
  {
    title: "AMD Ryzen™ 5 5600X",
    desc: "AMD Ryzen™ 5 5600X gaming desktop processors features 6 incredible cores for those who just want to game. Learn more!",
    img: "asset/gambar/top_seller/2505503-ryzen-5-5600x.avif",
  },
  {
    title: "AMD Ryzen™ 9 9950X3D",
    desc: "The ultimate 16-core desktop CPU with 2nd gen AMD 3D V-Cache™ Technology that can do it all with incredible performance for the most demanding gamers and creators.",
    img: "asset/gambar/top_seller/3021650-ryzen-9-9900x3d-product.avif",
  },
  {
    title: "AMD Ryzen™ 9 5900X",
    desc: "AMD Ryzen™ 9 5900X series desktop processors comes with 12 cores to power through gaming, streaming and more.",
    img: "asset/gambar/top_seller/2505503-ryzen-9-5900x.avif",
  },
  {
    title: "AMD Ryzen™ 9 9900X",
    desc: "The Incredibly Powerful Processor for Gaming and Streaming",
    img: "asset/gambar/top_seller/2613900-ryzen-9-9950x.avif",
  },
];

// Target container, cari target element HTML dengan id
const carouselSlider = document.getElementById("carouselWrapper");


carouselSlider.innerHTML = carouselItems
  .map((item) => {
    return `
      <div
        class="min-w-[250px] w-[calc((100%-128px)/3)] max-[1100px]:w-[calc((100%-64px)/3)] max-[1000px]:w-[calc((100%-32px)/3)] snap-start bg-white shadow-md rounded-xl space-y-4 p-4 flex-shrink-0"
      >
        <div class="w-full h-64 rounded-md overflow-hidden relative">
          <img class="w-full h-full object-cover " src="${item.img}" alt="" >
        </div>
        <h2 class="font-bold text-xl mb-2">${item.title}</h2>
        <p class="text-gray-600 text-center">${item.desc}</p>
      </div>
    `;
  })
  .join("");

// Ambil tombol prev & next 
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


const cardWidth = 384;

const firstCard = carouselSlider.querySelector("div");
const cardSize = firstCard ? firstCard.offsetWidth + 64 : cardWidth;


let cards = Array.from(carouselSlider.children);
let currentIndex = 0;
const totalItems = cards.length - 2;

function goToIndex(index) {
  // Untuk loop
  currentIndex = ((index + totalItems) % totalItems) % 4 ;
 
  carouselSlider.scrollTo({
    left: currentIndex * cardSize,
    behavior: "smooth",
  });
}

// Button handlers
nextBtn.addEventListener("click", () => {
  goToIndex(currentIndex + 2);
});

prevBtn.addEventListener("click", () => {
  goToIndex(currentIndex - 2);
});
