const addForm = document.querySelector('#add__form');
const searchInput = document.querySelector('#search__input');
const todosList = document.querySelector('#note__list')
let count = 1;

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if(searchInput.value != 0) {
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `
        <input type="checkbox" class="w-[26px] h-[26px] rounded-[5px] border-[2px] border-[#6C63FF] uzgacha">
        <p class="w-[88%] text-[20px]">
            ${searchInput.value} #<span>${count+1}</span>
        </p>
        <button>
            <img src="./images/Vector.svg" alt="" class="w-[20px] h-[20px]">
        </button>
        <button>
            <img src="./images/trash-svgrepo-com 1.svg" alt="" class="w-[20px] h-[20px]">
        </button>  
    `

    listItem.classList.add('w-full', 'py-[16px]', 'border-b-[2px]', 'border-[#6C63FF]', 'flex', 'items-center', 'justify-between')
    todosList.appendChild(listItem)
    }

    searchInput.value = ""
    count += 1;
})