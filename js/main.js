const dom = {
    selectbox: document.getElementById('selectbox'),
    selectboxlist: document.querySelector('.selectbox_list'),
    rooms: document.getElementById('rooms')
}

// Выпадающий список 
dom.selectbox.querySelector('.selectbox_selected').onclick = (event) => {
        dom.selectbox.classList.toggle('open')
}

document.body.onclick = (event) => {
    const { target } = event
    if (
        !target.matches('.selectbox')
        && !target.parentElement.matches('.selectbox')
        && !target.parentElement.parentElement.matches('.selectbox')
    ) {
        dom.selectbox.classList.remove('open');
    }
}

dom.selectboxlist.querySelector('.selectbox_list').onclick = (event) => {
    const { target } = event
    if (target.matches('.selectbox_item')) {
        const value = target.dataset.room
        const activeItem = dom.selectboxlist.querySelector('active')
        activeItem.classList.remove('active')
        dom.selectbox.classList.remove('open')
        console.log(value)
    }
}