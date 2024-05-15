function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        lg.style.display= "flex";
    } else {
        menu.style.display = "flex";
        btn.style.display= "flex";
        lg.style.display= "none";
    }
}


// Close search bar when clicking outside of it
document.addEventListener("click", function(event) {
    var searchBar = document.getElementById("menu");
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        menu.style.display = "none";
        lg.style.display= "block";
    }
});

document.addEventListener("DOMContentLoaded", function() {
// Delay showing the sections after the page is loaded
setTimeout(function() {
    document.querySelector('.sec').classList.add('show');
    document.querySelector('.painting').classList.add('show');
}, 500); // Adjust the delay as needed
});




document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    document.getElementById("submit-button").textContent = "Submitting..";
    document.getElementById("submit-button").style.display = "block";
    document.getElementById("submit-button").disabled = true;

    // Collect the form data
    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to your Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbx5afJCgwjDA1f4eUNkzpmH6jpx6L6QZZAb468Uzzt-P_iBSv1N1c6QGGiqkGdPrKR43g/exec",
      {
        redirect: "follow",
        method: "POST",
        body: formDataString,
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    )
      .then(function (response) {
        // Check if the request was successful
        if (response) {
          return response; // Assuming your script returns JSON response
        } else {
          throw new Error("Failed to submit the form.");
        }
      })
      .then(function (data) {
        // Display a success message
        document.getElementById("submit-button").textContent =
          "submitted !";
        document.getElementById("submit-button").style.backgroundColor = "#6a6f4c";
        document.getElementById("submit-button").style.color = "beige";
        document.getElementById("submit-button").disabled = false;
        document.getElementById("form").reset();

        setTimeout(function () {
          document.getElementById("submit-button").textContent = "";
          document.getElementById("submit-button").style.display = "none";
        }, 2600);
      })
      .catch(function (error) {
        // Handle errors, you can display an error message here
        console.error(error);
        document.getElementById("message").textContent =
          "An error occurred while submitting the form.";
        document.getElementById("message").style.display = "block";
      });
  });


  window.onscroll = function() {
    var pos2 = window.pageYOffset;
    var pos3 = window.pageYOffset;
  
  
    if ( pos3 > 500)
  
    {
      document.getElementById('Top').style.opacity=1;
    }
    else {
  
      document.getElementById('Top').style.opacity=0;
    }

    if ( pos2 < 500)

  {
    document.getElementById('show').style.backgroundColor='transparet';
  }
  else {

    document.getElementById('show').style.backgroundColor = '#fefae0';
    document.getElementById('show').style.opacity=1;
  }
  
  }  