const axios = require('axios');

// Array of XML URLs to search through
const xmlUrls = [
    'https://eatatstate.msu.edu/menu/The%20Edge%20at%20Akers/all/2024-01-27',
    'https://example.com/xml2.xml',
    'https://example.com/xml3.xml'
];

// Function to search through XML data
async function searchXMLData(searchTerm) {
    try {
        for (const url of xmlUrls) {
            const response = await axios.get(url);
            const xmlData = response.data;

            // Perform your search logic on the XML data here
            // For example, you can use an XML parser library like xml2js to parse the XML data and search for specific elements or attributes

            // Example search logic:
            if (xmlData.includes(searchTerm)) {
                console.log(`Found "${searchTerm}" in ${url}`);
            }
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Usage example
const searchTerm = 'example';
searchXMLData(searchTerm);
