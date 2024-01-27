const axios = require('axios');

// Function to search for a title within XML pages fetched from the web
async function searchTitle(title, xmlUrls) {
    const matchingTitles = [];

    for (const xmlUrl of xmlUrls) {
        try {
            const response = await axios.get(xmlUrl);
            const xmlData = response.data;

            // Parse the XML data and search for the title
            // ... (code for parsing and searching the XML data)

            // Add the matching titles to the array
            // ... (code for adding matching titles to the array)
        } catch (error) {
            console.error(`Error fetching XML from ${xmlUrl}:`, error);
        }
    }

    // Display the matching titles
    console.log('Matching Titles:', matchingTitles);
}

// Call the searchTitle function with the user-entered title and XML URLs
const userEnteredTitle = 'Example Title';
const xmlUrls = ['https://eatatstate.msu.edu/menu/Heritage%20Commons%20at%20Landon/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/The%20Edge%20at%20Akers/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/Brody%20Square/all/all/rss.xml','https://eatatstate.msu.edu/menu/Sparty%27s%20Market/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/South%20Pointe%20at%20Case/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/Holden%20Dining%20Hall/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/Holmes%20Dining%20Hall/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/The%20State%20Room%20at%20Kellogg/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/Thrive%20at%20Owen/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/The%20Vista%20at%20Shaw/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/The%20Gallery%20at%20Snyder%20Phillips/all/all/rss.xml', 'https://eatatstate.msu.edu/menu/The%20Workshop/all/all/rss.xml' ];
searchTitle(userEnteredTitle, xmlUrls);