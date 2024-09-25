const circleBorder = document.createElement('div');

export const showLoader = () => {
    document.body.classList.add('loading-indicator');
    document.body.appendChild(circleBorder);
    circleBorder.className = 'circle-border';
};

export const hideLoader = () => {
    document.body.classList.remove('loading-indicator');
    circleBorder.remove();
};