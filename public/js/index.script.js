let $toggler = document.getElementById('toggler'),
    $calculator = document.querySelector('.calculator');

if($calculator.classList.contains('dark')) {
  $toggler.querySelector('#light').style.display = 'block';
  $toggler.querySelector('#dark').style.display = 'none';
} else {
  $toggler.querySelector('#light').style.display = 'none';
  $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function() {
  $calculator.classList.toggle('dark');
  
  if($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
  } else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
  }
})

function onClickButton(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://127.0.0.1:8000/');
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(
    JSON.stringify(
      {
        'button': e,
        'calcopr': document.getElementById('calcopr').textContent,
        'calcres': document.getElementById('calcres').textContent
      }
    )
  );
  xhr.addEventListener('load', function (){
    if (this.readyState === XMLHttpRequest.DONE) {
      const resp = JSON.parse(this.responseText);
      document.getElementById('calcopr').innerHTML = resp.calcopr;
      document.getElementById('calcres').innerHTML = resp.calcres;
    }
  });
}