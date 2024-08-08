function getFormvalue() {
    //Write your code here
	    // Prevent the default form submission behavior
           event.preventDefault();
	   // Get the values of the first name and last name fields
            let firstName = document.getElementById('fname').value;
            let lastName = document.getElementById('lname').value;
	
            
            // Create the alert message
            let message = firstName + " " + lastName;
            
            // Display the alert
            alert(message);

}
