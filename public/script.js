document.getElementById('button1').addEventListener('click', () => {
  fetchData(1);
});

document.getElementById('button2').addEventListener('click', () => {
  fetchData(2);
});

function fetchData(id) {
  fetch(`/api/data/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

