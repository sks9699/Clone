import React from 'react'
import './Home.css'
import './Product.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt='Image note found' />

            {/* proudct id title price rating image*/}
            <div className='home__row'>
                <Product id={12124}
                    title={"80 20 Principal80 20 Principal 80 20 Principal80 20 Principal"}
                    price={22}
                    rating={5}
                    image="https://pagdandi.org/wp-content/uploads/2023/02/koch.jpg" />
                <Product id={12124}
                    title={"80 20 Principal80 20 Principal80 20 Principal80 20 Principal80 20 Principal"}
                    price={225}
                    rating={5}
                    image="https://pagdandi.org/wp-content/uploads/2023/02/koch.jpg" />
                <Product id={12124}
                    title={"80 20 Principal80 20 Principal80 20 Principal80 20 Principal80 20 Principal"}
                    price={2}
                    rating={5}
                    image="https://pagdandi.org/wp-content/uploads/2023/02/koch.jpg" />
                <Product id={12124}
                    title={"80 20 Principal80 20 Principal80 20 Principal80 20 Principal80 20 Principal"}
                    price={28}
                    rating={5}
                    image="https://pagdandi.org/wp-content/uploads/2023/02/koch.jpg" />
                <Product id={12124}
                    title={"80 20 Principal80 20 Principal80 20 Principal80 20 Principal80 20 Principal"}
                    price={292}
                    rating={5}
                    image="https://pagdandi.org/wp-content/uploads/2023/02/koch.jpg" />
                <Product id={12124}
                    title={"80 20 Principal80 20 Principal80 20 Principal80 20 Principal80 20 Principal"}
                    price={228}
                    rating={5}
                    image="https://pagdandi.org/wp-content/uploads/2023/02/koch.jpg" />



            </div>
            {/* product*/}
        </div>
    )
}

export default Home;
