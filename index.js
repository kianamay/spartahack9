<<<<<<< HEAD
// Assume xmlDoc is your parsed XML document from the previous example

// Function to search for a specific item
function searchForItem(menuXML, searchTerm) {
    var itemTitles = menuXML.querySelectorAll("item title");
  
    // Loop through each item title
    for (var i = 0; i < itemTitles.length; i++) {
      var title = itemTitles[i].textContent;
  
      // Check if the search term is found in the title (case-insensitive)
      if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
        // Log or process the information about the found item
        console.log("Found item:", title);
  
        // If you want to get more details about the item, you can access other elements here
        var link = itemTitles[i].nextElementSibling.textContent;
        console.log("Link:", link);
  
        // You can add more details as needed based on your XML structure
      }
    }
  }
  
  // Example usage: Searching for "Eggs"
  searchForItem(xmlDoc, "Eggs");
  
=======
>>>>>>> f34770e (axios search)
