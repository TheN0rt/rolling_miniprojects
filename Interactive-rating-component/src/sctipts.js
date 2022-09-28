var value;
document.querySelectorAll('.rating__value').forEach(elem => {
   elem.addEventListener('click', () => {
      value = setValue(elem)
   })
})
   

document.querySelector('.rating__submit').addEventListener('click', ()=>{
   document.querySelector('.rating').classList.add('none');
   document.querySelector('.thank').classList.remove('none');
   document.querySelector('.thank__selected').textContent = `You selected ${value} out of 5`;
})

const setValue = (item) => {
   const value = item.textContent;
   return value;
}