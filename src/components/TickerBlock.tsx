// Modules
// Icons
import arrowUp from '../assets/icons/arrow-up.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

interface IProps {
  title: string;
  change: string;
  price: number;
  oldPrice: number;
  currency: string;
}

const TickerBlock = ({ title, change, price, oldPrice, currency }: IProps) => {
  return (
    <div className="ticker-block">
      <h3 className="ticker-title">{title}</h3>
      <div className="ticker-content">
        <div className="ticker-price">
          {price} {currency}
        </div>
        <div className="ticker-status">
          <div className="ticker-arrow">
            <img src={price >= oldPrice ? arrowUp : arrowDown} />
          </div>
          <span className={`ticker-status-title ${price >= oldPrice ? 'green' : 'red'}`}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TickerBlock;
