const inputPageNode = document.querySelector('.page');
const inputLimitNode = document.querySelector('.limit');
const btnNode = document.querySelector('.request');
const errorNode = document.querySelector('.error');
const resultNode = document.querySelector('.result');

document.addEventListener("DOMContentLoaded", () => {
  storageItems = localStorage.getItem('lastResponse')
  if (storageItems) {
    displayResult(JSON.parse(storageItems));
  }
});

function displayError(msg) {
  errorNode.textContent = msg;
  resultNode.append(errorNode);
};

const useRequest = (page, limit) => {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    return fetch(url)
        .then((response) => {
            return response;
        })
        .then(data => {
            result = data.json();
            return result;
        })
        .catch(() => {
            console.log('error');
        });
};

function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img class="card-image" src="${item.download_url}">
        <p>${item.author}</p>
      </div>
    `;
    cards += cardBlock;
  });
  resultNode.innerHTML = cards;
};

btnNode.addEventListener('click', async () => {
  const page = Number(inputPageNode.value);
  const limit = Number(inputLimitNode.value);
  const pageError = page < 1 || page > 10 || isNaN(page);
  const limitError = limit < 1 || limit > 10 || isNaN(limit);

  if (pageError) {
    displayError('Номер страницы вне диапазона от 1 до 10');
  };

  if (limitError) {
    displayError('Лимит вне диапазона от 1 до 10');
  };

  if (pageError && limitError) {
    displayError('Номер страницы и лимит вне диапазона от 1 до 10');
  } 

  if (!pageError && !limitError) {
    const requestResult = await useRequest(page, limit);
    localStorage.setItem('lastResponse', JSON.stringify(requestResult));
    displayResult(requestResult);
  }
});