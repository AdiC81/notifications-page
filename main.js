const markAsRead = document.querySelector('#mark-as-read');
const notifComponents = document.querySelectorAll('.notif-component');
const notifContents = document.querySelectorAll('.user-details');
const notifComponentsUnread = document.querySelectorAll('.unread');
let unreadNotif = document.querySelector('.notif-unread');

let count = notifComponentsUnread.length;
unreadNotif.textContent = count;

const removeUnread = (element) => {
    if (element.classList.contains('unread')) {
        unreadNotif.textContent = --count;
        element.classList.remove('unread');
    }
}

const handleClick = () => {
    notifComponents.forEach(notif => {
        removeUnread(notif);
    })
}

markAsRead.addEventListener('click', handleClick);
notifComponents.forEach(notifContent => notifContent.addEventListener('click', (e) => {
    if (e.target.closest('.unread')) removeUnread(e.target.closest('.unread'));
    removeUnread(e.target);
}));