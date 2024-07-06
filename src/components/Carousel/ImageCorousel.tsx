import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Carousel.module.css'



const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img  
          className={style.image_block}
          src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 >First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.image_block}          
          src="https://st5.depositphotos.com/4256003/64403/i/450/depositphotos_644034972-stock-photo-beautiful-landscape-mountains-lake-sunset.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className={style.image_block}
          src="https://img.freepik.com/premium-photo/painting-house-front-mountain-range_839169-3125.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className={style.image_block}
          src="https://static.vecteezy.com/system/resources/previews/038/987/054/non_2x/ai-generated-majestic-mountain-peak-nature-beauty-in-panoramic-view-generated-by-ai-free-photo.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
