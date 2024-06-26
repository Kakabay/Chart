// Modules
import Marquee from 'react-fast-marquee';
import { v4 } from 'uuid';
// Components
import TickerBlock from './components/TickerBlock';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Myvideo from './assets/WorldDigitalBackgroundLoop.mp4';
import { PriceData } from './ChartData';

// Import Swiper styles
import 'swiper/css';
import LineChart from './components/LineChart';
import { useState } from 'react';

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

// const [counter, setCounter] = useState<number>(0);

function App() {
  const [slideId, setSlideId] = useState<number>(1);

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
          effect="fade"
          autoplay={{
            delay: 5100,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiperCore) => {}}
          modules={[Autoplay]}
          className="mySwiper">
          {PriceData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <video src={Myvideo} autoPlay loop muted />
                <LineChart index={index} title={item.title} prices={item.price} years={item.year} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}

export default App;
