function callback(entries){
	entries.forEach(entry=>{
		console.log(entry)
	});
}
const options={
	root: null,
	rootMargin:'0px',
	threshold:0
}

const observer = new IntersectionObserver(callback,options);
const element = document.querySelector('.element');

observer.observe(element);

