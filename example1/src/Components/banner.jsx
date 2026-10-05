import image from '../assets/image.jpeg';
export default function Banner() {
    return (
        <div className="bannerArea">
            <img src={image} alt="Banner image " className="imageBanner"/>
            <div className="bannerText">
                <h1>Welcome to lost and found App</h1>
                <p>report and find lost items here</p>
            </div>
        </div>
    )
}