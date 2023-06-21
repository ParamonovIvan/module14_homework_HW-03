
const inputWidthNode = document.querySelector('.width');
const inputHeightNode = document.querySelector('.height');
const btnNode = document.querySelector('.submit');
const resultNode = document.querySelector('.result');

const useRequest = (value1, value2) => {
    return fetch(`https://picsum.photos/${value1}/${value2}`)
        .then((response) => {
            return response;
        })
        .then(data => data.url)
        .catch(() => {
            console.log('error')
        });
};

btnNode.addEventListener('click', async () => {
  value1 = Number(inputWidthNode.value);
  value2 = Number(inputHeightNode.value);
  if (value1 < 100 || value1 > 300 || isNaN(value1) || value2 < 100 || value2 > 300 || isNaN(value2)) {
    resultNode.textContent = 'Одно из чисел вне диапазона от 100 до 300';
  } else {
      const requestResult = await useRequest(value1, value2);
      image = document.createElement('img');
      image.src = requestResult;
      resultNode.append(image);
    }
});



