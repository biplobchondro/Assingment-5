
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
      }
      else{
        alert("আপনার পযাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কযেন লাগবে")
      }
    }
  }
)}
