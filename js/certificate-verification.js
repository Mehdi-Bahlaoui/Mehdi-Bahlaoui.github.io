    // Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the 'id' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const validCertificates = {
        '839752': {
            message: 'Certificate for Oubati Randa is Verified',
            imageUrl: 'img/Certs/839752.png',
        },
        '551872': {
            message: 'Certificate for Aya Chehhal is Verified',
            imageUrl: 'img/Certs/551872.png',
        },
        '557476': {
            message: 'Certificate for Ben-Aissa Aymane is Verified',
            imageUrl: 'img/Certs/557476.png',
        },
        '164664': {
            message: 'Certificate for El Bir Amira is Verified',
            imageUrl: 'img/Certs/164664.png',
        },
        '813383': {
            message: 'Certificate for Aya Ennakhlaoui is Verified',
            imageUrl: 'img/Certs/813383.png',
        },
        '774855': {
            message: 'Certificate for Aferdou Hajar is Verified',
            imageUrl: 'img/Certs/774855.png',
        },
        '643537': {
            message: 'Certificate for Azeroual Youssef is Verified',
            imageUrl: 'img/Certs/643537.png',
        },
        '287840': {
            message: 'Certificate for Siham AitSi is Verified',
            imageUrl: 'img/Certs/287840.png',
        },
        '902144': {
            message: 'Certificate for Elgraini Yousra is Verified',
            imageUrl: 'img/Certs/902144.png',
        },
        '153728': {
            message: 'Certificate for Bougroun Rachid is Verified',
            imageUrl: 'img/Certs/153728.png',
        },
        '908226': {
            message: 'Certificate for Laaouina Karim is Verified',
            imageUrl: 'img/Certs/908226.png',
        },
        '168403': {
            message: 'Certificate for Lakhdar Oumaima is Verified',
            imageUrl: 'img/Certs/168403.png',
        },
        '720654': {
            message: 'Certificate for Fikri Mohamed is Verified',
            imageUrl: 'img/Certs/720654.png',
        },
        '637329': {
            message: 'Certificate for Elmassoudi Rachida is Verified',
            imageUrl: 'img/Certs/637329.png',
        },
        '204387': {
            message: 'Certificate for Attar Rida is Verified',
            imageUrl: 'img/Certs/204387.png',
        },
        '829542': {
            message: 'Certificate for Benhammou Anas is Verified',
            imageUrl: 'img/Certs/829542.png',
        },
        '752801': {
            message: 'Certificate for Lafkani Leila is Verified',
            imageUrl: 'img/Certs/752801.png',
        },
        '158239': {
            message: 'Certificate for Khadiri Abdelaziz is Verified',
            imageUrl: 'img/Certs/158239.png',
        },
        '478392': {
            message: 'Certificate for Chayeb Hiba is Verified',
            imageUrl: 'img/Certs/478392.png',
        },
        '824567': {
            message: 'Certificate for Tazi Nawal is Verified',
            imageUrl: 'img/Certs/824567.png',
        },
        '386091': {
            message: 'Certificate for Kamal Omar is Verified',
            imageUrl: 'img/Certs/386091.png',
        },
        '305672': {
            message: 'Certificate for Saidi Fatima is Verified',
            imageUrl: 'img/Certs/305672.png',
        },
        '490287': {
            message: 'Certificate for Hamid Anas is Verified',
            imageUrl: 'img/Certs/490287.png',
        },
        '791065': {
            message: 'Certificate for Ziani Sara is Verified',
            imageUrl: 'img/Certs/791065.png',
        },
        '642935': {
            message: 'Certificate for Barkani Hamza is Verified',
            imageUrl: 'img/Certs/642935.png',
        },
        '803721': {
            message: 'Certificate for Merah Rania is Verified',
            imageUrl: 'img/Certs/803721.png',
        },
        '258396': {
            message: 'Certificate for Khaili Reda is Verified',
            imageUrl: 'img/Certs/258396.png',
        },
        '459823': {
            message: 'Certificate for Azzaoui Salma is Verified',
            imageUrl: 'img/Certs/459823.png',
        },
        '908147': {
            message: 'Certificate for Jalal Mohamed is Verified',
            imageUrl: 'img/Certs/908147.png',
        },
        '375289': {
            message: 'Certificate for Bennis Amine is Verified',
            imageUrl: 'img/Certs/375289.png',
        },
        '714623': {
            message: 'Certificate for Berkani Aya is Verified',
            imageUrl: 'img/Certs/714623.png',
        },
        '289346': {
            message: 'Certificate for Kerroum Hanane is Verified',
            imageUrl: 'img/Certs/289346.png',
        },
        '472930': {
            message: 'Certificate for Zouaoui Ibtissam is Verified',
            imageUrl: 'img/Certs/472930.png',
        },
        '568904': {
            message: 'Certificate for Chakir Hicham is Verified',
            imageUrl: 'img/Certs/568904.png',
        },
        '690147': {
            message: 'Certificate for Amraoui Nizar is Verified',
            imageUrl: 'img/Certs/690147.png',
        },
        '783052': {
            message: 'Certificate for Kabbaj Aya is Verified',
            imageUrl: 'img/Certs/783052.png',
        },
        '239854': {
            message: 'Certificate for Rahmani Rachid is Verified',
            imageUrl: 'img/Certs/239854.png',
        },
        '385729': {
            message: 'Certificate for Essabri Fatima is Verified',
            imageUrl: 'img/Certs/385729.png',
        },
        '482903': {
            message: 'Certificate for Elgourram Karim is Verified',
            imageUrl: 'img/Certs/482903.png',
        },
        '603918': {
            message: 'Certificate for Moutaouakil Sara is Verified',
            imageUrl: 'img/Certs/603918.png',
        },
        '539627': {
            message: 'Certificate for Habchi Hajar is Verified',
            imageUrl: 'img/Certs/539627.png',
        },
        '689731': {
            message: 'Certificate for Medkouri Rania is Verified',
            imageUrl: 'img/Certs/689731.png',
        },
        '238047': {
            message: 'Certificate for Rami Nabil is Verified',
            imageUrl: 'img/Certs/238047.png',
        },
        '596378': {
            message: 'Certificate for Elghezouani Amine is Verified',
            imageUrl: 'img/Certs/596378.png',
        },
        '102937': {
            message: 'Certificate for Souaoui Hicham is Verified',
            imageUrl: 'img/Certs/102937.png',
        },
        '748392': {
            message: 'Certificate for Elhamri Reda is Verified',
            imageUrl: 'img/Certs/748392.png',
        },
        '612387': {
            message: 'Certificate for Rmidi Sara is Verified',
            imageUrl: 'img/Certs/612387.png',
        },
        '529374': {
            message: 'Certificate for Charoukh Meryem is Verified',
            imageUrl: 'img/Certs/529374.png',
        },
        '839726': {
            message: 'Certificate for Bouhali Omar is Verified',
            imageUrl: 'img/Certs/839726.png',
        },
        '318942': {
            message: 'Certificate for Lahmidi Aymane is Verified',
            imageUrl: 'img/Certs/318942.png',
        },
        '924637': {
            message: 'Certificate for Kharbouch Amal is Verified',
            imageUrl: 'img/Certs/924637.png',
        },
        '712394': {
            message: 'Certificate for Fares Anouar is Verified',
            imageUrl: 'img/Certs/712394.png',
        },
        '158273': {
            message: 'Certificate for Kabbouri Imane is Verified',
            imageUrl: 'img/Certs/158273.png',
        },
        '492031': {
            message: 'Certificate for Laamiri Nour is Verified',
            imageUrl: 'img/Certs/492031.png',
        },
        '782403': {
            message: 'Certificate for Ouardani Mohamed is Verified',
            imageUrl: 'img/Certs/782403.png',
        },
        '620394': {
            message: 'Certificate for Khayraoui Rachid is Verified',
            imageUrl: 'img/Certs/620394.png',
        },
        '389471': {
            message: 'Certificate for Halimi Leila is Verified',
            imageUrl: 'img/Certs/389471.png',
        },
        '270943': {
            message: 'Certificate for Laaziz Amina is Verified',
            imageUrl: 'img/Certs/270943.png',
        },
        '438729': {
            message: 'Certificate for Doukali Khalid is Verified',
            imageUrl: 'img/Certs/438729.png',
        },
        '618279': {
            message: 'Certificate for Jebli Saad is Verified',
            imageUrl: 'img/Certs/618279.png',
        },
        '104982': {
            message: 'Certificate for Lamrabet Omar is Verified',
            imageUrl: 'img/Certs/104982.png',
        },
        '839472': {
            message: 'Certificate for Kerroum Khalid is Verified',
            imageUrl: 'img/Certs/839472.png',
        }
    };


    
 // Check if the ID matches any valid certificate
    if (validCertificates[id]) {
        const certificate = validCertificates[id];

        // Access elements only if they exist
        const verificationMessage = document.getElementById('verification-message');
        const certificateImage = document.getElementById('certificate-image');
        const downloadButton = document.getElementById('download-button');
        const linkedinButton = document.getElementById('linkedin-button');
        const infoBox = document.getElementById('info-box');
        const certificateButtons = document.getElementById('certificate-buttons');

        // Check for each element before modifying its properties
        if (verificationMessage) {
            verificationMessage.innerText = certificate.message;
            verificationMessage.id = 'verified-certificate';
        }

        if (certificateImage) {
            certificateImage.src = certificate.imageUrl;
        }

        if (downloadButton) {
            downloadButton.href = certificate.imageUrl;
        }

        if (linkedinButton) {
            linkedinButton.addEventListener('click', function () {
                const linkedInCertificationUrl = 'https://www.linkedin.com/in/me/edit/forms/certification/new/?profileFormEntryPoint=PROFILE_COMPLETION_HUB';
                const newWindow = window.open(linkedInCertificationUrl, '_blank');

                if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
                    alert('Please allow pop-ups for this site to add your certificate.');
                } else {
                    alert(`To add your certificate:\n\n1. Enter the Name: Arduino Certificate\n2. Enter the Company: RobotiCore Club\n3. Enter your ID: ${id}\n4. Copy this URL and paste it in the "Diploma URL"\n5. Download the certificate image and add it as Media.\n6. Click Save.\n\nNote: If LinkedIn doesn't open your page, please make sure you are signed in or connected to LinkedIn first.`);
                }
            });
        }

        if (infoBox) infoBox.style.display = 'block';
        if (certificateButtons) certificateButtons.style.display = 'flex';

    } else {
        const verificationMessage = document.getElementById('verification-message');
        if (verificationMessage) {
            verificationMessage.innerText = 'Invalid Certificate ID. Please try again or contact support.';
            verificationMessage.id = 'invalid-certificate';
        }
    }
});
