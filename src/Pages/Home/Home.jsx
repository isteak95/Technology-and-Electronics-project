import Banner from "../../Components/Header/Banner/Banner";
import RecentViewed from "../../Components/RecentViewed/RecentViewed";
import TopBrand from "../../Components/TopBand/TopBrand";
import TrendingProducts from "../../Components/TrendingProducts/TrendingProducts";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TopBrand></TopBrand>
            <TrendingProducts></TrendingProducts>
            <RecentViewed></RecentViewed>
            <TopBrand></TopBrand>
        </div>
    );
};

export default Home;