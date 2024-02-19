( ()=> {
    let arrayPage = [{page: "gasification", color: "#3AAA35"}, {page: "installation",color: "#3AAA35"}, {page:  "gas_station_chain", color: "#009FE3"},{page: "delivery", color: "#E94E1B"},]
    const HEADER = document.querySelector(".header-body__container")
    const logo = document.querySelector(".logo-sidebar")
    arrayPage.forEach((el)=>{
        
        if(document.location.href.includes(el.page)){
            let headerMobile = document.querySelectorAll([".header-mobile__btn-color"])
            let arrayHeaderBtn = Array.from(headerMobile)
            HEADER.classList.remove("header-body__main")
            HEADER.classList.add("header-body__secondary")
            arrayHeaderBtn.forEach((item)=>{
                item.style.background = `${el.color}`
            })
        } 
        
    })
    console.log(document.location.href)

    if(document.querySelector(".site__list")){
        const menuList = document.querySelector(".site__list")
        menuList.addEventListener('click', menuListClick) 
    }

    function menuListClick(event){
        event.preventDefault()
        console.log(event)
        //при клики на элемент проверяем если похожи на заданное условие 
        //то применяем функцию
        if(event.target.classList.contains('site__link')){
            scrollToContent(event.target, false);
        } else if(event.target.classList.contains('site__hyperlink')){
            //Либо переход по гиперссылки
            document.location.href = event.target.href
        }

    }
    
    function scrollToContent (link, isMobile) {
        if (isMobile && window.getWindowWidth() > window.MOBILE_WIDTH) {
        return;
        }

        const href = link.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

})();