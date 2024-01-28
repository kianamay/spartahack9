// Assume xmlDoc is your parsed XML document from the previous example

// Function to search for a specific item
function searchForItem(menuXML, searchTerm) {
  var itemTitles = menuXML.querySelectorAll("item title");

  // Loop through each item title
  for (var i = 0; i < itemTitles.length; i++) {
    var title = itemTitles[i].textContent;

    // Check if the search term is found in the title (case-insensitive)
    if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
      // Display a pop-up with the first matching title
      alert("First matching title: " + title);

      // If you want to get more details about the item, you can access other elements here
      var link = itemTitles[i].nextElementSibling.textContent;
      console.log("Link:", link);

      // You can add more details as needed based on your XML structure

      // Exit the loop after finding the first match
      break;
    }
  }
}

// Example usage: Searching for a user input
var userInput = prompt("Enter a search term:");
searchForItem(xmlDoc, userInput);
  
  // Example usage: Searching for "Eggs"
  searchForItem(xmlDoc, "Eggs");
 