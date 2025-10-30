const iconMenu = document.querySelector('.iconMenu');
const circleEl = document.querySelector('.circle');
const half2El = document.querySelector('.half2');
const coverLayer = document.querySelector('.coverLayer');

iconMenu.addEventListener('click', function(e){
  const leftPanel = document.querySelector('.leftPanel');
  leftPanel.classList.toggle('shown');
  iconMenu.classList.toggle('active');
})

circleEl.addEventListener('click', function(e){
  coverLayer.classList.add('closed');
})

half2El.addEventListener('transitionend', function(){
  document.body.classList.remove('overflow');
  coverLayer.style.display = 'none';
})
