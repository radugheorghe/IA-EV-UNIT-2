var slideIndex = 0;

function showSlides()	{
	var i;
	var slides = document.getElementsByClassName("image-slide");
	
	for (i = 0; i < slides.length; i++)	{
		slides[i].style.display = "none";
	}

	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1; }
	
	slides[slideIndex-1].style.display = "inline-block";
	
	setTimeout(showSlides, 3000); // Change image every 3 seconds
}
