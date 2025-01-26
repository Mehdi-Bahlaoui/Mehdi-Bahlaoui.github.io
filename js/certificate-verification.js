// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the 'id' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Define the list of valid certificates with message and image URL for each ID
    const validCertificates = {

    '625298': { message: 'Certificate for Lmhyeb is Verified', imageUrl: 'img/Certs/625298.png' },
    '624297': { message: 'Certificate for El Yaagoubi Bouthayna is Verified', imageUrl: 'img/Certs/624297.png' },
    '624299': { message: 'Certificate for El Yaagoubi Bouthayna is Verified', imageUrl: 'img/Certs/624299.png' },
    '157963': { message: 'Certificate for Abdoullah Alalgui is Verified', imageUrl: 'img/Certs/157963.png' },
    '565263': { message: 'Certificate for Mehdi Bahlaoui is Verified', imageUrl: 'img/Certs/565263.png' },
    '867735': { message: 'Certificate for Fenzari Nihale is Verified', imageUrl: 'img/Certs/867735.png' },
    '817433': { message: 'Certificate for Soukaina Gargallou is Verified', imageUrl: 'img/Certs/817433.png' },
    '382194': { message: 'Certificate for Ouiam Gueddani is Verified', imageUrl: 'img/Certs/382194.png' },
    '555709': { message: 'Certificate for Hanane Rouhli is Verified', imageUrl: 'img/Certs/555709.png' },
    '900425': { message: 'Certificate for Benihya Siham is Verified', imageUrl: 'img/Certs/900425.png' },
    '188052': { message: 'Certificate for Ghazaoui Marwa is Verified', imageUrl: 'img/Certs/188052.png' },
    '403031': { message: 'Certificate for El Azzouzi Chadia is Verified', imageUrl: 'img/Certs/403031.png' },
    '492287': { message: 'Certificate for Himmi Wissal is Verified', imageUrl: 'img/Certs/492287.png' },
    '765298': { message: 'Certificate for Zaiou Imane is Verified', imageUrl: 'img/Certs/765298.png' },
    '642540': { message: 'Certificate for Ouijran Hajar is Verified', imageUrl: 'img/Certs/642540.png' },
    '852824': { message: 'Certificate for Nada Idrissi Oukili is Verified', imageUrl: 'img/Certs/852824.png' },
    '237400': { message: 'Certificate for Errifi Hadil is Verified', imageUrl: 'img/Certs/237400.png' },
    '198623': { message: 'Certificate for Omari Hakim is Verified', imageUrl: 'img/Certs/198623.png' },
    '960076': { message: 'Certificate for Kahlaouinate Yasser is Verified', imageUrl: 'img/Certs/960076.png' },
    '268293': { message: 'Certificate for Oulkaid Imane is Verified', imageUrl: 'img/Certs/268293.png' },
    '392007': { message: 'Certificate for Hiba Zaghou is Verified', imageUrl: 'img/Certs/392007.png' },
    '646092': { message: 'Certificate for Elardi Wiam is Verified', imageUrl: 'img/Certs/646092.png' },
    '609296': { message: 'Certificate for Eddabagh Douae is Verified', imageUrl: 'img/Certs/609296.png' },
    '473039': { message: 'Certificate for Lakhder Zakaria is Verified', imageUrl: 'img/Certs/473039.png' },
    '744259': { message: 'Certificate for Belarbi Zakariae is Verified', imageUrl: 'img/Certs/744259.png' },
    '413620': { message: 'Certificate for Soulaimane Marsli is Verified', imageUrl: 'img/Certs/413620.png' },
    '315574': { message: 'Certificate for Drissi Adam is Verified', imageUrl: 'img/Certs/315574.png' },
    '820409': { message: 'Certificate for Farah Sohail is Verified', imageUrl: 'img/Certs/820409.png' },
    '737392': { message: 'Certificate for Ben Chakhtir Soukaina is Verified', imageUrl: 'img/Certs/737392.png' },
    '367367': { message: 'Certificate for Doae Harmich is Verified', imageUrl: 'img/Certs/367367.png' },
    '261328': { message: 'Certificate for Hajar Abdellaoui is Verified', imageUrl: 'img/Certs/261328.png' },
    '508339': { message: 'Certificate for Nada Chellaoui is Verified', imageUrl: 'img/Certs/508339.png' },
    '711578': { message: 'Certificate for Nada Bennaouar is Verified', imageUrl: 'img/Certs/711578.png' },
    '671488': { message: 'Certificate for Amira El Bir is Verified', imageUrl: 'img/Certs/671488.png' },
    '535402': { message: 'Certificate for Nouhaila Mahta is Verified', imageUrl: 'img/Certs/535402.png' },
    '256890': { message: 'Certificate for Siham Ait Si is Verified', imageUrl: 'img/Certs/256890.png' },
    '805287': { message: 'Certificate for Imanae El Khayati is Verified', imageUrl: 'img/Certs/805287.png' },
    '881122': { message: 'Certificate for Ahmed Bahlaoui is Verified', imageUrl: 'img/Certs/881122.png' },
    '384006': { message: 'Certificate for Eljirari Hasna is Verified', imageUrl: 'img/Certs/384006.png' },
    '207892': { message: 'Certificate for Aya Chehhal is Verified', imageUrl: 'img/Certs/207892.png' },
    '446546': { message: 'Certificate for Aya Ennakhlaoui is Verified', imageUrl: 'img/Certs/446546.png' },
    '483337': { message: 'Certificate for Alae-Eddine El Hassany is Verified', imageUrl: 'img/Certs/483337.png' },
    '382946': { message: 'Certificate for Meryem Aoutem is Verified', imageUrl: 'img/Certs/382946.png' },
    '697083': { message: 'Certificate for Fatima Ezzahrah Aoutem is Verified', imageUrl: 'img/Certs/697083.png' },
    '619772': { message: 'Certificate for Marwa Ardif is Verified', imageUrl: 'img/Certs/619772.png' },
    '721821': { message: 'Certificate for Dihaji Adrae is Verified', imageUrl: 'img/Certs/721821.png' },
    '725582': { message: 'Certificate for Dafi Imane is Verified', imageUrl: 'img/Certs/725582.png' },
    '441788': { message: 'Certificate for Er-Radouany Mounir is Verified', imageUrl: 'img/Certs/441788.png' },
    '648338': { message: 'Certificate for El Machkour Hiba is Verified', imageUrl: 'img/Certs/648338.png' },
    '648339': { message: 'Certificate for El Machkour Hiba is Verified', imageUrl: 'img/Certs/648339.png' },
    '210821': { message: 'Certificate for El Bahja Yasser is Verified', imageUrl: 'img/Certs/210821.png' },
    '459680': { message: 'Certificate for Ninia Houssam is Verified', imageUrl: 'img/Certs/459680.png' },
    '901197': { message: 'Certificate for Elazzouzi Chadia is Verified', imageUrl: 'img/Certs/901197.png' },
    '356746': { message: 'Certificate for Hanane Ed-Diaf is Verified', imageUrl: 'img/Certs/356746.png' },
    '475839': { message: 'Certificate for Farhi Mohammed Amine is Verified', imageUrl: 'img/Certs/475839.png' },
    '668749': { message: 'Certificate for Fatima Khardouli is Verified', imageUrl: 'img/Certs/668749.png' },
    '668745': { message: 'Certificate for Samia El Hadiouia is Verified', imageUrl: 'img/Certs/668745.png' },
    '564564': { message: 'Certificate for Dekkani Karim is Verified', imageUrl: 'img/Certs/564564.png' },
    '387295': { message: 'Certificate for Rajae Tora is Verified', imageUrl: 'img/Certs/387295.png' },
    '563775': { message: 'Certificate for Marwa Ghazoui is Verified', imageUrl: 'img/Certs/563775.png' }

    };

    // Verify if the ID exists in the validCertificates list
    if (validCertificates[id]) {
        const certificate = validCertificates[id];

        // Retrieve and update DOM elements if they exist
        const verificationMessage = document.getElementById('verification-message');
        const certificateImage = document.getElementById('certificate-image');
        const downloadButton = document.getElementById('download-button');
        const linkedinButton = document.getElementById('linkedin-button');
        const infoBox = document.getElementById('info-box');
        const certificateButtons = document.getElementById('certificate-buttons');

        // Update verification message
        if (verificationMessage) {
            verificationMessage.innerText = certificate.message;
            verificationMessage.id = 'verified-certificate';
        }

        // Display certificate image
        if (certificateImage) {
            certificateImage.src = certificate.imageUrl;
        }

        // Set up the download button link
        if (downloadButton) {
            downloadButton.href = certificate.imageUrl;
        }

        // Set up the LinkedIn button functionality
        if (linkedinButton) {
            linkedinButton.addEventListener('click', function () {
                const linkedInCertificationUrl = 'https://www.linkedin.com/in/me/edit/forms/certification/new/?profileFormEntryPoint=PROFILE_COMPLETION_HUB';
                const newWindow = window.open(linkedInCertificationUrl, '_blank');

                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    alert('Please allow pop-ups for this site to add your certificate.');
                } else {
                    alert(`To add your certificate:\n\n1. Enter the Name: Arduino Certificate\n2. Enter the Company: RobotiCore Club\n3. Enter your ID: ${id}\n4. Copy this URL and paste it in the "Diploma URL"\n5. Download the certificate image and add it as Media.\n6. Click Save.\n\nNote: If LinkedIn doesn't open your page, please make sure you are signed in or connected to LinkedIn first.`);
                }
            });
        }

        // Display certificate info box and buttons
        if (infoBox) infoBox.style.display = 'block';
        if (certificateButtons) certificateButtons.style.display = 'flex';

    } else {
        // Handle case where certificate ID is invalid
        const verificationMessage = document.getElementById('verification-message');
        const certificateImage = document.getElementById('certificate-image');

        if (verificationMessage) {
            verificationMessage.innerText = 'Invalid Certificate ID. Please try again or contact support.';
            verificationMessage.id = 'invalid-certificate';
        }

        // Hide certificate image if the ID is invalid
        if (certificateImage) {
            console.log('Certificate image element found, hiding it.');
            certificateImage.style.display = 'none';
        } else {
            console.log('Certificate image element not found.');
        }
    }
});
