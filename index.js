const axios = require('axios');
const { parseString } = require('xml2js');

// Variable to store the search bar input
const input = document.getElementById("searchBar");
const inputValue = input.value;
console.log(inputValue);

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', function() {
  // Store the input from the search bar in the variable
  searchBarInput = document.getElementById('searchBar').value;
  
  // Reset the search bar
  resetSearchBar();
});

// Function to fetch XML data from a remote URL
async function fetchXML(url) {
  try {
    const response = await axios.get(url);
    const xmlData = response.data;
    return xmlData;
  } catch (error) {
    console.error('Error fetching XML:', error);
    return null;
  }
}

// Function to parse XML data
function parseXML(xmlData) {
  return new Promise((resolve, reject) => {
    parseString(xmlData, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// Function to process the parsed data
function processParsedData(parsedData) {
  // TODO: Implement your logic to process the parsed data
  console.log(parsedData);
}

// Function to fetch and parse XML data
async function fetchAndParseXML(url) {
  try {
    const xmlData = await fetchXML(url);
    
    if (xmlData) {
      // Parse the XML data into a JavaScript object
      const parsedData = await parseXML(xmlData);
      
      // Process the parsed data
      processParsedData(parsedData);
    }
  } catch (error) {
    console.error('Error fetching or parsing XML:', error);
  }
}

// Example usage
const xmlUrl = [
  'https://eatatstate.msu.edu/menu/The%20Edge%20at%20Akers/all/2024-01-27',
  'https://eatatstate.msu.edu/menu/Sparty%27s%20Market/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/Brody%20Square/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/South%20Pointe%20at%20Case/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/Holden%20Dining%20Hall/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/Holmes%20Dining%20Hall/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/The%20State%20Room%20at%20Kellogg/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/Heritage%20Commons%20at%20Landon/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/Thrive%20at%20Owen/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/The%20Vista%20at%20Shaw/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/The%20Gallery%20at%20Snyder%20Phillips/all/all/rss.xml',
  'https://eatatstate.msu.edu/menu/The%20Workshop/all/all/rss.xml'
];

fetchAndParseXML(xmlUrl);
