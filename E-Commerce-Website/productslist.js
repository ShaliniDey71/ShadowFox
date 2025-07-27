document.addEventListener('DOMContentLoaded', function() {
    const allProducts = JSON.parse(sessionStorage.getItem('allProducts')) || [];
    let displayedProducts = [...allProducts];

    const productsGrid = document.getElementById('productsGrid');
    const sectionHeading = document.getElementById('sectionHeading');
    const pageTitle = document.getElementById('pageTitle');
    const noProductsMessage = document.getElementById('noProductsMessage');

    const filterCategorySelect = document.getElementById('filterCategory');
    const filterStateSelect = document.getElementById('filterState');
    const filterReligionSelect = document.getElementById('filterReligion');
    const filterStateLabel = document.getElementById('filterStateLabel');
    const filterReligionLabel = document.getElementById('filterReligionLabel');
    const sortOrderSelect = document.getElementById('sortOrder');

    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const typeParam = urlParams.get('type');
    const stateParam = urlParams.get('state');
    const religionParam = urlParams.get('religion');
    const searchParam = urlParams.get('search');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.setAttribute('data-id', product.id);

        let priceHtml = `<p class="current-price">${product.price}</p>`;
        if (product.mrp) {
            priceHtml += `<p class="mrp">${product.mrp}</p>`;
        }
        if (product.discount) {
            priceHtml += `<p class="discount">${product.discount}</p>`;
        }

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    ${priceHtml}
                </div>
                <div class="product-rating">
                    <span class="score">${product.score}</span>
                    <span class="reviews">${product.reviews}</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `productpage.html?id=${product.id}`;
        });

        return card;
    }

    function renderProducts(productsToRender) {
        productsGrid.innerHTML = '';
        if (productsToRender.length === 0) {
            noProductsMessage.style.display = 'block';
            return;
        } else {
            noProductsMessage.style.display = 'none';
        }

        const isSpecificFilterActive = categoryParam && (categoryParam !== 'new-arrivals' && categoryParam !== 'sale' && !searchParam);
        const isTypeOrStateOrReligionFilterActive = typeParam || stateParam || religionParam;
        
        let finalProductsToRender = productsToRender;
        if (isSpecificFilterActive || isTypeOrStateOrReligionFilterActive) {
             finalProductsToRender = productsToRender.slice(0, 4);
        }

        finalProductsToRender.forEach(product => {
            const card = createProductCard(product);
            productsGrid.appendChild(card);
        });
    }

    function applyFiltersAndSort() {
        let filteredProducts = [...allProducts];

        if (categoryParam) {
            if (categoryParam === 'new-arrivals' || categoryParam === 'sale') {
                filteredProducts = filteredProducts.filter(p => p.section === categoryParam);
            } else if (categoryParam === 'sarees' && typeParam) {
                filteredProducts = filteredProducts.filter(p => p.category === 'sarees' && p.type === typeParam);
            } else if (categoryParam === 'kurtis' && typeParam) {
                filteredProducts = filteredProducts.filter(p => p.category === 'kurtis' && p.type === typeParam);
            } else if (categoryParam === 'footwears' && typeParam) {
                filteredProducts = filteredProducts.filter(p => p.category === 'footwears' && p.type === typeParam);
            } else if (categoryParam === 'by-state' && stateParam) {
                filteredProducts = filteredProducts.filter(p => p.state === stateParam);
            } else if (categoryParam === 'by-religion' && religionParam) {
                filteredProducts = filteredProducts.filter(p => p.religion === religionParam);
            } else if (categoryParam === 'sarees') {
                filteredProducts = filteredProducts.filter(p => p.category === 'sarees');
            } else if (categoryParam === 'kurtis') {
                filteredProducts = filteredProducts.filter(p => p.category === 'kurtis');
            } else if (categoryParam === 'footwears') {
                filteredProducts = filteredProducts.filter(p => p.category === 'footwears');
            }
        } else if (searchParam) {
            const query = decodeURIComponent(searchParam).toLowerCase();
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(query) ||
                (product.description && product.description.toLowerCase().includes(query))
            );
        }

        const selectedFilterCategory = filterCategorySelect.value;
        if (selectedFilterCategory !== 'all') {
            const currentCategory = categoryParam === 'sarees' || categoryParam === 'kurtis' || categoryParam === 'footwears' ? categoryParam : null;
            if (currentCategory) {
                filteredProducts = filteredProducts.filter(p => p.category === currentCategory && p.type === selectedFilterCategory);
            } else {
                 filteredProducts = filteredProducts.filter(p => p.type === selectedFilterCategory);
            }
        }

        const selectedFilterState = filterStateSelect.value;
        if (selectedFilterState !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.state === selectedFilterState);
        }

        const selectedFilterReligion = filterReligionSelect.value;
        if (selectedFilterReligion !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.religion === selectedFilterReligion);
        }

        const sortOrder = sortOrderSelect.value;
        if (sortOrder !== 'default') {
            filteredProducts.sort((a, b) => {
                const priceA = parseFloat(a.price.replace('₹', ''));
                const priceB = parseFloat(b.price.replace('₹', ''));

                if (sortOrder === 'asc') {
                    return priceA - priceB;
                } else {
                    return priceB - priceA;
                }
            });
        }

        displayedProducts = filteredProducts;
        renderProducts(displayedProducts);
    }

    function populateFilterOptions() {
        const uniqueTypes = new Set();
        const uniqueStates = new Set();
        const uniqueReligions = new Set();

        allProducts.forEach(product => {
            if (product.type) uniqueTypes.add(product.type);
            if (product.state) uniqueStates.add(product.state);
            if (product.religion) uniqueReligions.add(product.religion);
        });

        filterCategorySelect.innerHTML = '<option value="all">All Types</option>';
        filterStateSelect.innerHTML = '<option value="all">All States</option>';
        filterReligionSelect.innerHTML = '<option value="all">All Religions</option>';

        Array.from(uniqueTypes).sort().forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            filterCategorySelect.appendChild(option);
        });

        Array.from(uniqueStates).sort().forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            filterStateSelect.appendChild(option);
        });

        Array.from(uniqueReligions).sort().forEach(religion => {
            const option = document.createElement('option');
            option.value = religion;
            option.textContent = religion;
            filterReligionSelect.appendChild(option);
        });

        if (typeParam) {
            filterCategorySelect.value = typeParam;
        }
        if (stateParam) {
            filterStateSelect.value = stateParam;
        }
        if (religionParam) {
            filterReligionSelect.value = religionParam;
        }

        if (categoryParam === 'by-state' || stateParam) {
            filterStateSelect.style.display = 'inline-block';
            filterStateLabel.style.display = 'inline';
            filterCategorySelect.style.display = 'none';
            filterCategorySelect.previousElementSibling.style.display = 'none';
        } else if (categoryParam === 'by-religion' || religionParam) {
            filterReligionSelect.style.display = 'inline-block';
            filterReligionLabel.style.display = 'inline';
            filterCategorySelect.style.display = 'none';
            filterCategorySelect.previousElementSibling.style.display = 'none';
        } else {
            filterStateSelect.style.display = 'none';
            filterStateLabel.style.display = 'none';
            filterReligionSelect.style.display = 'none';
            filterReligionLabel.style.display = 'none';
            filterCategorySelect.style.display = 'inline-block';
            filterCategorySelect.previousElementSibling.style.display = 'inline';
        }
    }

    function setPageContext() {
        let headingText = 'All Products';
        let pageTitleText = 'Our Products';

        if (searchParam) {
            const query = decodeURIComponent(searchParam);
            headingText = `Search Results for "${query}"`;
            pageTitleText = `Search: ${query}`;
        } else if (categoryParam) {
            if (categoryParam === 'new-arrivals') {
                headingText = 'New Arrivals';
            } else if (categoryParam === 'sale') {
                headingText = 'Sale Items';
            } else if (typeParam) {
                headingText = `${typeParam} ${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}`;
                pageTitleText = typeParam + (categoryParam === 'sarees' && !typeParam.toLowerCase().includes('saree') ? ' Sarees' : ' ' + categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1));
            } else if (stateParam) {
                headingText = `Products from ${stateParam}`;
                pageTitleText = `${stateParam} Products`;
            } else if (religionParam) {
                headingText = `Products for ${religionParam}`;
                pageTitleText = `${religionParam} Products`;
            } else {
                headingText = categoryParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + 's';
            }
            pageTitleText = headingText;
        }

        sectionHeading.textContent = headingText;
        pageTitle.textContent = `${pageTitleText} - Indian Queens Wear`;
    }

    filterCategorySelect.addEventListener('change', applyFiltersAndSort);
    filterStateSelect.addEventListener('change', applyFiltersAndSort);
    filterReligionSelect.addEventListener('change', applyFiltersAndSort);
    sortOrderSelect.addEventListener('change', applyFiltersAndSort);

    setPageContext();
    populateFilterOptions();
    applyFiltersAndSort();

    const productsListSearchInput = document.getElementById('productsListSearchInput');
    const productsListSearchButton = document.getElementById('productsListSearchButton');

    if (productsListSearchInput && productsListSearchButton) {
        productsListSearchButton.addEventListener('click', function() {
            const query = productsListSearchInput.value.toLowerCase().trim();
            if (query) {
                window.location.href = `productslist.html?search=${encodeURIComponent(query)}`;
            } else {
                alert('Please enter a search term.');
            }
        });
        productsListSearchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const query = productsListSearchInput.value.toLowerCase().trim();
                if (query) {
                    window.location.href = `productslist.html?search=${encodeURIComponent(query)}`;
                } else {
                    alert('Please enter a search term.');
                }
            }
        });
    }

    const allOptionsButton = document.getElementById('all-options');
    const myMenuBar = document.getElementById('myMenuBar');
    const closeMenuBarButton = document.getElementById('closeMenuBar');
    const hasDropdowns = document.querySelectorAll('.has-dropdown');

    if (allOptionsButton) {
        allOptionsButton.addEventListener('click', function() {
            if (myMenuBar) {
                myMenuBar.classList.add('open');
            }
        });
    }

    if (closeMenuBarButton) {
        closeMenuBarButton.addEventListener('click', function() {
            if (myMenuBar) {
                myMenuBar.classList.remove('open');
                hasDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }

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
        if (myMenuBar && myMenuBar.classList.contains('open') &&
            !myMenuBar.contains(event.target) && !allOptionsButton.contains(event.target)) {
            myMenuBar.classList.remove('open');
            hasDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});