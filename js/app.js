// handle dark and light

        // vars
        const changeThemeBtns = document.querySelectorAll('.change-theme-btn')

        // funcs
        function changeTheme() {
            document.documentElement.classList.toggle('dark')
            if (document.documentElement.classList.contains('dark')){
                localStorage.setItem('converter-theme','dark')
            } else {
                localStorage.setItem('converter-theme','light')
            }
        }

        // events
        window.onload = ()=>{
            let localstrageTheme = localStorage.getItem('converter-theme')
            if(localstrageTheme){
                document.documentElement.classList.add(localstrageTheme)
            }
        }
        changeThemeBtns.forEach(changeThemeBtn=>{
            changeThemeBtn.addEventListener('click',changeTheme)
        })

// drop down
        // vars
        const langDropDownBtn = document.querySelector('.lang-dropDown-btn')
        const langDropDownContent = document.querySelector('.lang-dropDown-content')
        
        // funcs
        function toggleLangDropDown(){
            langDropDownContent.classList.toggle('hide')
            langDropDownBtn.children[2].classList.toggle('rotate-180') // rotate the arrow
        }

        // event
        langDropDownBtn.addEventListener('click',toggleLangDropDown)


// drag and drop

        // vars
        const dropWindow = document.getElementById('drop-window')

        // funcs

        // events
        dropWindow.addEventListener('dragover',event=>{
            event.preventDefault()
            dropWindow.classList.add('droping')
        })
        
        dropWindow.addEventListener('drop',()=>{
            dropWindow.classList.remove('droping')
        })
        dropWindow.addEventListener('dragleave',()=>{
            dropWindow.classList.remove('droping')
        })