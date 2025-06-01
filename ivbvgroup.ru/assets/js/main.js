// burger-menu
document.querySelector('#burger-menu').addEventListener('click', () => {
  if (document.querySelector('.burger-menu-container').style.display == 'flex') {
    document.querySelector('.burger-menu-container').style.display = 'none';
    document.querySelector('body').style.overflowY = "visible";

  } else {
    document.querySelector('.burger-menu-container').style.display = 'flex';
    document.querySelector('body').style.overflowY = "hidden";
  }
  console.log('awda');
});



// form
document.querySelector('#btn_next11').addEventListener('click', () => {
  document.querySelector('.inner__form-po__block-form0').style.display = 'none';
  document.querySelector('.inner__form-po__block-form1').style.display = 'block';
});
document.querySelector('#btn_back1').addEventListener('click', () => {
  document.querySelector('.inner__form-po__block-form1').style.display = 'none';
  document.querySelector('.inner__form-po__block-form0').style.display = 'block';
});
document.querySelector('#btn_next1').addEventListener('click', () => {
  document.querySelector('.inner__form-po__block-form1').style.display = 'none';
  document.querySelector('.inner__form-po__block-form2').style.display = 'block';
});


document.querySelector('#btn_back2').addEventListener('click', () => {
  document.querySelector('.inner__form-po__block-form1').style.display = 'block';
  document.querySelector('.inner__form-po__block-form2').style.display = 'none';
});
document.querySelector('#btn_next2').addEventListener('click', () => {
  document.querySelector('.inner__form-po__block-form2').style.display = 'none';
  document.querySelector('.inner__form-po__block-form3').style.display = 'block';
});

document.querySelector('#btn_back3').addEventListener('click', () => {
  document.querySelector('.inner__form-po__block-form3').style.display = 'none';
  document.querySelector('.inner__form-po__block-form2').style.display = 'block';
});

