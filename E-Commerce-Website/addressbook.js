const contactForm = document.getElementById('contactForm');
const contactListDiv = document.getElementById('contactList');
const submitContactBtn = document.getElementById('submitContactBtn');
const addContactFormSection = document.getElementById('addContactForm');
const showAddFormBtn = document.getElementById('showAddFormBtn');
const fullNameInput = document.getElementById('fullName');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const confirmationModal = document.getElementById('confirmationModal');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
let editingContactId = null;
let contactToDelete = null;
function createContactItem(id, fullName, phone, address) {
    const contactItem = document.createElement('div');
    contactItem.classList.add('contact-item');
    contactItem.dataset.id = id;
    contactItem.innerHTML = `
        <div class="contact-icon"><i class="fas fa-user"></i></div>
        <div class="contact-details">
            <h4 class="contact-name">${fullName}</h4>
            <p class="contact-phone"><i class="fas fa-phone-alt"></i> ${phone}</p>
            <p class="contact-address"><i class="fas fa-map-marker-alt"></i> ${address}</p>
        </div>
        <div class="contact-actions">
            <button class="action-btn edit" title="Edit Contact" data-action="edit"><i class="fas fa-edit"></i></button>
            <button class="action-btn delete" title="Delete Contact" data-action="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
    `;
    return contactItem;
}
function showFormAndClear() {
    addContactFormSection.style.display = 'block';
    contactForm.reset();
    editingContactId = null;
    submitContactBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Submit New Contact';
    addContactFormSection.scrollIntoView({ behavior: 'smooth' });
}
function hideForm() {
    addContactFormSection.style.display = 'none';
}
function showConfirmationModal(contactItem) {
    contactToDelete = contactItem;
    confirmationModal.classList.add('visible');
}
function hideConfirmationModal() {
    confirmationModal.classList.remove('visible');
    contactToDelete = null;
}
showAddFormBtn.addEventListener('click', showFormAndClear);
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = fullNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    if (!fullName || !phone) {
        console.error("Full Name and Phone Number are required.");
        return;
    }
    if (editingContactId) {
        const existingContactItem = document.querySelector(`.contact-item[data-id="${editingContactId}"]`);
        if (existingContactItem) {
            existingContactItem.querySelector('.contact-name').textContent = fullName;
            existingContactItem.querySelector('.contact-phone').innerHTML = `<i class="fas fa-phone-alt"></i> ${phone}`;
            existingContactItem.querySelector('.contact-address').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${address}`;
        }
    } else {
        const newId = Date.now();
        const newContactItem = createContactItem(newId, fullName, phone, address);
        contactListDiv.appendChild(newContactItem);
    }
    contactForm.reset();
    hideForm();
});
contactListDiv.addEventListener('click', function(event) {
    const targetButton = event.target.closest('.action-btn');
    if (targetButton) {
        const action = targetButton.dataset.action;
        const contactItem = targetButton.closest('.contact-item');
        const contactId = contactItem.dataset.id;
        if (action === 'delete') {
            showConfirmationModal(contactItem);
        } else if (action === 'edit') {
            const name = contactItem.querySelector('.contact-name').textContent;
            const phoneMatch = contactItem.querySelector('.contact-phone').textContent.match(/[\d\s\+\-\(\)]+/);
            const phone = phoneMatch ? phoneMatch[0].trim() : '';
            const addressMatch = contactItem.querySelector('.contact-address').textContent.match(/(?<=^[\s\S]*?\s)([\s\S]*)/);
            const address = addressMatch ? addressMatch[1].trim() : '';
            fullNameInput.value = name;
            phoneInput.value = phone;
            addressInput.value = address;
            editingContactId = contactId;
            submitContactBtn.innerHTML = '<i class="fas fa-save"></i> Update Contact';
            showFormAndClear();
            fullNameInput.value = name;
            phoneInput.value = phone;
            addressInput.value = address;
            editingContactId = contactId;
            submitContactBtn.innerHTML = '<i class="fas fa-save"></i> Update Contact';
        }
    }
});
confirmDeleteBtn.addEventListener('click', function() {
    if (contactToDelete) {
        const contactId = contactToDelete.dataset.id;
        contactToDelete.remove();
        if (editingContactId === contactId) {
            contactForm.reset();
            editingContactId = null;
            submitContactBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Add New Address';
            hideForm();
        }
    }
    hideConfirmationModal();
});
cancelDeleteBtn.addEventListener('click', hideConfirmationModal);
document.addEventListener('DOMContentLoaded', hideForm);