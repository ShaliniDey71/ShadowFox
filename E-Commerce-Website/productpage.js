document.addEventListener('DOMContentLoaded', function() {
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
            { "user": "user1", "text": "Absolutely love these! They are so comfortable and stylish. Perfect for both traditional and fusion outfits. Highly recommend!" },
            { "user": "user2", "text": "Great quality leather and intricate design. A bit snug at first, but they stretched out nicely. Got many compliments!" },
            { "user": "user3", "text": "Authentic Kolhapuris! The craftsmanship is superb, and they feel sturdy. Definitely worth the price for such a unique piece." }
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
            { "user": "user1", "text": "This Tant saree is a dream! So light and easy to drape. The color is vibrant and it's perfect for daily wear." },
            { "user": "user2", "text": "Authentic Bengal weave. The quality of cotton is excellent and the traditional motifs are beautiful. Very happy with this purchase." },
            { "user": "user3", "text": "Comfortable and elegant! I wore it to a family gathering and received many compliments. It's truly a timeless piece." }
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
            { "user": "user1", "text": "Absolutely stunning! The zari work is exquisite and it drapes beautifully. Felt like royalty wearing it to a wedding." },
            { "user": "user2", "text": "The shine and texture of this saree are incredible. It's a heavy but luxurious feel, perfect for grand occasions. Delighted!" },
            { "user": "user3", "text": "A true masterpiece! The craftsmanship is evident in every detail. It's an investment piece that will be cherished." }
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
            { "user": "user1", "text": "Beautiful floral print and very comfortable material. It's lightweight and perfect for everyday wear. Love the elegant drape." },
            { "user": "user2", "text": "Received it quickly and the burkha is exactly as described. The fabric feels soft against the skin. Great for modest fashion." },
            { "user": "user3", "text": "The fit is modest yet stylish. The floral pattern adds a lovely touch without being too loud. Very satisfied with this purchase." }
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
            { "user": "user1", "text": "Comfortable and stylish! The embroidery is subtle yet beautiful. Perfect for casual events or family functions." },
            { "user": "user2", "text": "The fabric is soft and breathable. Drapes well and the color is true to the image. Great value for money." },
            { "user": "user3", "text": "I wear this suit quite often. It's versatile and easy to maintain. Highly recommend for those who love ethnic wear." }
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
            { "user": "user1", "text": "These leggings are so soft and stretchy! The colors are vibrant and they fit perfectly. A must-have for everyday comfort." },
            { "user": "user2", "text": "Great value for a set of leggings. They hold their shape well after washing. I love having so many color options." },
            { "user": "user3", "text": "Perfect for my yoga sessions and daily errands. The material is breathable and doesn't feel restrictive. Fantastic purchase!" }
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
            { "user": "user1", "text": "Exquisite craftsmanship! The chikankari work is incredibly delicate and beautiful. This saree is a work of art." },
            { "user": "user2", "text": "I'm amazed by the intricate details. It's lightweight and drapes gracefully. Perfect for any special occasion." },
            { "user": "user3", "text": "A true classic piece! The hand embroidery is flawless, and the fabric feels luxurious. So glad I bought this." }
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
            { "user": "user1", "text": "The Mysore silk is absolutely divine! The color is rich and the golden border adds so much grandeur. Felt amazing wearing it." },
            { "user": "user2", "text": "Perfect for weddings! The saree has a beautiful sheen and feels incredibly soft. It's a timeless addition to my wardrobe." },
            { "user": "user3", "text": "Outstanding quality. The silk feels authentic and the saree drapes like a dream. Definitely worth the price for its elegance." }
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
        "description": "Stay warm and stylish with this authentic Kashmiri Woollen Pheran. This traditional loose gown is adorned with beautiful embroidery, offering comfort and elegance during colder months.",
        "reviewsData": [
            { "user": "user1", "text": "Incredibly warm and cozy, perfect for winter. The embroidery is a beautiful touch!" },
            { "user": "user2", "text": "Love the traditional feel of this Pheran. It's well-made and surprisingly lightweight." },
            { "user": "user3", "text": "Excellent quality wool, and it fits perfectly. Definitely recommend for anyone looking for authentic Kashmiri wear." }
        ]
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
        "description": "Embrace the unique charm of Assam with this traditional Mekhela Chador. Handwoven with intricate patterns, this two-piece saree-like garment is perfect for cultural events and festive occasions.",
        "reviewsData": [
            { "user": "user1", "text": "The Mekhela Chador is stunning! The weaving is exquisite, and the colors are vibrant." },
            { "user": "user2", "text": "So elegant and comfortable to wear. I received many compliments when I wore it." },
            { "user": "user3", "text": "A beautiful representation of Assamese culture. The fabric feels soft and luxurious." }
        ]
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
        "description": "Complete your ethnic look with these handcrafted Punjabi Traditional Jutti. Featuring vibrant embroidery and comfortable fit, these slip-on shoes add a touch of traditional flair to any outfit.",
        "reviewsData": [
            { "user": "user1", "text": "These Juttis are so pretty and comfortable! The embroidery is lovely and adds a great touch to my ethnic outfits." },
            { "user": "user2", "text": "Authentic Punjabi Jutti. They fit well and the quality is excellent. Perfect for festive occasions." },
            { "user": "user3", "text": "Stylish and traditional. I love the vibrant colors and the comfortable sole. Highly recommend!" }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "This Banarasi saree is a masterpiece. The zari work is incredibly detailed and shines beautifully." },
            { "user": "user2", "text": "Absolutely stunning! The fabric is rich and the saree drapes elegantly. Perfect for special occasions." },
            { "user": "user3", "text": "Received so many compliments on this saree. It's truly a timeless and luxurious piece." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "Lovely Anarkali kurti. The embroidery is delicate and adds a touch of elegance." },
            { "user": "user2", "text": "The fit is flattering and the material is comfortable. Great for festive wear." },
            { "user": "user3", "text": "Very happy with this purchase. It's even more beautiful in person than in the pictures." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "These Khussa shoes are so unique and stylish! The patterns are beautiful." },
            { "user": "user2", "text": "Comfortable from the first wear. They add a lovely ethnic touch to any outfit." },
            { "user": "user3", "text": "Great quality and vibrant colors. Very happy with these traditional shoes." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "The Bandhani saree is absolutely vibrant and beautiful! The colors are so striking." },
            { "user": "user2", "text": "Love the tie-dye patterns, it's truly a unique piece. Drapes very nicely too." },
            { "user": "user3", "text": "Perfect for festive occasions. The fabric is light and comfortable. Highly recommend!" }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "This straight cut kurti is very comfortable and perfect for everyday wear. Simple yet stylish." },
            { "user": "user2", "text": "Good quality fabric and a great fit. It's become a staple in my wardrobe." },
            { "user": "user3", "text": "Versatile kurti, easy to pair with leggings or palazzo pants. Happy with the purchase." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "These Paduka sandals are very traditional and a unique addition. Comfortable for light wear." },
            { "user": "user2", "text": "Authentic wooden design. They are interesting to wear and feel sturdy." },
            { "user": "user3", "text": "A beautiful piece of cultural footwear. I appreciate the craftsmanship." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "This Chanderi saree is so elegant and lightweight. Perfect for summer events." },
            { "user": "user2", "text": "The sheer texture is beautiful, and the saree drapes wonderfully. Very sophisticated." },
            { "user": "user3", "text": "Lovely color and subtle design. I'm very pleased with the quality of this saree." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "Comfortable and flowy, this A-Line kurti is perfect for daily wear. Love the cotton fabric." },
            { "user": "user2", "text": "Great casual kurti. It's soft, breathable, and the A-line cut is very flattering." },
            { "user": "user3", "text": "Good value for money. It's a versatile piece that I can wear for various occasions." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "The Patola saree is simply exquisite! The weaving is incredibly intricate and vibrant." },
            { "user": "user2", "text": "A true heirloom piece. The quality of the silk and the traditional patterns are breathtaking." },
            { "user": "user3", "text": "Worth every penny. This saree is a stunning representation of Gujarati artistry." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "This Angrakha kurti is so unique and stylish. The wrap-around design is very flattering." },
            { "user": "user2", "text": "Love the traditional feel and the comfortable fit. It's a beautiful addition to my ethnic wear." },
            { "user": "user3", "text": "The fabric is nice and the kurti looks great for both casual and semi-formal occasions." }
        ]
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
        "reviewsData": [
            { "user": "user1", "text": "The Odisha Ikkat saree is absolutely beautiful! The patterns are so distinct and artistic." },
            { "user": "user2", "text": "Love the handwoven feel and the vibrant colors. It's a unique and elegant saree." },
            { "user": "user3", "text": "Fantastic quality. The Ikkat weave is flawless and it drapes beautifully. Very happy!" }
        ]
    }
];

    function getProductIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    function getProductById(id) {
        return products.find(product => product.id === id);
    }

    function displayProductDetails(product) {
        if (!product) {
            document.getElementById('productName').textContent = 'Product Not Found';
            document.getElementById('productDescription').textContent = 'The product you are looking for does not exist.';
            document.getElementById('productImage').style.display = 'none';
            document.querySelector('.product-price-section').style.display = 'none';
            document.querySelector('.product-reviews-section').style.display = 'none';
            document.querySelector('.product-actions').style.display = 'none';
            document.getElementById('productPageTitle').textContent = 'Product Not Found';
            document.querySelector('.customer-reviews-section').style.display = 'none';
            return;
        }

        document.getElementById('productPageTitle').textContent = product.name + ' - Indian Queens Wear';
        document.getElementById('productImage').src = product.image;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;

        const productCurrentPrice = document.getElementById('productCurrentPrice');
        const productMRP = document.getElementById('productMRP');
        const productDiscount = document.getElementById('productDiscount');

        productCurrentPrice.textContent = product.price;

        if (product.mrp) {
            productMRP.textContent = product.mrp;
            productMRP.style.display = 'inline';
        } else {
            productMRP.style.display = 'none';
        }

        if (product.discount) {
            productDiscount.textContent = product.discount;
            productDiscount.style.display = 'inline';
        } else {
            productDiscount.style.display = 'none';
        }

        document.getElementById('productScore').textContent = product.score;
        document.getElementById('productReviewCount').textContent = product.reviews;

        const reviewsContainer = document.getElementById('reviewsContainer');
        reviewsContainer.innerHTML = '';

        if (product.reviewsData && product.reviewsData.length > 0) {
            product.reviewsData.forEach(review => {
                const reviewItem = document.createElement('div');
                reviewItem.classList.add('review-item');

                const reviewUser = document.createElement('p');
                reviewUser.classList.add('review-user');
                reviewUser.textContent = review.user;

                const reviewText = document.createElement('p');
                reviewText.classList.add('review-text');
                reviewText.textContent = review.text;

                reviewItem.appendChild(reviewUser);
                reviewItem.appendChild(reviewText);
                reviewsContainer.appendChild(reviewItem);
            });
        } else {
            const noReviewsMessage = document.createElement('p');
            noReviewsMessage.textContent = 'No reviews yet for this product.';
            noReviewsMessage.style.textAlign = 'center';
            noReviewsMessage.style.padding = '20px';
            noReviewsMessage.style.color = '#777';
            reviewsContainer.appendChild(noReviewsMessage);
        }
    }

    const productId = getProductIdFromUrl();
    const selectedProduct = getProductById(productId);
    displayProductDetails(selectedProduct);

    document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
        if (selectedProduct) {
            alert(`${selectedProduct.name} added to cart! (Functionality to be implemented)`);
        }
    });

    document.querySelector('.buy-now-btn').addEventListener('click', function() {
        if (selectedProduct) {
            alert(`Buying ${selectedProduct.name} now! (Checkout functionality to be implemented)`);
        }
    });
});