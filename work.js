const container = document.querySelector('.container');
const usersId = document.getElementById('usersId');
const xhr = new XMLHttpRequest();
let res;

xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status === 200) {
    res = JSON.parse(xhr.responseText);
  } else {
    console.log('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  }
  return;
};

usersId.oninput = function () {
  const tempArray = [];
  const all = [];
  if (usersId.value.length > 2 || isNaN(Number(usersId.value))) {
    document.getElementById('usersId').style.background = '#ffc1d156';
  } else if (usersId.value === '') {
    document.getElementById('usersId').style.background = '#fff';
    for (let i = 0; i < res.length; i++) {
        all.push(JSON.stringify(res[i]) + '</br></br>');
    }
    container.innerHTML = all.join('\n');
    return;
  } else {
    document.getElementById('usersId').style.background = '#fff';
    for (let i = 0; i < res.length; i++) {
      if (usersId.value === res[i].userId) {
        tempArray.push(JSON.stringify(res[i]) + '</br></br>');
      }
    }
    container.innerHTML = tempArray.join('\n');
    return;
  }
  return;
};
