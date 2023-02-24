import React from 'react';
import '../css/viewImage.css';

class ViewImage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      image: props.location.state.staticContext,
      imgClassName: "invisible",
      imgClickedSrc: null,
    }
  }

  toggleViewImage(source) {
    if (this.state.imgClassName === "invisible") {
      this.setState({imgClassName: "imageClickedDiv", imgClickedSrc: source});
    } else {
      this.setState({imgClassName: "invisible", imgClickedSrc: null});
    }
  }

  render() {
    return (

      <div className="imageContainer">
        <div className="viColumn">
          <img className="image" onClick={() => this.toggleViewImage(this.state.image.src)} src={this.state.image.src} alt={this.state.image.alt}/>
          {this.state.image.moreImages &&
            this.state.image.moreImages.map(image => (
              <img className="image" onClick={() => this.toggleViewImage(image.src)} src={image.src} alt={image.alt}/>
            ))
          }
        </div>

        <div className="viColumn2">
          <h1>{this.state.image.title}</h1>
          <p>L = {this.state.image.length}"</p>
          <p>W = {this.state.image.width}"</p>
          <p>D = {this.state.image.depth}"</p>
          <p className="viewDescription">{this.state.image.description}</p>
        </div>

        <div className={this.state.imgClassName} onClick={() => this.toggleViewImage()}>
            <img className="imageClicked" src={this.state.imgClickedSrc} alt={this.state.image.alt}/>
        </div>

      </div>
    )
  }
}

export default ViewImage;


