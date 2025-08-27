

{/* <p id="love-count" class="mr-2 font-bold text-base sm:text-xl">0</p> */ }

{/* <img id="red-love" class="w-[24px] h-[24px] " src="./assets/heart.png" alt="Heart" /> */ }

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


// loveCounter.js

// document.getElementById('empty-love1').addEventListener('click', function () {
//     // Step 1: Get the red heart image element (optional if you want to style it)
//     const redLove = document.getElementById('red-love');

//     // Step 2: Get the love count text element
//     const loveCount = document.getElementById('love-count');

//     // Step 3: Get the current count and convert it to a number
//     const currentCount = parseInt(loveCount.innerText);

//     // Step 4: Increase the count by 1
//     const newCount = currentCount + 1;

//     // Step 5: Update the count in the navbar
//     loveCount.innerText = newCount;

//     // Step 6: Change the heart icon to solid and red color
//     const heartIcon = document.getElementById('empty-love1');
//     heartIcon.classList.remove('fa-regular');
//     heartIcon.classList.add('fa-solid');
//     heartIcon.style.color = 'red';

//     // Step 7: Optional — Disable further clicks (prevent double-count)
//     heartIcon.style.pointerEvents = 'none';
// });





// < p id = "card-1-serviceName" class="text-[#5c5c5c] font-semibold" >
//     National Emergency
//                         </p >

// < h2 id = "card-1-serviceNumber" class="card-title text-2xl font-bold mb-2" >
//     999
//                         </h2 >


{/* <p id="coin-count" class="mr-2 font-bold text-base sm:text-xl">100</p> */ }

function callService(nameId, numberId) {
    const serviceName = document.getElementById(nameId).innerText

    const serviceNumber = document.getElementById(numberId).innerText

    const coinCountElement = document.getElementById('coin-count');
    const currentCoins = parseInt(coinCountElement.innerText);

     if (currentCoins < 20) {
        alert('Please Purchase more Coin!')
        return
    }


    const newCoinAmount = currentCoins - 20
    coinCountElement.innerText = newCoinAmount


    alert(`Calling' ${serviceName}  ${serviceNumber}`)


    // Add to Call History

    // const history = document.getElementById('call-history');
    // const newEntry = document.createElement('p');
    // newEntry.innerText = `📞 ${serviceName} - ${serviceNumber}`;
    // newEntry.classList.add('text-base', 'text-gray-700', 'bg-gray-100', 'rounded', 'px-4', 'py-2');
    // history.appendChild(newEntry);
}

document.getElementById('call1').addEventListener('click',
    function () {
        callService('card-1-serviceName', 'card-1-serviceNumber')
    }
)