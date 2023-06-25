document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');
    
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
      
      window.print(); // Trigger print
      
      // Additional logic or form submission code can be added here
      // ...
    });
  });
  