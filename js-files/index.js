



//function to click empty heart 
function emptyLoveCount(id) {
    const redLove = document.getElementById('red-love')


    const loveCount = document.getElementById('love-count')

    const currentAmount = parseInt(loveCount.innerText)
    const newAmount = currentAmount + 1

    loveCount.innerText = newAmount
}

// empty heart cards
document.getElementById('empty-love1').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love1')

    }
)

document.getElementById('empty-love2').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love2')

    }
)

document.getElementById('empty-love3').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love3')

    }
)

document.getElementById('empty-love4').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love4')

    }
)

document.getElementById('empty-love5').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love5')

    }
)

document.getElementById('empty-love6').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love6')

    }
)

document.getElementById('empty-love7').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love7')

    }
)

document.getElementById('empty-love8').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love8')

    }
)

document.getElementById('empty-love9').addEventListener('click',
    function () {
        const getEmptyLove = emptyLoveCount('empty-love9')

    }
)






// Function to add call history 

function callHistoryAdded(title, number) {
    const callHistoryContainer = document.getElementById('call-history-container');


    const callDiv = document.createElement('div');
    callDiv.className = 'flex items-center justify-between rounded-lg mb-6 shadow-sm px-6 py-2';


    const leftDiv = document.createElement('div');
    leftDiv.className = 'items-center gap-2';

    const titleTag = document.createElement('h3');
    titleTag.className = 'font-bold text-[#5c5c5c]';
    titleTag.innerText = title;

    const numberElement = document.createElement('p');
    numberElement.className = 'text-[#5c5c5c] font-semibold';
    numberElement.innerText = number;

    leftDiv.appendChild(titleTag);
    leftDiv.appendChild(numberElement);


    const timeP = document.createElement('p');
    timeP.className = 'text-[#5c5c5c] font-semibold';
    timeP.innerText = new Date().toLocaleTimeString();


    callDiv.appendChild(leftDiv);
    callDiv.appendChild(timeP);

    // Append Call History div
    const callHistoryList = callHistoryContainer.querySelector('.px-4');
    callHistoryList.append(callDiv);
}










// Function for making the call
function callService(titleId, serviceNameId, numberId) {
    const serviceTitle = document.getElementById(titleId).innerText;
    const serviceName = document.getElementById(serviceNameId).innerText;
    const serviceNumber = document.getElementById(numberId).innerText;

    const coinCountId = document.getElementById('coin-count');
    const availableCoins = parseInt(coinCountId.innerText);

    if (availableCoins < 20) {
        alert('Please Purchase more Coin!');
        return;
    }

    const newCoinAmount = availableCoins - 20;
    coinCountId.innerText = newCoinAmount;

    alert(`📞 Calling... ${serviceName} (${serviceNumber})`);

    // Call History -(function call) 
    callHistoryAdded(serviceTitle, serviceNumber);
}







// event listener for cards
document.getElementById('call1').addEventListener('click',
    function () {
        callService('card-1-title', 'card-1-serviceName', 'card-1-serviceNumber');
    }
);
document.getElementById('call2').addEventListener('click',
    function () {
        callService('card-2-title', 'card-2-serviceName', 'card-2-serviceNumber');
    }
);
document.getElementById('call3').addEventListener('click',
    function () {
        callService('card-3-title', 'card-3-serviceName', 'card-3-serviceNumber');
    }
);
document.getElementById('call4').addEventListener('click',
    function () {
        callService('card-4-title', 'card-4-serviceName', 'card-4-serviceNumber');
    }
);
document.getElementById('call5').addEventListener('click',
    function () {
        callService('card-5-title', 'card-5-serviceName', 'card-5-serviceNumber');

    }
);
document.getElementById('call6').addEventListener('click',
    function () {
        callService('card-6-title', 'card-6-serviceName', 'card-6-serviceNumber');
    }
);
document.getElementById('call7').addEventListener('click',
    function () {
        callService('card-7-title', 'card-7-serviceName', 'card-7-serviceNumber');

    }
);
document.getElementById('call8').addEventListener('click',
    function () {
        callService('card-8-title', 'card-8-serviceName', 'card-8-serviceNumber');
    }
);
document.getElementById('call9').addEventListener('click',
    function () {
        callService('card-9-title', 'card-9-serviceName', 'card-9-serviceNumber');
    }
);



// Clear btn event
document.getElementById('clear-btn').addEventListener('click',
    function () {
        const callHistoryContainer = document.getElementById('call-history-container');
        const callHistoryList = callHistoryContainer.querySelector('.px-4');

        callHistoryList.innerHTML = '';
    }
)