let urlForMovieGallery = `https://api.themoviedb.org/3/movie/top_rated?api_key=d54f1a6164bfe4d1e9a8e04d6e9d345c&language=en-US&page=1`
fetch(urlForMovieGallery)
  .then((value) => value.json())
  .then((response) => {
    console.log(response)
    let galleryCont = document.querySelector('.gallery-cont')
    let arrMovies = response.results.slice(0, 18);
    arrMovies.map((item) => {
      let galleryItem = document.createElement('div')
      galleryItem.className = 'gallery-item'
      let galleryItemCont = document.createElement('div')
      galleryItemCont.className = 'galley-item-cont'
      let galleryImage = document.createElement('div')
      galleryImage.className = 'gallery-image'
      let imageG = document.createElement('img')
      imageG.src = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
      let galleryText = document.createElement('div')
      galleryText.className = 'gallery-text'
      let galleryRating = document.createElement('div')
      galleryRating.className = 'gallery-rating'
      // let icon = document.createElement('i')
      // icon.className = 'fa-solid fa-star'
      let ratingGalleryP = document.createElement('p')
      ratingGalleryP.textContent = `Rating : ${item.vote_average}`;
      let galleryName = document.createElement('div')
      galleryName.className = 'gallery-name'
      let galleryNameh2 = document.createElement('h2')
      galleryNameh2.textContent = item.title;
      let overview = document.createElement('p')
      overview.textContent = `${item.overview.slice(0, 90)}`;
      galleryName.appendChild(galleryNameh2)
      galleryName.appendChild(overview)
      // galleryRating.appendChild(icon)
      galleryRating.appendChild(ratingGalleryP)   
      galleryText.appendChild(galleryRating)
      galleryText.appendChild(galleryName)
      galleryImage.appendChild(imageG)
      galleryItemCont.appendChild(galleryImage)
      galleryItemCont.appendChild(galleryText)
      galleryItem.appendChild(galleryItemCont)
      galleryCont.appendChild(galleryItem)
    })
  })
  

        // scroll   Arrow Button

        const scrollBtn = document.querySelector('.arrow');

        if(scrollBtn) {
            window.addEventListener('scroll', () => {
                if(pageYOffset > (window.innerHeight * 1.2)) {
                    scrollBtn.style.display = 'flex';
                } else {
                    scrollBtn.style.display = 'none';
                }
            });
            scrollBtn.addEventListener('click', () => {
                window.scrollTo(0, 0);
            });
        }