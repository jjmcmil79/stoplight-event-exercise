
  
  let stopLight = document.querySelector('#stopLight')
  let goLight = document.querySelector('#goLight')
  let slowLight = document.querySelector('#slowLight')
  let stopBtn = document.querySelector('#stopButton')
  let goBtn = document.querySelector('#goButton')
  let slowBtn = document.querySelector('#slowButton')
  let isRed = true;
  let isYellow = true;
  let isGreen = true;

  stopBtn.addEventListener('mouseenter', function (){
    console.log('Entered ' + stopBtn.textContent +' button')
  })
  stopBtn.addEventListener('mouseleave', function (){
    console.log('Left ' + stopBtn.textContent +' button')
  })
  stopBtn.addEventListener('click', red)



  slowBtn.addEventListener('mouseenter', function (){
    console.log('Entered ' + slowBtn.textContent +' button')
  })
  slowBtn.addEventListener('mouseleave', function (){
    console.log('Left ' + slowBtn.textContent +' button')
  })
  slowBtn.addEventListener('click', yellow)



  goBtn.addEventListener('mouseenter', function (){
    console.log('Entered ' + goBtn.textContent +' button')
  })
  goBtn.addEventListener('mouseleave', function (){
    console.log('Left ' + goBtn.textContent +' button')
  })
  goBtn.addEventListener('click', green)
 

  function red() {
    if (isRed) {
      stopLight.style.backgroundColor = 'red'
      console.log('bulb on')
    }
    else {
      stopLight.style.backgroundColor = 'black'
      console.log('bulb off')
    }
    isRed = !isRed;
  }

  function yellow() {
    if (isYellow) {
      slowLight.style.backgroundColor = 'yellow'
      console.log('bulb on')
    }
    else {
      slowLight.style.backgroundColor = 'black'
      console.log('bulb off')
    }
    isYellow = !isYellow;
  }

  function green() {
    if (isGreen) {
      goLight.style.backgroundColor = 'green'
      console.log('bulb on')
    }
    else {
      goLight.style.backgroundColor = 'black'
      console.log('bulb off')
    }
    isGreen = !isGreen;
  }

