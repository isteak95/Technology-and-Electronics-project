
const Banner = () => {
    return (
        <div className="">
            <div className="carousel w-full h-[1000px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/3hmp99v/a5dmrvc7juuyiaj6-0-0-tablet-0-1-X.webp" alt="a5dmrvc7juuyiaj6-0-0-tablet-0-1-X" border="0" />
                    <div className=" absolute  my-36 mx-36" >
                        <h1 className="text-cyan-500 font-extrabold text-7xl">Asus Laptop</h1>
                        <p className="text-white text-3xl mt-16  font-semibold">ASUS No.1 Creator: GFK and NPD<br />  combined retail data in Q2~Q3, 2022, <br /> NVIDIA Studio laptop of <br /> worldwide market.
                            <br /> ASUS No.1 OLED: GFK and NPD <br /> combined retail data in <br /> 2021 Q4~2022 Q3, <br />
                        </p>
                        <h1 className="text-yellow-500 text-6xl font-extrabold mt-14 ">worldwide market</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8jmJPmh/hands-free-voice-control.jpg" alt="hands-free-voice-control" border="0" />
                    <div className=" absolute  my-36 mx-48 " >
                        <h1 className="text-cyan-500 font-extrabold text-7xl ">Walton Smart Tv</h1>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/fNpT6SB/bd-feature-let-the-higher-power-take-over-534141073.webp" alt="bd-feature-let-the-higher-power-take-over-534141073" border="0" />
                    <div className=" absolute  mt-10 mx-16" >
                        <h1 className="text-cyan-500 font-bold text-6xl">Samsung Tab A8</h1>
                        <p className="text-white text-3xl mt-6  font-semibold">With Samsung TV Plus, Galaxy Tab A8 delivers instant, free TV anytime, anywhere. Enjoy thousands of hours of news, sports, movies, a variety of kids’ content, and more. Simply launch the Samsung TV Plus <br /> app and use the <br /> GUIDE to see what’s <br /> on now or what’s <br /> coming up next.<br /> 2021 Q4~2022 Q3, <br />
                        </p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img className="w-full" src="https://i.ibb.co/xhCSjdp/im-850887.jpg" alt="im-850887" border="0" />
                    <div className=" absolute ml-[1080px] mt-16">
                    <h1 className="text-white font-bold text-6xl">Top Band of Iphone </h1>

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