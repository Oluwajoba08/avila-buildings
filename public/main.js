
// navigation
const nav = document.querySelector('.navbar-button');
const navToggles = document.querySelectorAll('.clip-nav');
const cancel = document.querySelector('#cancel-btn');
// home footer dropdowns
const dropdownOne = document.querySelector('.dropdown-one');
const dropdownTwo = document.querySelector('.dropdown-two');
const dropdownThree = document.querySelector('.dropdown-three');
//signup
const signUpButton = document.querySelector('#sign-up-button');
const logInButton = document.querySelector('#log-in-button');
const flexWrapper = document.querySelector('.flex-wrapper');
//eye-icon
const visOn = document.querySelector('.vis-on');
const visOff = document.querySelector('.vis-off');
const enterPasswordLogIn = document.querySelector('#enter-password-log-in');

// marketplace
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const imageSlider = document.querySelector('.image-slider')
const imageSliderContainer = document.querySelector('.image-slider-container')

nav?.addEventListener('click', () =>{
    cancel.classList.toggle('cancel');
    for(const navToggle of navToggles){
    navToggle.classList.toggle('nav-list-visible');
}
})
    
dropdownOne?.addEventListener('click', () =>{
    const dropOne = document.querySelector('.dw1');
    dropOne.classList.toggle('dropdown-visible')
})
dropdownTwo?.addEventListener('click', () =>{
    const dropTwo = document.querySelector('.dw2');
    dropTwo.classList.toggle('dropdown-visible');
})
dropdownThree?.addEventListener('click', () =>{
    const dropThree = document.querySelector('.dw3');
    dropThree.classList.toggle('dropdown-visible');
})

       // signup
// if (window.location.pathname === "/signup/") {
    logInButton?.addEventListener('click', (e) =>{
        if(e.target.classList.contains('m-active')){
        } else {
        e.target.classList.toggle('m-active');
        flexWrapper.classList.add('slide-l');
        flexWrapper.classList.remove('slide-r');
        signUpButton.classList.remove('m-active');
        e.target.style.setProperty('--width', '18px')
        }    
    })

    signUpButton?.addEventListener('click', (e) =>{
        if(e.target.classList.contains('m-active')){
        } else {
        e.target.classList.toggle('m-active');
        flexWrapper.classList.add('slide-r');
        flexWrapper.classList.remove('slide-l');
        logInButton.classList.remove('m-active');
        } 
    })
    // eyeIcon
    function changePasswordType(){
        if (enterPasswordLogIn.type === 'password') {
            enterPasswordLogIn.type = 'text'
        } else {
            enterPasswordLogIn.type = 'password'  
        }
    }
    visOn?.addEventListener('click', (e) =>{
        e.target.classList.add('hidden');
        visOff.classList.remove('hidden');
        changePasswordType()
    })
    visOff?.addEventListener('click', (e) =>{
        e.target.classList.toggle('hidden')
        visOn.classList.remove('hidden');
        changePasswordType()
    }) 
// }

if (imageSlider) {
    // const imagesCount = imageSlider.childElementCount;

    const pointerContainer = document.createElement('div');
    imageSliderContainer.append(pointerContainer)
    pointerContainer.classList.add('pointer-container')

    Array.from(imageSlider.children).forEach((image, index) =>{
        const pointer = document.createElement('div');
        pointer.setAttribute('pointer', `${index}`)
        pointerContainer.append(pointer)
        document.querySelector('.pointer-container div').classList.add('active-pointer')

        pointer.addEventListener('click', () =>{
            const vw = document.body.clientWidth;
            const POINTERID = pointer.getAttribute('pointer');
            document.querySelectorAll('.active-pointer').forEach((child, index) =>{
                child.classList.remove('active-pointer');
            })
            if (pointer.classList.contains('active-pointer')) {
                pointer.classList.add('active-pointer');
            } else {
                pointer.classList.add('active-pointer');
                imageSlider.scrollTo(Number(POINTERID) * vw ,0)
            }
        })
    })

    leftArrow.addEventListener('click', () =>{
        const vw = document.body.clientWidth;
        const scroll = imageSlider.scrollLeft;
        const width = imageSlider.scrollWidth;

        if (scroll === 0) {
            return imageSlider.scrollTo(width, 0)
        }
        imageSlider.scrollTo(scroll - vw, 0)
    })

    rightArrow.addEventListener('click', () =>{
        const vw = document.body.clientWidth;
        const scroll = imageSlider.scrollLeft;
        const width = imageSlider.scrollWidth;

        if (scroll + vw === width || scroll + vw - 1 < width && scroll + vw + 1 > width) {
            return imageSlider.scrollTo(0, 0)
        }
        imageSlider.scrollTo(vw + scroll, 0)
        console.log(imageSlider.scrollLeft/imageSlider.scrollWidth * 100)
    })

    imageSlider.addEventListener('scroll', () =>{
        const vw = document.body.clientWidth;
        const scroll = imageSlider.scrollLeft;
        const width = imageSlider.scrollWidth;
        const scrollPercent = scroll/width * 100;

        const firstPointer = pointerContainer.firstElementChild;
        if (scrollPercent === 0) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            document.querySelector('.pointer-container div').classList.add('active-pointer');

        } else if(scrollPercent < 10) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 20) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 30) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 40) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 50) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 60) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 70) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 80) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 90) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('active-pointer')

        } else if(scrollPercent < 100) {
            document.querySelector('.active-pointer').classList.remove('active-pointer');
            firstPointer.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('active-pointer')
        }
    })
}
