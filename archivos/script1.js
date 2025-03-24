// function callback(entries){
// 	entries.forEach(entry=>{
// 		console.log(entry)
// 	});
// }
// const options={
// 	root: null,
// 	rootMargin:'0px',
// 	threshold:0
// }

// const observer = new IntersectionObserver(callback,options);
// const element = document.querySelector('.element');

// observer.observe(element);

const images=document.querySelectorAll('.hero_figure');
function triggerAnimation(entries){
	entries.forEach(entry=>{
		const image = entry.target.querySelector("img");
		// console.log(image);
		image.classList.toggle('unset', entry.isIntersecting);


	});
}
const options = {
	root : null,
	rootMargin:"0px",
	threshold:1,
}
const observer = new IntersectionObserver(triggerAnimation,options);
images.forEach(image=>{
	observer.observe(image);
})
