

        const elements=document.querySelectorAll('.AnimateMe');

        function callbackfunction(entries) {
            entries.forEach(entry => {


                if (entry.isIntersecting) {
                    entry.target.classList.remove("in-view");
                    void entry.target.offsetWidth; // Force reflow
                    entry.target.classList.add("in-view");
                }
                if(!entry.isIntersecting)
                {
                    entry.target.classList.remove("in-view");
                }

            });
        }

        const options = {

            thresholds: 0.5,
            rootMargin: '0px',
            root: null,

        }

        const observer = new IntersectionObserver(
            callbackfunction,
            options
        )


        elements.forEach(el => observer.observe(el));






        window.addEventListener("scroll", function () {
            var navbar = document.getElementById("navbar")
            var logo = document.getElementById("logoid")
            var Upbtn = document.getElementById("UpButton")
            var triggerHeight = window.innerHeight * 0.5;
            if (window.scrollY > triggerHeight) {
                navbar.classList.add("fixed", "bg-[#46424262]", "opacity-100", "h-20","animate-slideIn")
                logo.classList.remove("w-56","lg:w-72")
                navbar.classList.remove("bg-[linear-gradient(180deg,_rgba(0,0,0,0.7)_0%,_rgba(237,221,83,0)_100%)]")
                logo.classList.add("h-20","w-auto")
            } else {
                navbar.classList.remove("fixed", "bg-[#46424262]", "opacity-100", "h-20","animate-slideIn")
                navbar.classList.add("bg-[linear-gradient(180deg,_rgba(0,0,0,0.7)_0%,_rgba(237,221,83,0)_100%)]")
                logo.classList.add("w-56","lg:w-72")
                logo.classList.remove("h-20","w-auto")
            }
            var triggerBtn = window.innerHeight ;
            if (window.scrollY > triggerBtn) {
              Upbtn.classList.remove('hidden')
            }
            else{
              Upbtn.classList.add('hidden')
            }

        });


         const Hidephoto = document.getElementById('FullScreenImage')
         function hidephoto(){

    Hidephoto.classList.add('hidden')

}

        function hidemenu(){

    const sidemenu =document.querySelector('.slidingNAV')
    
    
    sidemenu.classList.remove('SlideInX')
    sidemenu.classList.add('SlideOut')

    navbar.classList.remove('animate-slideUppp')
    navbar.classList.add('animate-slideIn')

}

function showmenu() {
    const sidemenu =document.querySelector('.slidingNAV')
    sidemenu.classList.remove('SlideOut')
  sidemenu.classList.remove('hidden')
    sidemenu.classList.add('SlideInX','flex')


    navbar.classList.remove( 'animate-slideIn')
    navbar.classList.add('animate-slideUppp')
   
   
    

    
}




 let lastChecked = null;

  document.querySelectorAll('input[type="radio"][name="options"]').forEach(radio => {
    radio.addEventListener('click', function () {
      // If same radio is clicked again, uncheck it
      if (lastChecked === this) {
        this.checked = false;
        lastChecked = null;
      } else {
        lastChecked = this;
      }
    });
  });





const CollectionNumber = document.querySelectorAll('.GalleryCollection').length;
console.log('Total Collection of Gallery'+CollectionNumber)
var i=CollectionNumber;
const image =[];
const imglength=[];
const right=[];
const left=[];
const slider=[];
const counter=[];
while(i>0){


   image[i] = document.querySelectorAll(`.images${i}`);
   imglength[i]=image[i].length;
  console.log('The images in group: '+imglength[i]);

   
slider[i] = document.getElementById(`photoslider${i}`);
counter[i]=1;

   i= i-1
}
let num=0;
let lnum=0;
function rightclick(numb)
{
  num=numb;
if(counter[num]<imglength[num]){
 slider[num].style.transform = `translateX(${counter[num] * -100}%)`;
 counter[num]++;
}
 else{
    counter[num]=1;
     slider[num].style.transform = `translateX(0px)`;
    console.log(`images${num} ends`);
 }
}
function leftclick(numbe)
{
  lnum = numbe;
if(counter[lnum]==1){
 slider[lnum].style.transform = `translateX(${(imglength[lnum]-1) * -100}%)`;
 counter[lnum]=imglength[lnum];}
else{
    slider[lnum].style.transform = `translateX(${(counter[lnum]-2) * -100}%)`;
    counter[lnum]--;
}

}




function ShowPhoto(number){
const PhotoShow=document.getElementById(`Gallery${number}`)
document.querySelectorAll('.AllGallery').forEach(collection  =>{
  collection.classList.add('hidden')
});

 PhotoShow.classList.toggle( 'hidden')
 window.location.href = `#Gallery${number}`;
}



document.querySelectorAll('.AllGallery img').forEach(images => {
  images.onclick = () => {
     document.querySelector('#FullScreenImage img').src = images.getAttribute('src');
    document.querySelector('#FullScreenImage').classList.remove('hidden')
     document.querySelector('#FullScreenImage').classList.add('flex')
    
  };
});
