document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    $(document).ready(function() {
        // Event handler for "View More" buttons
        $('.under-link').on('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Determine which carousel to open based on the class of the clicked link
            var slideClass = $(this).attr('class').split(' ').pop();
            var carouselId;
            if (slideClass === 'template-slide-1') {
                carouselId = '#template-mo-zay-hero-carousel-3';
            } else if (slideClass === 'template-slide-2') {
                carouselId = '#template-mo-zay-hero-carousel-4';
            } else if (slideClass === 'template-slide-3') {
                carouselId = '#template-mo-zay-hero-carousel-5';
            } else if (slideClass === 'template-slide-4') {
                carouselId = '#template-mo-zay-hero-carousel-7';
            } else if (slideClass === 'template-slide-5') {
                carouselId = '#template-mo-zay-hero-carousel-8';
            } else if (slideClass === 'template-slide-6') {
                carouselId = '#template-mo-zay-hero-carousel-9';
            }
    
            // Replace the content of #content-section with the cloned carousel content
            $('#content-section').hide(); // Hide content section
            $(carouselId).show(); // Show the selected carousel
        });
    
        // Event handler for close button in the carousel
        $('.carousel .close-button').on('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
    
            // Get the ID of the current carousel
            var carouselId = $(this).closest('.carousel').attr('id');
            
            // Hide the current carousel and show the content section
            $('#' + carouselId).hide();
            $('#content-section').show();
        });
    });

    
    // $(document).ready(function() {
    //     $('.contact-submit-btn').on('click', function(event) {
    //       event.preventDefault();
      
    //       var response = $.post("contact.php", $("#contactForm").serialize());
      
    //       response.done(function(data) {
            
    //         if (data.indexOf('success-message') !== -1) {
                
    //         } else if (data.indexOf('error-message') !== -1) {
                
    //         }
    //         $('#contact-background-image-change').show();
    //       });
          
    //     });
      
    //     $('.carousel .close-button').on('click', function(event) {
    //       event.preventDefault();
      
    //       var carouselId = $(this).closest('.carousel').attr('id');
          
    //       $('#' + carouselId).hide();
    //       $('#contact-background-image').show();
    //     });
    //   });
      

      $(document).ready(function() {
        
        // Listen for the slide change event
        $('.header-carousel').on('changed.owl.carousel', function(event) {
            // Find the current slide index
            var currentSlideIndex = event.item.index;
    
            // Remove the active class from all slides
            $('.header-carousel-item').removeClass('active');
    
            // Add the active class to the current slide
            $('.header-carousel-item').eq(currentSlideIndex).addClass('active');
        });
    });
    
    // Get references to the dropdown button and menu
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Function to toggle the dropdown menu
    function toggleDropdownMenu(event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }

    // Add a click event listener to the button
    dropdownBtn.addEventListener('click', toggleDropdownMenu);

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!dropdownMenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    
  });