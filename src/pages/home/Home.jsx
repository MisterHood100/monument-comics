import Header from "./header/Header";
import Banner from "./banner/Banner";
import Shop from "./shop/Shop";
import Carousel from "./carousel/Carousel";
import { CarouselData } from "./carousel/CarouselData";
import "./home.css"


function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            <Shop />
            <Carousel data={CarouselData}/>
        </div>
    )
}

export default Home;