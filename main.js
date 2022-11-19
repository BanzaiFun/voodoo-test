const selects = document.querySelectorAll('.select');



selects.forEach(select => {
  const selectHeader = select.querySelector('.select__header');
  const selectBody = select.querySelector('.select__body');
  const selectItems = select.querySelectorAll('.select__item');
  const selectCurrent = select.querySelector('.select__current');

  selectHeader.addEventListener('click', () => {
    selectBody.classList.toggle('is-active');
  });

  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      selectCurrent.innerText = item.innerText;

      selectBody.classList.remove('is-active');
    })
  })
});

document.addEventListener('click', (e) => {
  const selectsList = document.querySelectorAll('.select__body');



  if (e.target.className !== 'select__header'
    && e.target.className !== 'select__current') {
    selectsList.forEach(select => {
      select.classList.remove('is-active');
    });
  }
})




