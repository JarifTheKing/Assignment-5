




function emptyLoveCount(id) {
    const redLove = document.getElementById('red-love')


    const loveCount = document.getElementById('love-count')

    const currentAmount = parseInt(loveCount.innerText)
    const newAmount = currentAmount + 1

    loveCount.innerText = newAmount
}

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












// function addCallToHistory(name, number){

//     const callHistoryContainer = document.getElementById('call-history-container');

    

//     // Create one entry (wrapper div)
//     const callEntry = document.createElement('div');
//     callEntry.className = 'flex items-center justify-between rounded-lg mb-6 shadow-sm px-6 py-2';

//     // Left side (service name + number)
//     const leftDiv = document.createElement('div');
//     leftDiv.className = 'items-center gap-2';

//     const nameEl = document.createElement('h3');
//     nameEl.className = 'font-bold text-[#5c5c5c]';
//     nameEl.innerText = name;

//     const numberEl = document.createElement('p');
//     numberEl.className = 'text-[#5c5c5c] font-semibold';
//     numberEl.innerText = number;

//     leftDiv.appendChild(nameEl);
//     leftDiv.appendChild(numberEl);

//     // Right side (time)
//     const timeEl = document.createElement('p');
//     timeEl.className = 'text-[#5c5c5c] font-semibold';
//     timeEl.innerText = new Date().toLocaleTimeString();

//     // Append left + right into entry
//     callEntry.appendChild(leftDiv);
//     callEntry.appendChild(timeEl);

//     // ✅ Add to Call History section
//     const historyWrapper = callHistoryContainer.querySelector('.px-4');
//     historyWrapper.prepend(callEntry);
// }





// function callService(nameId, numberId) {
    
//     const cardTitleName = document.getElementById(cardTitleId).innerText

//     const serviceName = document.getElementById(nameId).innerText

//     const serviceNumber = document.getElementById(numberId).innerText

//     const coinCountElement = document.getElementById('coin-count');
//     const currentCoins = parseInt(coinCountElement.innerText);

//      if (currentCoins < 20) {
//         alert('Please Purchase more Coin!')
//         return
//     }


//     const newCoinAmount = currentCoins - 20
//     coinCountElement.innerText = newCoinAmount

//     alert(`📞 Calling ${serviceName}  ${serviceNumber}`)


//     // _______________ // Add call to history


    
//     addCallToHistory(serviceName, serviceNumber);

// }








// document.getElementById('call1').addEventListener('click',
//     function () {
//         callService('card-1-serviceName', 'card-1-serviceNumber')
//     }
// )
// document.getElementById('call2').addEventListener('click',
//     function () {
//         callService('card-2-serviceName', 'card-2-serviceNumber')
//     }
// )
// document.getElementById('call3').addEventListener('click',
//     function () {
//         callService('card-3-serviceName', 'card-3-serviceNumber')
//     }
// )
// document.getElementById('call4').addEventListener('click',
//     function () {
//         callService('card-4-serviceName', 'card-4-serviceNumber')
//     }
// )
// document.getElementById('call5').addEventListener('click',
//     function () {
//         callService('card-5-serviceName', 'card-5-serviceNumber')
//     }
// )
// document.getElementById('call6').addEventListener('click',
//     function () {
//         callService('card-6-serviceName', 'card-6-serviceNumber')
//     }
// )
// document.getElementById('call7').addEventListener('click',
//     function () {
//         callService('card-7-serviceName', 'card-7-serviceNumber')
//     }
// )
// document.getElementById('call8').addEventListener('click',
//     function () {
//         callService('card-8-serviceName', 'card-8-serviceNumber')
//     }
// )
// document.getElementById('call9').addEventListener('click',
//     function () {
//         callService('card-9-serviceName', 'card-9-serviceNumber')
//     }
// )

























// Function to add a call to history
function addCallToHistory(title, number) {
    const callHistoryContainer = document.getElementById('call-history-container');

    // Create one entry (wrapper div)
    const callEntry = document.createElement('div');
    callEntry.className = 'flex items-center justify-between rounded-lg mb-6 shadow-sm px-6 py-2';

    // Left side (title + number)
    const leftDiv = document.createElement('div');
    leftDiv.className = 'items-center gap-2';

    const titleEl = document.createElement('h3');
    titleEl.className = 'font-bold text-[#5c5c5c]';
    titleEl.innerText = title;

    const numberEl = document.createElement('p');
    numberEl.className = 'text-[#5c5c5c] font-semibold';
    numberEl.innerText = number;

    leftDiv.appendChild(titleEl);
    leftDiv.appendChild(numberEl);

    // Right side (time)
    const timeEl = document.createElement('p');
    timeEl.className = 'text-[#5c5c5c] font-semibold';
    timeEl.innerText = new Date().toLocaleTimeString();

    // Append left + right into entry
    callEntry.appendChild(leftDiv);
    callEntry.appendChild(timeEl);

    // ✅ Add to Call History section
    const historyWrapper = callHistoryContainer.querySelector('.px-4');
    historyWrapper.prepend(callEntry);
}





// Function to make a call
function callService(titleId, numberId) {
    const serviceTitle = document.getElementById(titleId).innerText;
    const serviceNumber = document.getElementById(numberId).innerText;

    const coinCountElement = document.getElementById('coin-count');
    const currentCoins = parseInt(coinCountElement.innerText);

    if (currentCoins < 20) {
        alert('Please Purchase more Coin!');
        return;
    }

    const newCoinAmount = currentCoins - 20;
    coinCountElement.innerText = newCoinAmount;

    alert(`📞 Calling ${serviceTitle} (${serviceNumber})`);

    // ✅ Add call to history (with card title + number)
    addCallToHistory(serviceTitle, serviceNumber);
}

// Attach event listeners for all call buttons
document.getElementById('call1').addEventListener('click', () => {
    callService('card-1-title', 'card-1-serviceNumber');
});
document.getElementById('call2').addEventListener('click', () => {
    callService('card-2-title', 'card-2-serviceNumber');
});
document.getElementById('call3').addEventListener('click', () => {
    callService('card-3-title', 'card-3-serviceNumber');
});
document.getElementById('call4').addEventListener('click', () => {
    callService('card-4-title', 'card-4-serviceNumber');
});
document.getElementById('call5').addEventListener('click', () => {
    callService('card-5-title', 'card-5-serviceNumber');
});
document.getElementById('call6').addEventListener('click', () => {
    callService('card-6-title', 'card-6-serviceNumber');
});
document.getElementById('call7').addEventListener('click', () => {
    callService('card-7-title', 'card-7-serviceNumber');
});
document.getElementById('call8').addEventListener('click', () => {
    callService('card-8-title', 'card-8-serviceNumber');
});
document.getElementById('call9').addEventListener('click', () => {
    callService('card-9-title', 'card-9-serviceNumber');
});