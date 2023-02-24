import { React, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/viewImage.css';

const ViewImage = () => {
  const location = useLocation();
  const data = location.state.staticContext;
  const [imgClassName, setImgClassName] = useState('invisible');
  const [imgClickedSrc, setImgClickedSrc] = useState(null);

  const toggleViewImage = (source) => {
    if (imgClassName === 'invisible') {
      setImgClassName('imageClickedDiv');
      setImgClickedSrc(source);
    } else {
      setImgClassName('invisible');
      setImgClickedSrc(null);
    }
  }

  return (

    <div className="imageContainer">
      <div className="viColumn">
        <img className="image" onClick={() => toggleViewImage(data.src)} src={data.src} alt={data.alt}/>
        {data.moreImages &&
          data.moreImages.map(image => (
            <img className="image" onClick={() => toggleViewImage(image.src)} src={image.src} alt={image.alt}/>
          ))
        }
      </div>

      <div className="viColumn2">
        <h1>{data.title}</h1>
        <p>L = {data.length}"</p>
        <p>W = {data.width}"</p>
        <p>D = {data.depth}"</p>
        <p className="viewDescription">{data.description}</p>
      </div>

      <div className={imgClassName} onClick={() => toggleViewImage()}>
          <img className="imageClicked" src={imgClickedSrc} alt={data.alt}/>
      </div>

    </div>
  )  
}

export default ViewImage;


