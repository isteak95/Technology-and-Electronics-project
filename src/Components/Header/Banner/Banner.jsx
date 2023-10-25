
const Banner = () => {
    return (
        <div className="">
            <div className="carousel w-full lg:h-[1000px] h-[433px] md:h-[550px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/3hmp99v/a5dmrvc7juuyiaj6-0-0-tablet-0-1-X.webp" alt="a5dmrvc7juuyiaj6-0-0-tablet-0-1-X" border="0" />
                    <div className=" absolute  lg:my-36 md:my-20 lg:mx-36 md:mx-20 mx-20 my-5" >
                        <h1 className="text-cyan-500 lg:font-extrabold lg:text-7xl md:text-3xl md:font-bold ">Asus Laptop</h1>
                        <p className="text-white lg:text-3xl lg:mt-16 md:mt-16 mt-6 lg:font-semibold  md:font-semibold">ASUS No.1 Creator: GFK and NPD<br />  combined retail data in Q2~Q3, 2022, <br /> NVIDIA Studio laptop of <br /> worldwide market.
                            <br /> ASUS No.1 OLED: GFK and NPD <br /> combined retail data in <br /> 2021 Q4~2022 Q3, <br />
                        </p>
                        <h1 className="text-yellow-500 lg:text-6xl md:text-3xl font-extrabold lg:mt-14 md:mt-14 mt-5 ">worldwide market</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8jmJPmh/hands-free-voice-control.jpg" alt="hands-free-voice-control" border="0" />
                    <div className=" absolute  lg:my-36 md:my-24 md:mx-20 md:text-xl lg:mx-48 mt-20 ml-10  " >
                        <h1 className="text-cyan-500 lg:font-extrabold md:font-bold lg:text-7xl ">Walton Smart Tv</h1>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/fNpT6SB/bd-feature-let-the-higher-power-take-over-534141073.webp" alt="bd-feature-let-the-higher-power-take-over-534141073" border="0" />
                    <div className=" absolute  lg:mt-10 md:mt-1 mt-16 md:mx-3 lg:mx-16 mx-20" >
                        <h1 className="text-cyan-500 font-bold lg:text-6xl md:text-2xl">Samsung Tab A8</h1>
                        <p className="text-white lg:text-3xl mt-6  font-semibold">With Samsung TV Plus, Galaxy Tab A8 delivers instant, free TV anytime, anywhere. Enjoy thousands of hours of news, sports, movies, a variety of kids’ content, and more. Simply launch the Samsung TV Plus <br /> app and use the <br /> GUIDE to see what’s <br /> on now or what’s <br /> coming up next.<br /> 2021 Q4~2022 Q3, <br />
                        </p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/xhCSjdp/im-850887.jpg" alt="im-850887" border="0" />
                    <div className=" absolute lg:ml-[1050px] md:ml-[410px] md:mt-10 lg:mt-16 mt-8 ml-56">
                    <h1 className="text-white font-bold md:text-3xl lg:text-6xl">Top Band of Iphone </h1>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;