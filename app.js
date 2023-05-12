//JAVASCRIPT FILE
// ------------------------------------- ACTIVITY 1

//This gets the mobile menu
const mobileMenu = document.querySelector(".mobmenu")	

// This gets the bar and atttaches the open function to it
const bar = document.querySelector(".fa-bars")
	bar.addEventListener("click", function(){
		mobileMenu.classList.add("open")
	})
	
// This gets the close button and atttaches the close function to it
const close = document.querySelector(".fa-close")
	close.addEventListener("click", function(){
		mobileMenu.classList.remove("open")
	})

//This exits the mobile menu section to the specific target of a clicked mobile nav link
const mobileList = document.querySelectorAll('.mob-list')
    mobileList.forEach( list => {
        list.addEventListener('click', () => {
            mobileMenu.classList.remove("open")
        })
    })


    
// ------------------------------------- ACTIVITY 2

// Create an array of images to be the background
const imagesCollection = ['./images/p1.jpg', './images/p2.jpg', './images/p3.png', './images/p4.png', './images/p5.png', './images/p6.png', './images/p7.png',
							'./images/p8.png', './images/p9.png', './images/p10.png', './images/p11.png', './images/p12.png', './images/p13.png', './images/p14.png',
							'./images/p15.png', './images/p16.png', './images/p17.png', './images/p18.png', './images/p19.png',
]

let index = 0 //Initialize the index to 0

//this function changes the background image
function handleBackgroundChange(){
    //get the bg image container
    const image = document.querySelector('.main-image')

    //set the image background to image in array dynamically
    image.style.backgroundImage = `url(${imagesCollection[index]} )`
    
    //increment the index to change image
    index++

    //check if we are at the last image, restart from image 1
    if(index > (imagesCollection.length - 1) ){
        index = 0
    }
}
//this fires the function every 0.5 seconds
setInterval(handleBackgroundChange, 500)




const allFaqQuestions = document.querySelectorAll('.faq-question')

    allFaqQuestions.forEach( faqQuestion => {
        faqQuestion.addEventListener('click', () => {
            const faqAnswer = faqQuestion.nextElementSibling

            if(faqAnswer.style.display === 'block'){
                faqAnswer.style.display = 'none'
            }else{
                faqAnswer.style.display = 'block'
            }
        })
    })
    
    
    
    
//An array of the nft images
const nftGallery = [
    {id: '#01', avatar:'./images/p1.jpg', price: '154FTM'},
    {id: '#02', avatar:'./images/p2.jpg', price: '199.7FTM'},
    {id: '#03', avatar:'./images/p3.png', price: '307.5FTM'},
    {id: '#04', avatar:'./images/p4.png', price: '420FTM'},
    {id: '#05', avatar:'./images/p5.png', price: '500.5FTM'},
    {id: '#06', avatar:'./images/p6.png', price: '572FTM'},
    {id: '#07', avatar:'./images/p7.png', price: '577FTM'},
    {id: '#08', avatar:'./images/p8.png', price: '590FTM'},
    {id: '#09', avatar:'./images/p9.png', price: '600FTM'},
    {id: '#10', avatar:'./images/p10.png', price: '610FTM'},
    {id: '#18', avatar:'./images/p19.png', price: '710FTM'}
]
    
//get the container where the nft image and details will stay
const galleryContainer = document.querySelector('.gallery-container')
    //display each nft and their properties 
    nftGallery.forEach(nft => {
    	galleryContainer.innerHTML += `
    		<swiper-slide class="card">
    			<img src= ${nft.avatar} >
    		
    			<div class="desc">
    				<h4 style="color: gray;"> PantheraNFT </h4>
    				<h4 style="color: gray;"> Price </h4>
    				<h4> ${nft.id} </h4>
    				<p> ${nft.price} </p>
    			</div>
    		</swiper-slide>
    	`
    })
    


//An array of the team members 
const teamMembers = [
	{name: 'Leon Flopps', role: 'CEO/Founder', avatar:'./images/pantheraLogo.jpg'},
	{name: 'Cindy Morgan', role: 'Marketer', avatar:'./images/advisor.jpg'},
	{name: 'Cyril', role: 'Developer', avatar:'./images/cyril.jpg'},
	{name: 'Eli Freeman', role: 'Moderator', avatar:'./images/moderator.jpg'}
]

//get the container where the image and members info will stay
const teamContainer = document.querySelector('.team-container')
	//display each member and their properties 
	teamMembers.forEach(member => {
		teamContainer.innerHTML += `
			<swiper-slide class="team-card">
				<img src= ${member.avatar} />
			
				<div class="team-desc">
					<h4> ${member.role} </h4>
					<p> ${member.name} </p>
				</div>
			</swiper-slide>
		`
	})
