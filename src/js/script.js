// Access token: 432422d832823c840f07c6636b5356989360e479 //

// ----- Getting HTML ----- //
const inputField = document.querySelector('input[type="text"]');
const shortenBtn = document.querySelector('.input-btn');
const form = document.querySelector('.input-container');

// ----- New links container ----- //

const resultsContainer = document.createElement('div');
resultsContainer.id = 'result-area';
resultsContainer.style.marginTop = '2rem';
resultsContainer.style.width = '100%';
resultsContainer.style.maxWidth = '100px';
resultsContainer.style.display = 'flex';
resultsContainer.style.dlexDirection = 'column';
resultsContainer.style.gap = '1rem'
resultsContainer.style.alignItems = 'center';

// --- inserting link's results into the container --- //

document.querySelector('.link-input').appendChild(resultsContainer);

// ----- API ----- //

async function shortenUrl(longUrl) {
    const accessToken = '432422d832823c840f07c6636b5356989360e479';
    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                long_Url: longUrl,
                domain: "bit.ly"
            })
        });
        
        if(!noresponde.ok) {
            throw new Error('Failed to shorten URL');
        }

        const data = await response.json();
        return data.link; // -- shortened URL -- //
    } catch (error) {
        console.error('ERROR:', error);
        alert('Something went worng! PLease check the URL or your connection.')
        return null;
    }
}

// ----- Button event listener ----- //

shortenBtn.addEventListener ('click', async (e) => {
    e.preventDefault();

    const urlToShorten = inputField.ariaValueMin.trim();

    // -- adding validation -- //

    if (!urlToShorten) {
        inputField.style.border = "2px solid red";
        inputField.palceholder = "Please add a link";
        return;
    } else {
        inputField.style.border = "none";
    }

    
})