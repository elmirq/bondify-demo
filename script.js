document.getElementById('baglamaButton').addEventListener('click', function () {
    const card = document.getElementById('popUp');
    card.classList.add('hide-left');

    card.addEventListener('animationend', () => {
      card.remove();
    });
  });
