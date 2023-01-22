function sayAboutJS() {
    console.log('Я учу JavaScript!');
}

sayAboutJS();

const cats = document.querySelector('.cats');
const scroller = cats.querySelector('.scroller');
const nextBtn = cats.querySelector('.btn.next');
const prevBtn = cats.querySelector('.btn.prev');
const itemWidth = cats.querySelector('.item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
        scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
    else
        scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
}
function scrollToPrevItem() {
    if(scroller.scrollLeft != 0)
        scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
    else
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
}