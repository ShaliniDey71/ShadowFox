document.addEventListener('DOMContentLoaded', function() {
    const allOptionsButton = document.getElementById('all-options');
    const myMenuBar = document.getElementById('myMenuBar');
    const closeMenuBarButton = document.getElementById('closeMenuBar');
    const hasDropdowns = document.querySelectorAll('.has-dropdown');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    const products = [
        {
            "id": "na-item-1",
            "name": "Kolhapuri Leather Footwear",
            "price": "₹1599",
            "mrp": null,
            "discount": null,
            "score": "4.3",
            "reviews": "245 Reviews",
            "image": "images/homepage/kolhapuri.webp",
            "section": "new-arrivals",
            "category": "footwears",
            "type": "Kolhapuri Chappal",
            "state": "Maharashtra",
            "religion": null,
            "description": "Step out in style with these authentic Kolhapuri Leather Footwear, handcrafted by skilled artisans. Made from genuine leather, they offer both comfort and a touch of traditional elegance. Perfect for casual wear or ethnic ensembles.",
            "reviewsData": [
                { "user": "EthnoChic", "text": "Absolutely love these! They are so comfortable and stylish. Perfect for both traditional and fusion outfits. Highly recommend!" },
                { "user": "FootwearFanatic", "text": "Great quality leather and intricate design. A bit snug at first, but they stretched out nicely. Got many compliments!" },
                { "user": "TraditionLover", "text": "Authentic Kolhapuris! The craftsmanship is superb, and they feel sturdy. Definitely worth the price for such a unique piece." }
            ]
        },
        {
            "id": "na-item-2",
            "name": "Bengali Tant Saree",
            "price": "₹1399",
            "mrp": null,
            "discount": null,
            "score": "4.5",
            "reviews": "188 Reviews",
            "image": "images/homepage/tantsaree.jpg_large",
            "section": "new-arrivals",
            "category": "sarees",
            "type": "Tant",
            "state": "West Bengal",
            "religion": null,
            "description": "Experience the grace of Bengal with this lightweight and comfortable Tant Saree. Woven with fine cotton, it features delicate motifs and a traditional border, ideal for everyday wear and festive occasions.",
            "reviewsData": [
                { "user": "SareeSwirl", "text": "This Tant saree is a dream! So light and easy to drape. The color is vibrant and it's perfect for daily wear." },
                { "user": "BengaliBeauty", "text": "Authentic Bengal weave. The quality of cotton is excellent and the traditional motifs are beautiful. Very happy with this purchase." },
                { "user": "ComfortDrape", "text": "Comfortable and elegant! I wore it to a family gathering and received many compliments. It's truly a timeless piece." }
            ]
        },
        {
            "id": "na-item-3",
            "name": "South Indian Golden Saree",
            "price": "₹2199",
            "mrp": null,
            "discount": null,
            "score": "4.6",
            "reviews": "312 Reviews",
            "image": "images/homepage/southsaree.avif",
            "section": "new-arrivals",
            "category": "sarees",
            "type": "South Indian",
            "state": "Karnataka",
            "religion": "Hinduism",
            "description": "Adorn yourself in the splendor of a South Indian Golden Saree. This exquisite piece boasts rich golden zari work and intricate patterns, making it a perfect choice for weddings, grand celebrations, and cultural events.",
            "reviewsData": [
                { "user": "GoldenGoddess", "text": "Absolutely stunning! The zari work is exquisite and it drapes beautifully. Felt like royalty wearing it to a wedding." },
                { "user": "FestiveFab", "text": "The shine and texture of this saree are incredible. It's a heavy but luxurious feel, perfect for grand occasions. Delighted!" },
                { "user": "TraditionThread", "text": "A true masterpiece! The craftsmanship is evident in every detail. It's an investment piece that will be cherished." }
            ]
        },
        {
            "id": "na-item-4",
            "name": "Floral Printed Burkha",
            "price": "₹1699",
            "mrp": null,
            "discount": null,
            "score": "4.2",
            "reviews": "95 Reviews",
            "image": "images/homepage/burkha.webp",
            "section": "new-arrivals",
            "category": "apparel",
            "type": "Burkha",
            "state": null,
            "religion": "Islam",
            "description": "Embrace modesty with a touch of contemporary style with this beautiful Floral Printed Burkha. Designed for comfort and elegance, it features a flowy silhouette and vibrant floral patterns.",
            "reviewsData": [
                { "user": "ModestMaven", "text": "Beautiful floral print and very comfortable material. It's lightweight and perfect for everyday wear. Love the elegant drape." },
                { "user": "FlowyFashion", "text": "Received it quickly and the burkha is exactly as described. The fabric feels soft against the skin. Great for modest fashion." },
                { "user": "PrintPerfection", "text": "The fit is modest yet stylish. The floral pattern adds a lovely touch without being too loud. Very satisfied with this purchase." }
            ]
        },
        {
            "id": "tp-item-1",
            "name": "Punjabi Salwar Suit",
            "price": "₹1249",
            "mrp": null,
            "discount": null,
            "score": "4.4",
            "reviews": "210 Reviews",
            "image": "images/homepage/salwar.jpg",
            "section": "top-picks",
            "category": "kurtis",
            "type": "Punjabi Suit",
            "state": "Punjab",
            "religion": "Sikhism",
            "description": "Look effortlessly chic in this traditional Punjabi Salwar Suit. Featuring intricate embroidery and a comfortable fit, it's perfect for casual outings, family gatherings, and festivals.",
            "reviewsData": [
                { "user": "PatialaPrincess", "text": "Comfortable and stylish! The embroidery is subtle yet beautiful. Perfect for casual events or family functions." },
                { "user": "SuitUpStyle", "text": "The fabric is soft and breathable. Drapes well and the color is true to the image. Great value for money." },
                { "user": "EverydayElegance", "text": "I wear this suit quite often. It's versatile and easy to maintain. Highly recommend for those who love ethnic wear." }
            ]
        },
        {
            "id": "tp-item-2",
            "name": "Multicoloured Leggings Set",
            "price": "₹649",
            "mrp": null,
            "discount": null,
            "score": "4.1",
            "reviews": "3298 Reviews",
            "image": "images/homepage/leggings.jpg",
            "section": "top-picks",
            "category": "apparel",
            "type": "Leggings",
            "state": null,
            "religion": null,
            "description": "Comfort meets versatility with this Multicoloured Leggings Set. Made from breathable fabric, these leggings are perfect for pairing with kurtis, tunics, or dresses, offering endless styling possibilities.",
            "reviewsData": [
                { "user": "ComfyCasual", "text": "These leggings are so soft and stretchy! The colors are vibrant and they fit perfectly. A must-have for everyday comfort." },
                { "user": "VersatileVibes", "text": "Great value for a set of leggings. They hold their shape well after washing. I love having so many color options." },
                { "user": "ActiveAttire", "text": "Perfect for my yoga sessions and daily errands. The material is breathable and doesn't feel restrictive. Fantastic purchase!" }
            ]
        },
        {
            "id": "tp-item-3",
            "name": "Lucknowi Chikankari Saree",
            "price": "₹2399",
            "mrp": null,
            "discount": null,
            "score": "4.7",
            "reviews": "250 Reviews",
            "image": "images/homepage/chikankari.jpg",
            "section": "top-picks",
            "category": "sarees",
            "type": "Chikankari",
            "state": "Uttar Pradesh",
            "religion": null,
            "description": "Indulge in the timeless elegance of a Lucknowi Chikankari Saree. Hand-embroidered with delicate white thread work, this saree is a masterpiece of traditional craftsmanship, ideal for special occasions.",
            "reviewsData": [
                { "user": "ChikankariCharm", "text": "Exquisite craftsmanship! The chikankari work is incredibly delicate and beautiful. This saree is a work of art." },
                { "user": "ElegantDrape", "text": "I'm amazed by the intricate details. It's lightweight and drapes gracefully. Perfect for any special occasion." },
                { "user": "HandloomHero", "text": "A true classic piece! The hand embroidery is flawless, and the fabric feels luxurious. So glad I bought this." }
            ]
        },
        {
            "id": "tp-item-4",
            "name": "Mysore Silk Saree",
            "price": "₹2499",
            "mrp": null,
            "discount": null,
            "score": "4.8",
            "reviews": "330 Reviews",
            "image": "images/homepage/mysoresilk.jpg",
            "section": "top-picks",
            "category": "sarees",
            "type": "Mysore",
            "state": "Karnataka",
            "religion": null,
            "description": "Drape yourself in luxury with a genuine Mysore Silk Saree. Known for its lustrous texture and vibrant colors, this saree features exquisite golden borders, perfect for grand celebrations and weddings.",
            "reviewsData": [
                { "user": "SilkSplendor", "text": "The Mysore silk is absolutely divine! The color is rich and the golden border adds so much grandeur. Felt amazing wearing it." },
                { "user": "WeddingWear", "text": "Perfect for weddings! The saree has a beautiful sheen and feels incredibly soft. It's a timeless addition to my wardrobe." },
                { "user": "LuxuryLover", "text": "Outstanding quality. The silk feels authentic and the saree drapes like a dream. Definitely worth the price for its elegance." }
            ]
        },
        {
            "id": "sale-item-1",
            "name": "Kashmiri Woollen Pheran",
            "price": "₹1499",
            "mrp": "₹1899",
            "discount": "21% OFF",
            "score": "4.5",
            "reviews": "403 Reviews",
            "image": "images/homepage/pheran.jpg",
            "section": "sale",
            "category": "apparel",
            "type": "Pheran",
            "state": "Jammu & Kashmir",
            "religion": null,
            "description": "Stay warm and stylish with this authentic Kashmiri Woollen Pheran. This traditional loose gown is adorned with beautiful embroidery, offering comfort and elegance during colder months."
        },
        {
            "id": "sale-item-2",
            "name": "Assamese Mekhela Chador",
            "price": "₹1699",
            "mrp": "₹2099",
            "discount": "19% OFF",
            "score": "4.4",
            "reviews": "160 Reviews",
            "image": "images/homepage/mekhelachador.jpg",
            "section": "sale",
            "category": "sarees",
            "type": "Mekhela Chador",
            "state": "Assam",
            "religion": null,
            "description": "Embrace the unique charm of Assam with this traditional Mekhela Chador. Handwoven with intricate patterns, this two-piece saree-like garment is perfect for cultural events and festive occasions."
        },
        {
            "id": "sale-item-3",
            "name": "Punjabi Traditional Jutti",
            "price": "₹899",
            "mrp": "₹1099",
            "discount": "18% OFF",
            "score": "4.3",
            "reviews": "190 Reviews",
            "image": "images/homepage/jutti.webp",
            "section": "sale",
            "category": "footwears",
            "type": "Jutti/Mojari",
            "state": "Punjab",
            "religion": "Sikhism",
            "description": "Complete your ethnic look with these handcrafted Punjabi Traditional Jutti. Featuring vibrant embroidery and comfortable fit, these slip-on shoes add a touch of traditional flair to any outfit."
        },
        {
            "id": "saree-banarasi-1",
            "name": "Elegant Banarasi Saree",
            "price": "₹4500",
            "mrp": null,
            "discount": null,
            "score": "4.9",
            "reviews": "500 Reviews",
            "image": "images/homepage/banarasi.webp",
            "section": "sarees",
            "category": "sarees",
            "type": "Banarasi",
            "state": "Uttar Pradesh",
            "religion": "Hinduism",
            "description": "Luxurious Banarasi Saree with intricate zari work, perfect for weddings and grand celebrations.",
            "reviewsData": []
        },
        {
            "id": "kurti-anarkali-1",
            "name": "Anarkali Kurti with Embroidery",
            "price": "₹1800",
            "mrp": "₹2200",
            "discount": "18% OFF",
            "score": "4.6",
            "reviews": "120 Reviews",
            "image": "images/homepage/anarkali.jpg",
            "section": "kurtis",
            "category": "kurtis",
            "type": "Anarkali",
            "state": "Rajasthan",
            "religion": null,
            "description": "Flowy Anarkali kurti featuring exquisite embroidery, ideal for festive occasions.",
            "reviewsData": []
        },
        {
            "id": "footwear-khussa-1",
            "name": "Traditional Khussa Shoes",
            "price": "₹950",
            "mrp": null,
            "discount": null,
            "score": "4.2",
            "reviews": "80 Reviews",
            "image": "images/homepage/khussa.webp",
            "section": "footwears",
            "category": "footwears",
            "type": "Khussa",
            "state": "Punjab",
            "religion": "Sikhism",
            "description": "Handcrafted Khussa shoes with vibrant patterns, offering comfort and traditional style.",
            "reviewsData": []
        },
        {
            "id": "saree-bandhani-1",
            "name": "Vibrant Bandhani Saree",
            "price": "₹1700",
            "mrp": null,
            "discount": null,
            "score": "4.5",
            "reviews": "150 Reviews",
            "image": "images/homepage/bandhani.webp",
            "section": "sarees",
            "category": "sarees",
            "type": "Bandhani",
            "state": "Gujarat",
            "religion": "Hinduism",
            "description": "Eye-catching Bandhani saree known for its unique tie-dye patterns and bright colors.",
            "reviewsData": []
        },
        {
            "id": "kurti-straight-1",
            "name": "Classic Straight Cut Kurti",
            "price": "₹800",
            "mrp": "₹1000",
            "discount": "20% OFF",
            "score": "4.0",
            "reviews": "200 Reviews",
            "image": "images/homepage/straightkurti.webp",
            "section": "kurtis",
            "category": "kurtis",
            "type": "Straight Cut",
            "state": null,
            "religion": null,
            "description": "Simple yet elegant straight cut kurti, perfect for daily wear or office.",
            "reviewsData": []
        },
        {
            "id": "footwear-paduka-1",
            "name": "Wooden Paduka Sandals",
            "price": "₹600",
            "mrp": null,
            "discount": null,
            "score": "3.8",
            "reviews": "45 Reviews",
            "image": "images/homepage/paduka.jpg",
            "section": "footwears",
            "category": "footwears",
            "type": "Paduka",
            "state": null,
            "religion": "Hinduism",
            "description": "Traditional wooden Paduka sandals, reflecting ancient Indian footwear.",
            "reviewsData": []
        },
        {
            "id": "saree-chanderi-1",
            "name": "Lightweight Chanderi Saree",
            "price": "₹2800",
            "mrp": null,
            "discount": null,
            "score": "4.7",
            "reviews": "90 Reviews",
            "image": "images/homepage/chanderi.webp",
            "section": "sarees",
            "category": "sarees",
            "type": "Chanderi",
            "state": "Madhya Pradesh",
            "religion": null,
            "description": "Graceful Chanderi saree known for its sheer texture and lightweight feel.",
            "reviewsData": []
        },
        {
            "id": "kurti-aline-1",
            "name": "A-Line Cotton Kurti",
            "price": "₹950",
            "mrp": null,
            "discount": null,
            "score": "4.3",
            "reviews": "180 Reviews",
            "image": "images/homepage/alinekurti.webp",
            "section": "kurtis",
            "category": "kurtis",
            "type": "A-Line",
            "state": null,
            "religion": null,
            "description": "Comfortable A-Line cotton kurti, perfect for daily casual wear.",
            "reviewsData": []
        },
        {
            "id": "saree-gujarati-1",
            "name": "Gujarati Patola Saree",
            "price": "₹5500",
            "mrp": null,
            "discount": null,
            "score": "4.9",
            "reviews": "110 Reviews",
            "image": "images/homepage/patola.jpeg",
            "section": "sarees",
            "category": "sarees",
            "type": "Patola",
            "state": "Gujarat",
            "religion": "Hinduism",
            "description": "Exquisite Patola silk saree, a symbol of Gujarati heritage and craftsmanship.",
            "reviewsData": []
        },
        {
            "id": "kurti-angrakha-1",
            "name": "Angrakha Style Kurti",
            "price": "₹1400",
            "mrp": null,
            "discount": null,
            "score": "4.4",
            "reviews": "70 Reviews",
            "image": "images/homepage/angrakha.jpg",
            "section": "kurtis",
            "category": "kurtis",
            "type": "Angrakha",
            "state": "Rajasthan",
            "religion": null,
            "description": "Traditional Angrakha style kurti with a wrap-around design, unique and elegant.",
            "reviewsData": []
        },
        {
            "id": "saree-odisha-1",
            "name": "Odisha Ikkat Saree",
            "price": "₹3200",
            "mrp": null,
            "discount": null,
            "score": "4.6",
            "reviews": "85 Reviews",
            "image": "images/homepage/ikkat.webp",
            "section": "sarees",
            "category": "sarees",
            "type": "Ikkat",
            "state": "Odisha",
            "religion": "Hinduism",
            "description": "Handwoven Ikkat saree from Odisha, known for its distinct dyeing technique.",
            "reviewsData": []
        }
    ];

    sessionStorage.setItem('allProducts', JSON.stringify(products));

    allOptionsButton.addEventListener('click', function() {
        myMenuBar.classList.add('open');
    });

    closeMenuBarButton.addEventListener('click', function() {
        myMenuBar.classList.remove('open');
        hasDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    hasDropdowns.forEach(dropdown => {
        const parentLink = dropdown.querySelector('a');

        parentLink.addEventListener('click', function(event) {
            if (parentLink.getAttribute('href') === '#') {
                event.preventDefault();
            }

            const wasActive = dropdown.classList.contains('active');

            hasDropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });

            if (!wasActive) {
                dropdown.classList.add('active');
            } else {
                dropdown.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', function(event) {
        if (!myMenuBar.contains(event.target) && myMenuBar.classList.contains('open') && !allOptionsButton.contains(event.target)) {
            myMenuBar.classList.remove('open');
            hasDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    if (searchButton && searchInput) {
        const performSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            if (query) {
                window.location.href = `productslist.html?search=${encodeURIComponent(query)}`;
            } else {
                alert('Please enter a search term.');
            }
        };

        searchButton.addEventListener('click', performSearch);

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }

    function displayProducts(productsToDisplay) {
        const newArrivalsGrid = document.getElementById('new-arrivals-grid');
        const topPicksGrid = document.getElementById('top-picks-grid');
        const salesGrid = document.getElementById('sales-grid');

        if (newArrivalsGrid) newArrivalsGrid.innerHTML = '';
        if (topPicksGrid) newArrivalsGrid.innerHTML = '';
        if (salesGrid) salesGrid.innerHTML = '';

        const newArrivals = productsToDisplay.filter(product => product.section === 'new-arrivals').slice(0, 4);
        const topPicks = productsToDisplay.filter(product => product.section === 'top-picks').slice(0, 4);
        const sales = productsToDisplay.filter(product => product.section === 'sale').slice(0, 3);

        const createProductCard = (product) => {
            const productCard = document.createElement('div');
            productCard.classList.add('items');
            productCard.setAttribute('data-product-id', product.id);

            let priceHtml = '';
            if (product.section === 'sale' && product.mrp && product.discount) {
                priceHtml = `
                    <p class="cost-details-txt">${product.price}</p>
                    <p class="mrp">${product.mrp}</p>
                    <p class="discount">${product.discount}</p>
                `;
            } else {
                priceHtml = `<p class="cost-details-txt">${product.price}</p>`;
            }

            productCard.innerHTML = `
                <div class="img-area" style="background-image: url(${product.image});"></div>
                <div class="details-area">
                    <div class="item-name-area">
                        <p class="item-name-txt">${product.name}</p>
                    </div>
                    <div class="${product.section === 'sale' ? 'cost-details-area-sales' : 'cost-details-area'}">
                        ${priceHtml}
                    </div>
                    <div class="reviews-area">
                        <div class="score-area">
                            <p class="score-area-txt">${product.score}</p>
                        </div>
                        <div class="review-number-area">
                            <p class="review-number-txt">${product.reviews}</p>
                        </div>
                    </div>
                </div>
            `;

            productCard.addEventListener('click', function() {
                window.location.href = `productpage.html?id=${product.id}`;
            });
            return productCard;
        };

        if (newArrivalsGrid) {
            newArrivals.forEach(product => {
                newArrivalsGrid.appendChild(createProductCard(product));
            });
        }
        if (topPicksGrid) {
            topPicks.forEach(product => {
                topPicksGrid.appendChild(createProductCard(product));
            });
        }
        if (salesGrid) {
            sales.forEach(product => {
                salesGrid.appendChild(createProductCard(product));
            });
        }
    }

    displayProducts(products);
});