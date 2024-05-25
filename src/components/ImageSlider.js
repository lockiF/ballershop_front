import React, { useEffect, useState } from 'react';
import './ImageSlider.css'

function ImageSlider(props) {
  const itemNames = props.images;
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchImage = async (imgSrc) => {
      try{
        const response = await fetch('https://api.dropboxapi.com/2/files/search_v2', {
          method: 'POST',
          headers: {
            'Authorization' : `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body:JSON.stringify ({
            query: imgSrc,
            options: {
              file_status: 'active',
              filename_only: true,
              max_results: 1,
            },
            match_field_options: {
              include_highlights: false,
            },
          }),
        });
        const data = await response.json();
        if(data.matches.length > 0){
          const path = data.matches[0].metadata.metadata.path_display;
          const linkResponse = await fetch('https://api.dropboxapi.com/2/files/get_temporary_link', {
            method: 'POST',
          headers: {
            'Authorization' : `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({path}),
          });
          const linkData = await linkResponse.json();
          return linkData.link;
        }
      } catch (error) {
        console.error('Error', error);
        return null
      }
    };
    
const fetchImages = async () =>{ 
  try {
    const urls = []; 
    for (let i = 0; i < itemNames.length; i++) {
       const itemName = itemNames[i]; 
      const imageUrl = await fetchImage(itemName); 
    if (imageUrl) { 
      urls.push(imageUrl);
    }
    }
    setImageUrls(urls);
   } catch (error) {
    console.error( 'Error fetching images:', error);
  }
};
fetchImages();
  }, [itemNames]);


  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage < imageUrls.length - 1 ? prevImage + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage > 0 ? prevImage - 1 : imageUrls.length - 1
    );
  };

  const isAtFirstImage = currentImage === 0;
  const isAtLastImage = currentImage === imageUrls.length - 1;
  return (
    <div>
      <div className="image-container-slider">
      <div className={`left-arrow ${isAtFirstImage ? 'hidden' : ''}`} onClick={prevImage}><img src='/img/arrow.png'/></div>
        <div className="image-slider">
          <img src={imageUrls[currentImage]} alt={`Image ${currentImage}`} />
        </div>
        <div className={`right-arrow ${isAtLastImage ? 'hidden' : ''}`} onClick={nextImage}><img src='/img/arrow.png'/></div>
      </div>
    </div>
  );
}

export default ImageSlider;

