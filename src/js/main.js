document.addEventListener('DOMContentLoaded', () => {
    styledBtn()
});


document.addEventListener('DOMContentLoaded', () => {
    eventWall();
});

function eventWall() {
    let wall = document.querySelector('[data-wall=attendify]');
    if (wall !== null) {
        AttendifyEventWall.startWall();
        banMessage();
    }
}

function banMessage() {
    let messageBox = document.querySelector('.wall-section__container');
    messageBox.addEventListener('dblclick', () => {
        if (event.target.className === 'text') {
            let id = event.target.parentNode.dataset.id;
            eventWall.toggleBanMessage(id);
        }
    }, true)
}

function styledBtn() {
    let btn = document.querySelector('#btn'),
        size = document.querySelector('.style-type_size'),
        sizeItem = document.querySelectorAll('[data-size]'),
        colorItem = document.querySelectorAll('[data-color]'),
        eventItem = document.querySelectorAll('[data-event]'),
        anchorItem = document.querySelector('[data-anchor]'),
        color = document.querySelector('.style-type_color'),
        events = document.querySelector('.style-type_event'),
        anchor = document.querySelector('.style-type_anchor');
    if(btn !== null){
        size.addEventListener('click', () => {
            delete btn.dataset.anchor;
            anchorItem.classList.remove('active');
            sizeItem.forEach((x) => {
                return x.classList.remove('active')
            });
            event.target.classList.add('active');
            let currentSize = event.target.dataset.size;
            btn.dataset.size = currentSize;
            btn.disabled = false
        }, true);
        color.addEventListener('click', () => {
            delete btn.dataset.anchor;
            anchorItem.classList.remove('active');
            if (event.target.className === 'style-type__select-item active') {
                event.target.classList.remove('active')
            } else {
                colorItem.forEach((x) => {
                    return x.classList.remove('active')
                })
                event.target.classList.add('active')
            }
            let currentColor = event.target.dataset.color;
            btn.dataset.color = currentColor;
            btn.disabled = false
        });
        events.addEventListener('click', () => {
            delete btn.dataset.anchor;
            anchorItem.classList.remove('active');
            eventItem.forEach(x => x.classList.remove('active'));
            event.target.classList.add('active');
            let currentEvent = event.target.dataset.event;
            if (currentEvent === 'disabled') {
                btn.setAttribute('disabled', 'disabled')
            }
            btn.dataset.event = currentEvent
            // if ()
        }, true);
        anchor.addEventListener('click', () => {
            if (btn.dataset.anchor === 'anchor') {
                delete btn.dataset.anchor;
                anchorItem.classList.remove('active')
            } else {
                btn.dataset.event = '';
                eventItem.forEach((x) => {
                    return x.classList.remove('active')
                })
                btn.dataset.anchor = 'anchor';
                anchorItem.classList.add('active')
            }
            btn.disabled = false
        }, true)
    }

}
