

const RecentViewed = () => {
    return (
        <div className="border-2 m-32 p-5">
            
            <h1 className="text-rose-400 text-3xl font-extrabold m-14">Recently Viewed Products</h1>
            
            <div className="flex ml-20">

                <div className="card w-96">

                    <figure><img className=" h-[190px]" src="https://i.ibb.co/QbYjCkx/galaxy-book2-360-01-500x500.webp" alt="galaxy-book2-360-01-500x500" border="0" /></figure>
                </div>
                <div className="card-body">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title">Samsung Galaxy Book2 360 Core i5 12th Gen 13.3" FHD AMOLED Touch Laptop
                    </h2>
                    <p>Price : 120,000 Tk</p>
                </div>
                <div className="card w-96 ">

                    <figure><img className=" h-[190px]" src="https://i.ibb.co/WVx9knz/giant-45100.jpg" alt="giant-45100" border="0"/></figure>
                </div>
                <div className="card-body">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title">Norcam NC-914HI 1/3" Sony CCD 420TVL Dome Security Camera

                    </h2>
                    <p>Price : 3,000 Tk</p>
                </div>
                <div className="card w-96  ">

                    <figure><img className=" h-[190px]" src="https://i.ibb.co/KzhP5XY/galaxy-buds-plus-01-500x500.png" alt="galaxy-buds-plus-01-500x500" border="0"/></figure>
                </div>
                <div className="card-body">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title">Samsung Galaxy Buds + True Wireless Earbuds

                    </h2>
                    <p>Price : 11,852 Tk</p>
                </div>
                <div className="card w-96 ">

                    <figure><img className=" h-[190px]" src="https://i.ibb.co/vmW35d4/2966-8928.jpg" alt="2966-8928" border="0"/></figure>
                </div>
                <div className="card-body">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title">iPhone XS Max

                    </h2>
                    <p>Price : 60,000 Tk</p>
                </div>
            </div>

        </div>
    );
};

export default RecentViewed;