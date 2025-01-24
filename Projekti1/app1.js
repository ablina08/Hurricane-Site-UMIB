var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.ash-carousel'),
    list = document.querySelector('.ash-list'), 
    item = document.querySelectorAll('.ash-item'),
    runningTime = document.querySelector('.ash-carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.ash-carousel .ash-list .ash-item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()

/*icons*/
document.addEventListener('DOMContentLoaded', () => {
        const socialLinks = document.querySelectorAll('.ash-icon');
    
        // Mapping platform names to URLs
        const platforms = {
            linkedin: 'https://www.linkedin.com',
            facebook: 'https://www.facebook.com',
            twitter: 'https://www.twitter.com',
            instagram: 'https://www.instagram.com',
        };
    
        socialLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default anchor behavior
    
                const platform = link.getAttribute('data-platform'); // Get platform from data attribute
                const url = platforms[platform];
    
                if (url) {
                    window.open(url, '_blank'); // Open the URL in a new tab
                } else {
                    console.error('Platform URL not found');
                }
            });
        });
    });
//search placeholder open page when entered//
    document.addEventListener("DOMContentLoaded", function() {
        // Get the search input field and button
        const searchInput = document.querySelector(".form-control");
        const searchButton = document.querySelector(".btn-outline-success");
    
        // Function to handle the search and redirect
        searchButton.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent the form from submitting the default way
            
            const query = searchInput.value.toLowerCase();  // Get the search query
    
            // Redirect based on the query
            if (query.includes("our business")) {
                window.location.href = "business.html";  // Redirect to business.html
            } else if (query.includes("sign in")) {
                window.location.href = "user.html";  // Redirect to user.html
            } else if (query.includes("contact")) {
                window.location.href = "contact1.html";  // Redirect to contact1.html
            } else if (query.includes("track weather")) {
                window.location.href = "5.html";  // Redirect to 5.html     
            } else {
                alert("No matching page found!");  // Alert if no match
            }
        });
    });
  
  // Create an array of button ids
const buttonIds = [
    'subscribeBtn1', 'subscribeBtn2', 'subscribeBtn3', 'subscribeBtn4',
    'subscribeBtn5', 'subscribeBtn6', 'subscribeBtn7', 'subscribeBtn8',
    'subscribeBtn9', 'subscribeBtn10', 'subscribeBtn11'
];

// Iterate over the button ids and add the event listener to each button
buttonIds.forEach(id => {
    document.getElementById(id).addEventListener('click', function() {
        // Redirect to a different page (example: "subscribe.html")
        window.location.href = "subscribe.html"; // Update with your desired page URL
    });
});

    
  