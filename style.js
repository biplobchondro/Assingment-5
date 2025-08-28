
    // function getElement(id) {
    //     const element = document.getElementById(id);
    //         return element;
    // }



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
  


