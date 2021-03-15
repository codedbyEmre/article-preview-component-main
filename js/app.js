const profile = document.getElementById('profile');

profile.addEventListener('click', () => {
    document.querySelector('.share-section').classList.toggle('share-active');
    document.querySelector('.profile-icon').classList.toggle('profile-icon-active');
})