// Hardcoded SVG data
const data = {
    "logos": {
        "items": [
            {
                "name": "Corporate", // Changed from "Brand" to "Corporate"
                "files": [
                    "images/Brand_acr_horiz_color.svg",
                    "images/Brand_acr_horiz_blue.svg",
                    "images/Brand_acr_horiz_black.svg",
                    "images/Brand_acr_horiz_twoColors.svg",
                    "images/Brand_acr_horiz_white.svg"
                ]
            },
            {
                "name": "ACR Dir Link",
                "files": [
                    "images/sBrand_acr_dirlink_color.svg",
                    "images/sBrand_acr_dirlink_blue.svg",
                    "images/sBrand_acr_dirlink_black.svg",
                    "images/sBrand_acr_dirlink_twoColors.svg",
                    "images/sBrand_acr_dirlink_white.svg"
                ]
            },
            {
                "name": "ACR Assess-AI",
                "files": [
                    "images/sBrand_acr_assess_ai_color.svg",
                    "images/sBrand_acr_assess_ai_blue.svg",
                    "images/sBrand_acr_assess_ai_black.svg",
                    "images/sBrand_acr_assess_ai_twoColors.svg",
                    "images/sBrand_acr_assess_ai_white.svg"
                ]
            },
            {
                "name": "Federated Network",
                "files": [
                    "images/proj_fednet_color.svg",
                    "images/proj_fednet_blue.svg",
                    "images/proj_fednet_black.svg",
                    "images/proj_fednet_colorReverse.svg",
                    "images/proj_fednet_white.svg"
                ]
            },
            {
                "name": "TRIAD",
                "files": [
                    "images/proj_triad_color.svg",
                    "images/proj_triad_blue.svg",
                    "images/proj_triad_black.svg",
                    "images/proj_triad_colorReverse.svg",
                    "images/proj_triad_white.svg"
                ]
            },
            {
                "name": "ALZ-NET",
                "files": [
                    "images/proj_alzn_color.svg",
                    "images/proj_alzn_blue.svg",
                    "images/proj_alzn_black.svg",
                    "images/proj_alzn_colorReverse.svg",
                    "images/proj_alzn_white.svg"
                ]
            },
            {
                "name": "TRIAD Uploader",
                "files": [
                    "images/proj_traidUploader_color.svg",
                    "images/proj_traidUploader_blue.svg",
                    "images/proj_traidUploader_black.svg",
                    "images/proj_traidUploader_colorReverse.svg",
                    "images/proj_traidUploader_white.svg"
                ]
            },
            {
                "name": "CIRR",
                "files": [
                    "images/proj_cirr_color.svg",
                    "images/proj_cirr_blue.svg",
                    "images/proj_cirr_black.svg",
                    "images/proj_cirr_colorReverse.svg",
                    "images/proj_cirr_white.svg"
                ]
            }
        ]
    }
};

const svgContainer = document.getElementById('svg-container');
const logoSearchInput = document.getElementById('logo-search');

// Function to create an image element
const createImageElement = (file) => {
    const img = document.createElement('img');
    img.src = file; 
    img.alt = file; 
    img.id = file.split('/').pop().split('.')[0]; 
    return img;
};

// Function to render logos based on filter and search
const renderLogos = (filter = 'all', searchQuery = '') => {
    svgContainer.innerHTML = ''; // Clear the container

    // Iterate over the main items (Corporate, Sub-Brand, Projects)
    data.logos.items.forEach(item => {
        // Check if the item name matches the filter
        if (filter === 'all' || item.name === filter) {
            // Check if the search query matches the logo name
            if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                // If there are files directly under this category
                item.files.forEach(file => {
                    svgContainer.appendChild(createImageElement(file));
                });
            }
        }
    });
};

// Initial render of all logos
renderLogos();

// Event listener for the dropdown
document.getElementById('logo-filter').addEventListener('change', (event) => {
    const filter = event.target.value;
    const searchQuery = logoSearchInput.value; // Get the current search query
    renderLogos(filter, searchQuery);
});

// Event listener for the search input
logoSearchInput.addEventListener('input', (event) => {
    const searchQuery = event.target.value;
    const filter = document.getElementById('logo-filter').value; // Get the current filter
    renderLogos(filter, searchQuery);
});
