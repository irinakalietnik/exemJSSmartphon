const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://i.pcmag.com/imagery/articles/03Xtjkm0c708hMTMCDk4yhm-1.fit_lim.size_1600x900.v1569488723.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.ebayimg.com/images/g/YVYAAOSwvBNiuuyZ/s-l640.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail:
      "https://yabloko.ua/images/ab__webp/blog/49/31b51f39-9ef4-4c22-a213-53646fb25fb6__1__jpg.webp",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail:
      "https://mirsmart.com.ua/image/cache/catalog/smartphones/Oppo/F19-Pro-plus-5G/oppo-f19-pro-plus-prev-370x330.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail:
      "https://cdn.new-brz.net/app/public/models/MAR-LX1A4128AURORA/large/w/210804160011439575.webp",
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "laptops",
    thumbnail:
      "https://www.cibermag.com/images/watermarked/1/thumbnails/721/416/detailed/10/Apple_MacBook_Pro_Retina_13_.jpg",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://content1.rozetka.com.ua/goods/images/big/352591735.jpg",
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail:
      "https://images.prom.ua/3542854458_w640_h640_noutbuk-microsoft-surface.jpg",
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://gagadget.com/media/uploads/Infinix%20INBook%20X1-1.jpg",
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://content.rozetka.com.ua/goods/images/big/424289406.jpg",
  },
  {
    id: 11,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://i.pcmag.com/imagery/articles/03Xtjkm0c708hMTMCDk4yhm-1.fit_lim.size_1600x900.v1569488723.jpg",
  },
  {
    id: 12,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.ebayimg.com/images/g/YVYAAOSwvBNiuuyZ/s-l640.jpg",
  },
  {
    id: 13,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail:
      "https://yabloko.ua/images/ab__webp/blog/49/31b51f39-9ef4-4c22-a213-53646fb25fb6__1__jpg.webp",
  },
  {
    id: 14,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail:
      "https://mirsmart.com.ua/image/cache/catalog/smartphones/Oppo/F19-Pro-plus-5G/oppo-f19-pro-plus-prev-370x330.jpg",
  },
  {
    id: 15,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail:
      "https://cdn.new-brz.net/app/public/models/MAR-LX1A4128AURORA/large/w/210804160011439575.webp",
  },
  {
    id: 16,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "laptops",
    thumbnail:
      "https://www.cibermag.com/images/watermarked/1/thumbnails/721/416/detailed/10/Apple_MacBook_Pro_Retina_13_.jpg",
  },
  {
    id: 17,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://content1.rozetka.com.ua/goods/images/big/352591735.jpg",
  },
  {
    id: 18,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail:
      "https://images.prom.ua/3542854458_w640_h640_noutbuk-microsoft-surface.jpg",
  },
  {
    id: 19,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://gagadget.com/media/uploads/Infinix%20INBook%20X1-1.jpg",
  },
  {
    id: 20,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://content.rozetka.com.ua/goods/images/big/424289406.jpg",
  },
  {
    id: 21,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://i.pcmag.com/imagery/articles/03Xtjkm0c708hMTMCDk4yhm-1.fit_lim.size_1600x900.v1569488723.jpg",
  },
  {
    id: 22,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.ebayimg.com/images/g/YVYAAOSwvBNiuuyZ/s-l640.jpg",
  },
  {
    id: 23,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail:
      "https://yabloko.ua/images/ab__webp/blog/49/31b51f39-9ef4-4c22-a213-53646fb25fb6__1__jpg.webp",
  },
  {
    id: 24,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail:
      "https://mirsmart.com.ua/image/cache/catalog/smartphones/Oppo/F19-Pro-plus-5G/oppo-f19-pro-plus-prev-370x330.jpg",
  },
  {
    id: 25,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail:
      "https://cdn.new-brz.net/app/public/models/MAR-LX1A4128AURORA/large/w/210804160011439575.webp",
  },
  {
    id: 26,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "laptops",
    thumbnail:
      "https://www.cibermag.com/images/watermarked/1/thumbnails/721/416/detailed/10/Apple_MacBook_Pro_Retina_13_.jpg",
  },
  {
    id: 27,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://content1.rozetka.com.ua/goods/images/big/352591735.jpg",
  },
  {
    id: 28,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail:
      "https://images.prom.ua/3542854458_w640_h640_noutbuk-microsoft-surface.jpg",
  },
  {
    id: 29,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://gagadget.com/media/uploads/Infinix%20INBook%20X1-1.jpg",
  },
  {
    id: 30,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://content.rozetka.com.ua/goods/images/big/424289406.jpg",
  },
];

let toDoCardContainer = document.getElementById("container");

products.forEach((product) => {
  let card = document.createElement("div");
  toDoCardContainer.appendChild(card);
  card.classList.add("card");
  card.innerHTML = `<div class="card-top">
          <div class="discount">${product.discountPercentage} %</div>
          <div class="category">${product.category}</div>
          <div class="image-box">
            <img
              class="image"
              src=${product.thumbnail}
              alt=""
            />
          </div>
        </div>
        <div class="card-bottom">
          <h3 class="title">${product.title}</h3>
          <div class="text">${product.description}</div>
          <div class="price-box">
            <div class="price">${product.price} $</div>
            <div>
              <i
                id=${product.id}
                class="fa-solid fa-cart-shopping fa-2xl"
                style="color: #075ef2"
              ></i>
            </div>
          </div>
        </div>
      </div>`;
  let basket = document.getElementById(product.id);
  basket.onclick = function () {
    basket.style.color = "#9cb8e9";
    console.log(this.id);
  };
  basket.onmouseleave = function () {
    basket.style.color = "#075ef2";
  };
});
