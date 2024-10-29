// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the 'id' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Define the list of valid certificates with message and image URL for each ID
    const validCertificates = {
        '839752': { message: 'Certificate for Oubati Randa is Verified', imageUrl: 'img/Certs/839752.png' },
        '551872': { message: 'Certificate for Aya Chehhal is Verified', imageUrl: 'img/Certs/551872.png' },
        '557476': { message: 'Certificate for Ben-Aissa Aymane is Verified', imageUrl: 'img/Certs/557476.png' },
        '164664': { message: 'Certificate for El Bir Amira is Verified', imageUrl: 'img/Certs/164664.png' },
        '813383': { message: 'Certificate for Aya Ennakhlaoui is Verified', imageUrl: 'img/Certs/813383.png' },
        '774855': { message: 'Certificate for Aferdou Hajar is Verified', imageUrl: 'img/Certs/774855.png' },
        '643537': { message: 'Certificate for Azeroual Youssef is Verified', imageUrl: 'img/Certs/643537.png' },
        '287840': { message: 'Certificate for Siham AitSi is Verified', imageUrl: 'img/Certs/287840.png' },
        '758230': { message: 'Certificate for Taha Zaki is Verified', imageUrl: 'img/Certs/758230.png' },
        '143243': { message: 'Certificate for Oumaima Qsaib is Verified', imageUrl: 'img/Certs/143243.png' },
        '829367': { message: 'Certificate for Lina Sahrourdi is Verified', imageUrl: 'img/Certs/829367.png' },
        '784069': { message: 'Certificate for Lakhder Zakaria is Verified', imageUrl: 'img/Certs/784069.png' },
        '297222': { message: 'Certificate for Nahroud Ikram is Verified', imageUrl: 'img/Certs/297222.png' },
        '205791': { message: 'Certificate for EL Yaagoubi Bouthayna is Verified', imageUrl: 'img/Certs/205791.png' },
        '331976': { message: 'Certificate for El Hassany Alae-Eddine is Verified', imageUrl: 'img/Certs/331976.png' },
        '946600': { message: 'Certificate for Sara Nadi is Verified', imageUrl: 'img/Certs/946600.png' },
        '132928': { message: 'Certificate for Ninia Houssam is Verified', imageUrl: 'img/Certs/132928.png' },
        '291355': { message: 'Certificate for El Machkour Hiba is Verified', imageUrl: 'img/Certs/291355.png' },
        '536621': { message: 'Certificate for Soukaina Gargallon is Verified', imageUrl: 'img/Certs/536621.png' },
        '166448': { message: 'Certificate for Nada Bennaouar is Verified', imageUrl: 'img/Certs/166448.png' },
        '585063': { message: 'Certificate for Tahiri Kaoutar is Verified', imageUrl: 'img/Certs/585063.png' },
        '808323': { message: 'Certificate for Mourid Hiba is Verified', imageUrl: 'img/Certs/808323.png' },
        '555780': { message: 'Certificate for Elardi Wiam is Verified', imageUrl: 'img/Certs/555780.png' },
        '440357': { message: 'Certificate for Drissi Adam is Verified', imageUrl: 'img/Certs/440357.png' },
        '592073': { message: 'Certificate for Bentounsi Inas is Verified', imageUrl: 'img/Certs/592073.png' },
        '521210': { message: 'Certificate for Ouijarran Hajar is Verified', imageUrl: 'img/Certs/521210.png' },
        '132441': { message: 'Certificate for Hrou Imane is Verified', imageUrl: 'img/Certs/132441.png' },
        '438239': { message: 'Certificate for Eddabbagh Douae is Verified', imageUrl: 'img/Certs/438239.png' },
        '532946': { message: 'Certificate for Karti Diaa-eddine is Verified', imageUrl: 'img/Certs/532946.png' },
        '259902': { message: 'Certificate for Mokarram Khalid is Verified', imageUrl: 'img/Certs/259902.png' },
        '125381': { message: 'Certificate for Anouar Habiballah is Verified', imageUrl: 'img/Certs/125381.png' },
        '814064': { message: 'Certificate for Hajar Abdellaoui is Verified', imageUrl: 'img/Certs/814064.png' },
        '260803': { message: 'Certificate for Lmoudn Noura is Verified', imageUrl: 'img/Certs/260803.png' },
        '275753': { message: 'Certificate for Chellaoui Nada is Verified', imageUrl: 'img/Certs/275753.png' },
        '123882': { message: 'Certificate for Eljirari Hasna is Verified', imageUrl: 'img/Certs/123882.png' },
        '103241': { message: 'Certificate for El Hamdi Hossam is Verified', imageUrl: 'img/Certs/103241.png' },
        '734003': { message: 'Certificate for El khayati Imane is Verified', imageUrl: 'img/Certs/734003.png' },
        '649991': { message: 'Certificate for El Bahloul Zineb is Verified', imageUrl: 'img/Certs/649991.png' },
        '889038': { message: 'Certificate for Ouafa Najoua is Verified', imageUrl: 'img/Certs/889038.png' },
        '145473': { message: 'Certificate for Nejsar Marouan is Verified', imageUrl: 'img/Certs/145473.png' },
        '759932': { message: 'Certificate for Abada Ahmed is Verified', imageUrl: 'img/Certs/759932.png' },
        '604855': { message: 'Certificate for El-Radouany Mounir is Verified', imageUrl: 'img/Certs/604855.png' },
        '590097': { message: 'Certificate for El Mansar Rihabe is Verified', imageUrl: 'img/Certs/590097.png' },
        '432725': { message: 'Certificate for Nittema Nerton Kader is Verified', imageUrl: 'img/Certs/432725.png' },
        '730153': { message: 'Certificate for Rim Jouilil is Verified', imageUrl: 'img/Certs/730153.png' },
        '441260': { message: 'Certificate for Zaiou Imane is Verified', imageUrl: 'img/Certs/441260.png' },
        '881479': { message: 'Certificate for Mahta Nouhaila is Verified', imageUrl: 'img/Certs/881479.png' },
        '546033': { message: 'Certificate for Benchahhti Soukaina is Verified', imageUrl: 'img/Certs/546033.png' },
        '670349': { message: 'Certificate for Bjaoui Yehya is Verified', imageUrl: 'img/Certs/670349.png' },
        '283150': { message: 'Certificate for Ayoube Douâa is Verified', imageUrl: 'img/Certs/283150.png' },
        '589580': { message: 'Certificate for Ismail Tahri is Verified', imageUrl: 'img/Certs/589580.png' },
        '867310': { message: 'Certificate for Chbani Saad is Verified', imageUrl: 'img/Certs/867310.png' },
        '246028': { message: 'Certificate for Boumnzel Nor is Verified', imageUrl: 'img/Certs/246028.png' },
        '334959': { message: 'Certificate for Fenzari Nihale is Verified', imageUrl: 'img/Certs/334959.png' },
        '971969': { message: 'Certificate for Errifi Hadil is Verified', imageUrl: 'img/Certs/971969.png' },
        '507181': { message: 'Certificate for Souhail Kabli is Verified', imageUrl: 'img/Certs/507181.png' },
        '604837': { message: 'Certificate for Rabib Hafssa is Verified', imageUrl: 'img/Certs/604837.png' },
        '936955': { message: 'Certificate for Nada Idrissi Oukili is Verified', imageUrl: 'img/Certs/936955.png' },
        '673386': { message: 'Certificate for Ardif Marwa is Verified', imageUrl: 'img/Certs/673386.png' },
        '652382': { message: 'Certificate for Dafi Imane is Verified', imageUrl: 'img/Certs/652382.png' },
        '103227': { message: 'Certificate for Alae Benrahal is Verified', imageUrl: 'img/Certs/103227.png' },
        '628462': { message: 'Certificate for Oulkaid Imane is Verified', imageUrl: 'img/Certs/628462.png' },
        '686555': { message: 'Certificate for El Bahja Yasser is Verified', imageUrl: 'img/Certs/686555.png' },
        '909975': { message: 'Certificate for El Haji Douae is Verified', imageUrl: 'img/Certs/909975.png' },
        '405266': { message: 'Certificate for Himmi Wissal is Verified', imageUrl: 'img/Certs/405266.png' },
        '197870': { message: 'Certificate for Mohamed Taha Etaibi is Verified', imageUrl: 'img/Certs/197870.png' },
        '213525': { message: 'Certificate for El Machmour Adnane is Verified', imageUrl: 'img/Certs/213525.png' },
        '563775': { message: 'Certificate for Marwa Ghazaoui is Verified', imageUrl: 'img/Certs/563775.png' },
        '890461': { message: 'Certificate for Hachimi Oumayma is Verified', imageUrl: 'img/Certs/890461.png' },
        '147910': { message: 'Certificate for Asfouri Ismail is Verified', imageUrl: 'img/Certs/147910.png' },
        '593295': { message: 'Certificate for Mimouni Salma is Verified', imageUrl: 'img/Certs/593295.png' },
        '433938': { message: 'Certificate for Kheddam Yassine is Verified', imageUrl: 'img/Certs/433938.png' },
        '757563': { message: 'Certificate for Mansour Ibtissam is Verified', imageUrl: 'img/Certs/757563.png' },
        '980175': { message: 'Certificate for Soulaimane Marsli is Verified', imageUrl: 'img/Certs/980175.png' },
        '927138': { message: 'Certificate for Madani Fatima Azzahrae is Verified', imageUrl: 'img/Certs/927138.png' },
        '661232': { message: 'Certificate for Rouhli Hanane is Verified', imageUrl: 'img/Certs/661232.png' },
        '862437': { message: 'Certificate for Jriri Jihane is Verified', imageUrl: 'img/Certs/862437.png' },
        '610843': { message: 'Certificate for Lamnaouar Sanae is Verified', imageUrl: 'img/Certs/610843.png' },
        '442849': { message: 'Certificate for Frikel Ibtissame is Verified', imageUrl: 'img/Certs/442849.png' },
        '856734': { message: 'Certificate for Bellahcen Imane is Verified', imageUrl: 'img/Certs/856734.png' },
        '295103': { message: 'Certificate for Najih Haythem is Verified', imageUrl: 'img/Certs/295103.png' },
        '928592': { message: 'Certificate for Med Othmane Charkaoui is Verified', imageUrl: 'img/Certs/928592.png' },
        '192178': { message: 'Certificate for Hiba Zaghou is Verified', imageUrl: 'img/Certs/192178.png' },
        '366548': { message: 'Certificate for Hnine Alae is Verified', imageUrl: 'img/Certs/366548.png' },
        '828914': { message: 'Certificate for Lafdaoui Adnane is Verified', imageUrl: 'img/Certs/828914.png' },
        '670453': { message: 'Certificate for Ait Torhza Med Oussama is Verified', imageUrl: 'img/Certs/670453.png' },
        '827828': { message: 'Certificate for Ismail Elarfaoui is Verified', imageUrl: 'img/Certs/827828.png' },
        '827170': { message: 'Certificate for Lemridi Taha Yassine is Verified', imageUrl: 'img/Certs/827170.png' },
        '325315': { message: 'Certificate for Ouiam Gueddani is Verified', imageUrl: 'img/Certs/325315.png' }
    };

    // Verify if the ID exists in the validCertificates list
    if (validCertificates[String(id)]) {
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
