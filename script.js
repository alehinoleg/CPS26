const swiper = new Swiper('.services-slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            enabled: false,
        }
    },

    on: {
        disable() {
            //this.wrapperEl.style.transform = 'translate3d(0px, 0px, 0px)';
            this.wrapperEl.style.transitionDuration = '0ms';
            this.wrapperEl.style.transitionDelay = '0ms';
            this.pagination.render();
            this.pagination.update();
        }
    }
});

const buttonContentExpand = document.querySelector('.content__button--expand');
const buttonContentNarrow = document.querySelector('.content__button--narrow');
const contentDescriptionSecond = document.querySelector('.content__description-second');

buttonContentExpand.addEventListener('click', ()=>{
    contentDescriptionSecond.classList.add('content__description-second--visible');
    buttonContentExpand.classList.add('content__button--none');
    buttonContentNarrow.classList.add('content__button--visible');
});

buttonContentNarrow.addEventListener('click', ()=>{
    contentDescriptionSecond.classList.remove('content__description-second--visible');
    buttonContentExpand.classList.remove('content__button--none');
    buttonContentNarrow.classList.remove('content__button--visible');
});

const buttonSwiperExpand = document.querySelector('.content__button--swiper-expand');
const buttonSwiperNarrow = document.querySelector('.content__button--swiper-narrow');
const swiperBlock = document.querySelector('.swiper-wrapper-flex');


buttonSwiperExpand.addEventListener('click', () => {
    swiperBlock.classList.add('swiper-wrapper-flex--expanded');

    buttonSwiperExpand.classList.add('hidden');
    buttonSwiperNarrow.classList.add('visible');
});

buttonSwiperNarrow.addEventListener('click', () => {
    swiperBlock.classList.remove('swiper-wrapper-flex--expanded');

    buttonSwiperExpand.classList.remove('hidden');
    buttonSwiperNarrow.classList.remove('visible');
});