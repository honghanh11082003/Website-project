 let currentIndex = 0;
 const storeImages = [
     'Sanrio shop 1.jpeg', 'sanrio shop 2.jpeg', 'sanrio shop 3.jpeg', 
     'sanrio shop 4.jpeg', 'sanrio shop 5.jpeg', 'sanrio shop 6.jpeg', 'sanrio shop 7.jpeg'
 ];
 const storeTitles = [
     'Store Interior 1', 'Store Interior 2', 'Store Interior 3', 
     'Store Interior 4', 'Store Interior 5', 'Store Interior 6', 'Store Interior 7'
 ];

 const characterImages = [
     'kitty.jpeg', 'chococat.jpeg', 'cinnamonroll.jpeg', 'Gudetama.jpeg',
     'keroppi.jpeg', 'kuromi.jpeg', 'little twins star.jpeg', 'melody.jpeg',
     'pompompurin.jpeg', 'pochacco.jpeg', 'Badtzmaru.jpeg'
 ];

 const characterTitles = [
     'Hello Kitty', 'Chococat', 'Cinnamonroll', 'Gudetama', 
     'Keroppi', 'Kuromi', 'Little Twin Stars', 'My Melody', 
     'Pompompurin', 'Pochacco', 'Badtz-Maru'
 ];

 function showNextImage(carouselId, images, titleId, titles) {
     currentIndex = (currentIndex + 1) % images.length;
     document.getElementById(carouselId).src = images[currentIndex];
     document.getElementById(titleId).innerText = titles[currentIndex];
 }

 function showPrevImage(carouselId, images, titleId, titles) {
     currentIndex = (currentIndex - 1 + images.length) % images.length;
     document.getElementById(carouselId).src = images[currentIndex];
     document.getElementById(titleId).innerText = titles[currentIndex];
 }

 // Auto change images every 3 seconds for both carousels
 setInterval(() => {
     showNextImage('storeCarousel', storeImages, 'storeTitle', storeTitles);
 }, 3000); 

 setInterval(() => {
     showNextImage('characterCarousel', characterImages, 'characterTitle', characterTitles);
 }, 3000);

// Function to show alert when Buy Now is clicked
function buyNow(productName) {
    alert("Thank you for your interest in buying the " + productName + "!");
}

// Function to scroll to top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to handle form submission
document.getElementById('promotionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const voucher = document.getElementById('voucher').value;

    // Voucher validation (simple example)
    const validVouchers = ['SANRIO2024', 'DISCOUNT10']; // List of valid voucher codes
    let voucherValid = validVouchers.includes(voucher.toUpperCase());

    // Display message
    const messageElement = document.getElementById('formMessage');
    if (voucherValid) {
        messageElement.innerHTML = `Thank you, ${name}! Your form has been submitted successfully.`;
        messageElement.style.color = 'green';
    } else {
        messageElement.innerHTML = 'Invalid voucher code. Please try again.';
        messageElement.style.color = 'red';
    }

    // Clear the form after submission
    document.getElementById('promotionForm').reset();
});


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked')).map(input => input.value);
    const session = document.querySelector('input[name="session"]:checked')?.value;
    const guests = document.getElementById('guests').value;
    const requests = document.getElementById('requests').value;

    // Basic validation check if all required fields are filled
    if (!name || !email || !date || !session || !guests) {
        alert("Please fill out all required fields.");
        return;
    }

    // Prepare confirmation message
    let confirmationMessage = `
        <h3>Booking Confirmation</h3>
        <p>Thank you for booking, ${name}!</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Booking Date:</strong> ${date}</p>
        <p><strong>Session:</strong> ${session}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Services:</strong> ${services.length > 0 ? services.join(', ') : 'No service selected'}</p>
        <p><strong>Special Requests:</strong> ${requests || 'None'}</p>
    `;

    // Display confirmation message
    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;

    // Optionally reset form after submission
    // document.getElementById('bookingForm').reset();
});
