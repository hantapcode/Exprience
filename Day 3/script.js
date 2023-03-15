const openModalBtn = document.querySelector('.open-modal-btn') 
const closeModalBtn = document.querySelector('.modal__close') 
const iconCloseModal = document.querySelector('.modal__inner--header i') 
const zoneCloseModal = document.querySelector('.modal')

function toggleModal(){
    zoneCloseModal.classList.toggle ('hide')
}

openModalBtn.addEventListener('click',toggleModal)
closeModalBtn.addEventListener('click',toggleModal)
iconCloseModal.addEventListener('click',toggleModal)

zoneCloseModal.addEventListener('click',(e) => {
    if (e.target == e.currentTarget)toggleModal()
})