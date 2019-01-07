document.addEventListener('DOMContentLoaded', function() {

const button = document.querySelector('.summon-cats');
const allDivs = document.querySelectorAll('.cat-box');

button.addEventListener('click',() => {
  console.log('clicked!');
  axios({
          url: 'http://bitkittens.herokuapp.com/cats.json',
          method: 'GET',
        })
        .then((response) => {
          console.log(response);

          allDivs.forEach( function( div,index ) {
            console.log(div);
            console.log(index);
          const catImage = document.createElement('img');
          catImage.src = response.data.cats[index].photo;
          div.appendChild(catImage);
              });
            });
      });
});
