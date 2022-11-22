import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

populateFormData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);

  console.log(formData);
}

function populateFormData() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)); 
  
  if(savedFormData) {
    inputRef.value = savedFormData.email ? savedFormData.email : '';
    textareaRef.value = savedFormData.message ? savedFormData.message : '';
  } 
}

