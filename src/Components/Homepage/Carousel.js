import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
function BackgroundCSL() {
	let navigate = useNavigate();
	const redirectRoute = (path) => {
		navigate(path);
	};

	const ImageList = ["https://firebasestorage.googleapis.com/v0/b/rentpipe-d4b1c.appspot.com/o/home3.jpeg?alt=media&token=97881495-3b63-4417-8917-c394f1022f2f",
						"https://firebasestorage.googleapis.com/v0/b/rentpipe-d4b1c.appspot.com/o/home4.webp?alt=media&token=c77982ca-08d6-4532-947f-fe25fa2e035f",
					"https://firebasestorage.googleapis.com/v0/b/rentpipe-d4b1c.appspot.com/o/home5.jpeg?alt=media&token=c69c832e-4fa5-4ca8-9e1d-4721ce064382"]
	const carouselItems = ImageList.map((img) =>  {
        return (<Carousel.Item className='item'>
        <Image 
          className="carouselImage"
          src={img}
          alt="House images"
        />
		<div class="form-group"> 
			<div class="container">
            <div class="row">
            <div class="col-md-10">
                <input type="text" class="form-control input-lg" placeholder="Enter Zip Code"/>  
            </div>
            <div class="col-md-2">
                <Button variant='success' href="#" role="button">GO</Button>
            </div>
            </div>
        </div>   
    </div>
		<Carousel.Caption>
					<h3>Lets Find You A Home</h3>
				</Carousel.Caption>
      </Carousel.Item>
        )
    });


	return (
		<div className='carouselHomepage'>
		<Carousel fade >
			{carouselItems}
			
		</Carousel>
		</div>
	);
}

export default BackgroundCSL;
