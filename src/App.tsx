// Modules
import Marquee from 'react-fast-marquee';
import { v4 } from 'uuid';
// Components
import TickerBlock from './components/TickerBlock';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Myvideo from './assets/WorldDigitalBackgroundLoop.mp4';

// Import Swiper styles
import 'swiper/css';

const marqueeItems = [
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
  {
    title: 'Title',
    price_change: 'change',
    price: 1000,
    old_price: 500,
    currency: 'tmt',
  },
];

function App() {
  return (
    <main>
      <div>
        <Marquee className="ticker" gradient={false} speed={35}>
          <div className="ticker-wrapper">
            {marqueeItems.map((item) => (
              <TickerBlock
                key={v4()}
                title={item.title}
                change={item.price_change}
                price={item.price}
                oldPrice={item.old_price}
                currency={item.currency}
              />
            ))}
          </div>
        </Marquee>
        <Marquee className="ticker" gradient={false} speed={33}>
          <div className="ticker-wrapper">
            {marqueeItems.map((item) => (
              <TickerBlock
                key={v4()}
                title={item.title}
                change={item.price_change}
                price={item.price}
                oldPrice={item.old_price}
                currency={item.currency}
              />
            ))}
          </div>
        </Marquee>
        <Marquee className="ticker" gradient={false} speed={40}>
          <div className="ticker-wrapper">
            {marqueeItems.map((item) => (
              <TickerBlock
                key={v4()}
                title={item.title}
                change={item.price_change}
                price={item.price}
                oldPrice={item.old_price}
                currency={item.currency}
              />
            ))}
          </div>
        </Marquee>
      </div>
      <div className="swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5100,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <div className="slide">
              <video src={Myvideo} autoPlay loop muted />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <video src={Myvideo} autoPlay loop muted />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default App;
