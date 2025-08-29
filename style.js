
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

    const callButtons = document.querySelectorAll('.call-button')

      for(i = 0; i < callButtons.length; i++){
      callButtons[i].addEventListener('click', function(e){
      if (e.target.className.includes("call-button")){
      const callButton = e.target;
      const serviceTitle = callButton.parentNode.parentNode.children[1].children[0].innerText
      const serviceName = callButton.parentNode.parentNode.children[1].children[1].innerText
      const serviceNumber = callButton.parentNode.parentNode.children[1].children[2].children[0].innerText
      console.log(serviceNumber);

      if(coin >= 20){
        alert(`📞 Calling ${serviceName} Service  ${serviceNumber}....`)
        coin -= 20;
        coinButton.innerText = coin;
        
        //---------call history--------
      const callHistory = getElement("call-history");
      const now = new Date(); 
      let  hours = now.getHours();
      if(hours === 0) hours = 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      let ampm ; if(hours >= 12) {
          ampm = 'PM';
          } else {
          ampm = 'AM';
      }
      
      const newCart = document.createElement("div");
      newCart.innerHTML = `
      <div class="call-history space-y-2 mt-5">
        <div class="flex justify-between bg-[#FAFAFA] rounded-lg p-4">
            <div>
                <h3 class="font-semibold text-sm text-[#111111]">${serviceTitle}</h3>
                <p class="text-lg  text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <div>
                <p class="text-sm ">${hours}:${minutes}:${seconds} ${ampm}</p>
            </div>
        </div>
    </div>
    `;
    callHistory.append(newCart);
      }
      else{
        alert("❌ আপনার পযাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কযেন লাগবে")
      }
      
      // clear button---
      document.getElementById('clear-btn').addEventListener('click', function(){
        const callClear = getElement('call-history');
        callClear.innerHTML = "";
      })
    }
  }
)}


//------copy button----//
      const copyButton = document.querySelectorAll('.copy-button');
      const copyCount = getElement('copy-count');
      let copy = 0;
      for(let i = 0; i < copyButton.length; i++){
        copyButton[i].addEventListener('click', function(e){
        if (e.target.className.includes("copy-button")){
      const callButton = e.target;
      const serviceNumber = callButton.parentNode.parentNode.children[1].children[2].children[0].innerText
                //--নম্বর কপি হয়েছে--
        const tempInput = document.createElement('textarea');
      tempInput.value = serviceNumber;
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); // মোবাইল সাপোর্ট
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      
        alert(`✅ নম্বর কপি হয়েছে : ${serviceNumber}`)
        copy++;
        copyCount.innerText = copy;
        }
      })
      }
