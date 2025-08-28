
    function getElement(id) {
        const element = document.getElementById(id);
            return element;
    }

// -----------Love button
  const loveButton = document.getElementsByClassName('love-btn');
  const loveCountSpan = document.getElementById('love-count');
  
  let count = 0;
  for(let i = 0; i < loveButton.length; i++){
  loveButton[i].addEventListener('click', function(){
    count++;
    loveCountSpan.innerText = count;
  })
  }
  

//-------------Call button
const coinButton = getElement('coin-count');
let coin = parseInt(coinButton.innerText);
console.log(coin);

const callButtons = document.getElementsByClassName('call-button')

for(i = 0; i < callButtons.length; i++){
  callButtons[i].addEventListener('click', function(e){
    if (e.target.className.includes("call-button")){
      const callButton = e.target;
      const serviceName = callButton.parentNode.parentNode.children[1].children[1].innerText
      const serviceNumber = callButton.parentNode.parentNode.children[1].children[2].children[0].innerText
      console.log(serviceNumber);

      if(coin >= 20){
        alert(`Calling ${serviceName} Service : ${serviceNumber}`)
        coin -= 20;
        coinButton.innerText = coin;

        //---------call history--------
      const callHistory = getElement("call-history");
      const newCart = document.createElement("div");
      newCart.innerHTML = `
      <div class="call-history space-y-2 mt-5">
        <div class="flex justify-between bg-[#FAFAFA] rounded-lg p-4">
            <div>
                <h3 class="font-semibold text-sm text-[#111111]">${serviceName}</h3>
                <p class="text-lg  text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <div>
                <p class="text-sm ">presentigfgjl</p>
            </div>
        </div>
    </div>
    `;
    callHistory.append(newCart);
      }
      else{
        alert("আপনার পযাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কযেন লাগবে")
      }

      // clear button---
      document.getElementById('clear-btn').addEventListener('click', function(){
        const callClear = getElement('call-history');
        callClear.innerHTML = "";
      })

    }
  }
)}
