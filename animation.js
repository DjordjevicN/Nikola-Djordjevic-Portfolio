const navBar = document.querySelector('.nav');
const textHi = document.querySelector('.text-hi');
const textName = document.querySelector('.text-name');
const textFront = document.querySelector('.text-front');
let contentBox = document.querySelector('.content');

const contactButton = document.querySelector('.button');

const buttonHome = document.querySelector('.home-li');
const buttonAbout = document.querySelector('.about');
const buttonWork = document.querySelector('.work');
const buttonSkills = document.querySelector('.skills');
const buttonContact = document.querySelector('.contact');
const navList = document.querySelector('.nav-list');
const gitHubLogo = document.querySelector('.gitHub-logo');
const linkedInLogo = document.querySelector('.linkedIn-logo');


// hamburger ******** 
const hamburger = document.querySelector('.hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

const lines = [line1, line2, line3];
const tlm = new TimelineMax({});
const toggleMenu = new TimelineMax({ paused: true, reversed: true });
// hamburger end****

const timeLine = new TimelineMax({})
// const tl = new TimelineMax({})

// first setup animation**********************

document.addEventListener('DOMContentLoaded', () => {
    timeLine
        .from(navBar, 2, { x: -100, opacity: 0, ease: Power4.easeInOut })
        .from(textHi, .50, { x: -150, ease: Circ.easeOut, opacity: 0 }, 'textEnter')
        .from(textName, .50, { x: -100, ease: Circ.easeOut, opacity: 0 }, 'textEnter')
        .from(textFront, .50, { x: -50, ease: Circ.easeOut, opacity: 0 }, 'textEnter')
        .from(gitHubLogo, .50, { y: 50, opacity: 0 }, 'finish')
        .from(linkedInLogo, .50, { y: 50, opacity: 0 }, 'finish')
        .to(navList, .200, { y: -200, opacity: 0 }, 'finish')
        .to(navList, .1, { x: -100 })

})
//////////////////////////////
// buttons set animation

buttonHome.addEventListener('click', () => {

    let homeContent = `<div class="home">
   <div class="home-title">
       <div class="home-title-text">
           <h1 class="text-hi">HI</h1>
           <h1 class="text-name">My name
               is Nikola</h1>
           <h1 class="text-front">I am a Front End Developer</h1>
       </div>
       <div class="socialImages">
         <a href="https://github.com/DjordjevicN" target="_blank">
                 <i class="fab fa-github gitHub-logo socialPic"></i>
                 </a> 

       <a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/" target="_blank">
     <i class="fab fa-linkedin linkedIn-logo socialPic"></i> 
     </a>
     </div>
  </div>`;

    contentBox.innerHTML = homeContent
    let homeTitle = document.querySelector('.home')
    timeLine
        .to(buttonHome, .15, { x: 15 })
        .to(buttonHome, .15, { x: 0 })
        .from(homeTitle, .75, { x: -100, opacity: 0, ease: Circ.easeOut })
})
buttonAbout.addEventListener('click', () => {
    contentBox.innerHTML = '';
    let aboutContent = `
    <div class="about-section">
    <div class="about-content">
        <div class="about-title">
            <h1>About</h1>
        </div>
        <div class="about-text">
        My name is Nikola Đorđević.<br>
        In 2018 I decided to change my career. <br>
        I wanted to learn about what I was really interested in and what I enjoyed doing in my free time<br> 
        and so I began putting serious effort into creating web sites.<br>
         That same year, 2018, I quit my job and devoted myself completely to studying and creating. <br>
<br>
        I had 2 possible roads ahead of me: <br>
        1 – which would lead me back to university<br>
        2 – which would mean for me to study on my own<br>
        I decided to study on my own.
        <br> I began with   <img src="./images/html5.png" alt="">  and  <img src="./images/css3.png" alt=""> . I created a few landing pages. 
        As I have already worked in  <img src="./images/photoshop-cc.svg" alt=""> , <img src="./images/after-effects-cc.svg" alt=""> , <img src="./images/premiere-cc.svg" alt=""> , I independently created mock-ups and turned them into code. 
        <br>When I felt ready to move on, I turned to  <img src="./images/JavaScript-logo.png" alt=""> .<br>
        <br>Then I realized that I needed someone to help me find the right direction. 
        <br>ComTrade had a Front End Development course, with a strong focus on JS.
        I enrolled in it.<br> In September 2019, I graduated with a grade 10.<br> 
        As I was studying, I also worked on JS algorithms on the FreeCodeCamp and I created pages and small application which are not complete as they have been constructed with a specific idea and testing of new options. When I felt comfortable working with JS i went on to learn React and to create applications with it.<br><br>
        Where is the road leading me now?
        I want to be a professional web developer and to progress my knowledge. 
            </p>
        </div>
    </div>
</div>
    `
    contentBox.innerHTML = aboutContent
    const aboutTitle = document.querySelector('.about-title')
    let aboutText = document.querySelector('.about-content');
    timeLine
        .to(buttonAbout, .15, { x: 15 })
        .to(buttonAbout, .15, { x: 0 })
        .from(aboutText, .15, { x: -100, opacity: 0 })
        .to(aboutTitle, 1, { x: -160 })

})
buttonWork.addEventListener('click', () => {
    contentBox.innerHTML = '';
    let workContent = `
    <div class="work-section">
                <div class="about-title">
                    <h1>Work</h1>
                </div>
                <div class="gallery-grid">

                <div class="gallery-box">
                <h1 class="work-title">Real Estate</h1>
                <!-- link to PAGE vv-->
                <a href="https://hopeful-einstein-2a0f32.netlify.com/" target="_blank"><img
                        src="https://raw.githubusercontent.com/DjordjevicN/Real-Estate-gold/master/Screenshot_1.jpg"
                        alt="project"></a>
                <!-- link to PIC ^^-->
                <div class="links">
                    <!-- link to GITHUB vv  -->
                    <a href="https://github.com/DjordjevicN/Real-Estate-gold" target="_blank"> <i
                            class="fab fa-github"></i></a>
                    <!-- link to PAGE -->
                    <a href="https://hopeful-einstein-2a0f32.netlify.com/" target="_blank">
                        <i class="fas fa-globe"></i>
                    </a>
                </div>
            </div>

                    <div class="gallery-box">
                        <h1 class="work-title">Digital Agency</h1>
                        <!-- link to PAGE vv-->
                        <a href="https://djordjevicn.github.io/Digital-Agency/" target="_blank"><img
                                src="https://raw.githubusercontent.com/DjordjevicN/Digital-Agency/master/Screenshot_2.jpg"
                                alt="project"></a>
                        <!-- link to PIC ^^-->
                        <div class="links">
                            <!-- link to GITHUB vv  -->
                            <a href="https://github.com/DjordjevicN/Digital-Agency" target="_blank"> <i
                                    class="fab fa-github"></i></a>
                            <!-- link to PAGE -->
                            <a href="https://djordjevicn.github.io/Digital-Agency/" target="_blank">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>


                    <div class="gallery-box">
                        <h1 class="work-title">Parallax</h1>
                        <!-- link to PAGE vv-->
                        <a href="https://djordjevicn.github.io/Parallax-practise-Mountin/" target="_blank"><img
                                src="https://raw.githubusercontent.com/DjordjevicN/Parallax-practise-Mountin/master/Screenshot_1.jpg"
                                alt="project"></a>
                        <!-- link to PIC ^^-->
                        <div class="links">
                            <!-- link to GITHUB vv  -->
                            <a href="https://github.com/DjordjevicN/Parallax-practise-Mountin" target="_blank"> <i
                                    class="fab fa-github"></i></a>
                            <!-- link to PAGE -->
                            <a href="https://djordjevicn.github.io/Parallax-practise-Mountin/" target="_blank">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>


                    <div class="gallery-box">
                        <h1 class="work-title">eShop Shoes</h1>
                        <!-- link to PAGE vv-->
                        <a href="https://djordjevicn.github.io/tezga-shop-shoes/" target="_blank"><img
                                src="https://raw.githubusercontent.com/DjordjevicN/tezga-shop-shoes/master/Screenshot_3.jpg"
                                alt="project"></a>
                        <!-- link to PIC ^^-->
                        <div class="links">
                            <!-- link to GITHUB vv  -->
                            <a href="https://github.com/DjordjevicN/tezga-shop-shoes" target="_blank"> <i
                                    class="fab fa-github"></i></a>
                            <!-- link to PAGE -->
                            <a href="https://djordjevicn.github.io/tezga-shop-shoes/" target="_blank">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>


                  

                    <div class="gallery-box">
                        <h1 class="work-title">Food order</h1>
                        <!-- link to PAGE vv-->
                        <a href="https://djordjevicn.github.io/eCommerce-Burgelicious/" target="_blank"><img
                                src="https://raw.githubusercontent.com/DjordjevicN/imagesRep/master/sc2.jpg"
                                alt="project"></a>
                        <!-- link to PIC ^^-->
                        <div class="links">
                            <!-- link to GITHUB vv  -->
                            <a href="https://github.com/DjordjevicN/tezga-shop-shoes" target="_blank"> <i
                                    class="fab fa-github"></i></a>
                            <!-- link to PAGE -->
                            <a href="https://djordjevicn.github.io/eCommerce-Burgelicious/" target="_blank">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>

                    <div class="gallery-box">
                        <h1 class="work-title">API movie search</h1>
                        <!-- link to PAGE vv-->
                        <a href="https://djordjevicn.github.io/Movie-Search-API-/" target="_blank"><img
                                src="https://raw.githubusercontent.com/DjordjevicN/Movie-Search-API-/master/moviesearch.jpg"
                                alt="project"></a>
                        <!-- link to PIC ^^-->
                        <div class="links">
                            <!-- link to GITHUB vv  -->
                            <a href="https://github.com/DjordjevicN/Movie-Search-API-" target="_blank"> <i
                                    class="fab fa-github"></i></a>
                            <!-- link to PAGE -->
                            <a href="https://djordjevicn.github.io/Movie-Search-API-/" target="_blank">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>

                    <div class="gallery-box">
                        <h1 class="work-title">Landing</h1>
                        <!-- link to PAGE vv-->
                        <a href="https://djordjevicn.github.io/kids-shall/" target="_blank"><img
                                src="https://raw.githubusercontent.com/DjordjevicN/kids-shall/master/ger.jpg"
                                alt="project"></a>
                        <!-- link to PIC ^^-->
                        <div class="links">
                            <!-- link to GITHUB vv  -->
                            <a href="https://github.com/DjordjevicN/kids-shall" target="_blank"> <i
                                    class="fab fa-github"></i></a>
                            <!-- link to PAGE -->
                            <a href="https://djordjevicn.github.io/kids-shall/" target="_blank">
                                <i class="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>


                </div>
            </div>

`
    contentBox.innerHTML = workContent;
    let workBox = document.querySelector('.work-section')
    timeLine
        .to(buttonWork, .15, { x: 15 })
        .to(buttonWork, .15, { x: 0 })
        .from(workBox, 1, { y: 100, opacity: 0, ease: Circ.easeOut })
})
buttonSkills.addEventListener('click', () => {
    contentBox.innerHTML = '';
    let skillsContent = `
    <div class="skills-section">
            <div class="skills-content">
                <div class="skills-title">
                    <h1>Skills</h1>
                </div>
                <div class="skills-text">
                    <p>My main expertise is Front End Development</p>
                    <p> using HTML, CSS and JavaScript.</p>
                    <p>I am interested in animations and interactive layouts.</p>
                    <p>For animations I use GSAP and Anime.js </p>
                   
                    
                    <p> I am also familiar with Bootstrap and SASS.<p> 
                    


                </div>
            </div>
        </div>
    `
    contentBox.innerHTML = skillsContent
    let skillsBox = document.querySelector('.skills-content')
    timeLine
        .to(buttonSkills, .15, { x: 15 })
        .to(buttonSkills, .15, { x: 0 })
        .from(skillsBox, 1, { x: -100, opacity: 0, ease: Circ.easeOut })
})
buttonContact.addEventListener('click', () => {
    contentBox.innerHTML = '';
    let contactContent = `<div class="contact-section">
    <div class="contact-content">
        <div class="contact-title">
            <h1>Contact</h1>
        </div>
        <div class="contact-text">
            <!-- <p>Belgrade, Serbia</p> -->

        </div>


        <div class="socialImages">
        <a href="https://github.com/DjordjevicN" target="_blank">
        <i class="fab fa-github gitHub-logo socialPic"></i>
             </a>

             <a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/" target="_blank">
             <i class="fab fa-linkedin linkedIn-logo socialPic"></i>
             </a>

                <a href="https://github.com/DjordjevicN" target="_blank">
                <i class="fab fa-twitter-square gitHub-logo socialPic"></i>
                </a>

                <a href="https://github.com/DjordjevicN" target="_blank">
                <i class="fab fa-instagram gitHub-logo socialPic"></i>
                    </a>

            <a href="mailto:nikola.dj.87@gmail.com"> 
            <i class="fas fa-envelope email socialPic"></i>
             </a>

        </div>
    </div>
</div>`
    contentBox.innerHTML = contactContent
    let contactBox = document.querySelector('.contact-content')
    timeLine
        .to(buttonContact, .15, { x: 15 })
        .to(buttonContact, .15, { x: 0 })
        .from(contactBox, 1, { x: -100, opacity: 0, ease: Circ.easeOut })

})


//hamburder animation *****************************


hamburger.addEventListener('mouseenter', () => {
    if (hamburger.classList.contains("js-x")) {
        return;
    }

    tlm.staggerTo(lines, .10, { scaleX: 1.5, repeat: 1, yoyo: true, svgOrigin: '50 50', ease: Power2.easeInOut }, 0.125)

})
toggleMenu
    .to(line2, .125, { scaleX: 0 }, 0)
    .to(line1, .125, { transformOrigin: '50% 50%', y: 8 }, "rot")
    .to(line3, .125, { transformOrigin: '50% 50%', y: -8 }, "rot")
    .to(line1, .125, { rotation: -45, ease: Power2.easeInOut }, 'exit')
    .to(line3, .125, { rotation: 45, ease: Power2.easeInOut }, 'exit')
    .to(navList, .1, { x: 0 })
    .to(navList, .25, { y: 0, opacity: 1 })


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('js-x');
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})

// end hamburger animation******************************