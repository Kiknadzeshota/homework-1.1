import './Card.css'
import ImageForDesktop from '../../images/image-product-desktop.jpg'
import ChildCard from '../Card/ChildCard/ChildCard'
 function Card(){
    return(
        <div className='Card'>
            <img src={ImageForDesktop} alt="" />
            <ChildCard/>
        </div>
    );
}
export default Card
