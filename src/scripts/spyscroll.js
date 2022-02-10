const spyScrolling = () => {
    const sections = document.querySelectorAll('.sezione');
  
    window.onscroll = () => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (let s in sections)
        if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
          const id = sections[ s ].id;
          if (screen.width > 767) {
            if (document.querySelector('.sidebar .active')) {
              document.querySelector('.sidebar .active').classList.remove('active');
            }
            document.querySelector(`.sidebar a[href="#${ id }"]`).classList.add('active');
          } else {
            if (document.querySelector('.sidebar-mo .active')) {
              document.querySelector('.sidebar-mo .active').classList.remove('active');
            }
            document.querySelector(`.sidebar-mo a[href="#${ id }"]`).classList.add('active');
          }
          
        }
    } 
  }

export default spyScrolling