import refs from './refs';

const { body, editModalOverlay, selectorCategory } = refs;

// openModalAddBtn.addEventListener('click', handleOpenModal);
// openModalAddBtnMobile.addEventListener('click', handleOpenModal);
// fillTheForm();

function fillTheForm() {
  const formFields = document.querySelectorAll('._edit');
  formFields.forEach(item => {
    if (item.classList.contains('_name')) {
      item.value = 'cat';
    } else if (item.classList.contains('_description')) {
      item.value = 'realy good cat';
    } else if (item.classList.contains('_phone')) {
      item.value = '+380971100370';
    } else if (item.classList.contains('_category')) {
      item.children.forEach(option => {
        if (option.value === 'work') {
          option.selected = true;
        }
      });
    } else if (item.classList.contains('_price')) {
      item.value = '0';
    }
  });
}

function handleOpenModal() {
  editModalOverlay.classList.add('visible');
  body.classList.add('hidden');
}
function fetchCategories() {
  fetch('https://callboard-backend.herokuapp.com/call/categories')
    .then(response => response.json())
    .then(result => {
      let translationOfWords = {
        property: 'Нерухомість',
        transport: 'Транспорт',
        work: 'Робота',
        electronics: 'Електроніка',
        'business and services': 'Бізнес та послуги',
        'recreation and sport': 'Відпочинок та спорт',
        free: 'Віддам безкоштовно',
        trade: 'Обмін',
      };
      const markup = result
        .map(
          category =>
            `<option value="${category}" class="select-option">${translationOfWords[category]}</option> `,
        )
        .join('');
      selectorCategory.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log('error', error));
}

export { fillTheForm };
