
 import './home.css';
 import ChooseUs from './ChooseUs';
 function Intro() {
  return (
    <>  
        <div 
        //    style={{
        //     backgroundImage: "url('/img/homeimages/c2.jpeg')",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        //     height: "1000px"
        //   }}
        >
            <h1 className='homewelcome'>WELCOME TO THE BEST ONLINE SALES FOR CLOTHES</h1>
            <p className='homepara'>Discover the latest trends in fashion with our exclusive collection of clothing. From casual wear to formal attire, we have something for everyone. Enjoy seamless shopping experience with easy navigation, secure payment options, and fast delivery. Stay ahead in style with our curated selection of apparel that caters to all your fashion needs. Shop now and elevate your wardrobe with the best online sales for clothes!</p>
            <h6 className="homesearch">Search the best and mordern clothes in the the Market</h6>
        </div>
        
        

        {/* images */}
        <section className="homeimages">
            <img src="/img/homeimages/home1.jpeg" alt="home1" />
            <img src="/img/homeimages/home2.jpeg" alt="home2" />
            <img src="/img/homeimages/home3.jpeg" alt="home3" />
            <img src="/img/homeimages/home4.jpeg" alt="home4" />
            <img src="/img/homeimages/home5.jpeg" alt="home5" />
            

        </section>

        {/* choose us component */}
        <ChooseUs />


    </>
  )
}

export default Intro;
