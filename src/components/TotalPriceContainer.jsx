import React from 'react';
import './TotalPriceContainer.css';

export default function TotalPriceContainer({totalItems, price, discount, typeDiscount}) 
{

    const [total, settotal] = React.useState();

    React.useEffect(() => {
      settotal(price-discount);
    }, [price, discount])

    return (
        <div className="totalPrice">
            <div className="totalPriceContainer">
                <h5>Total</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Items ({totalItems})</td>
                            <td>:</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <td className="discount">Discount</td>
                            <td className="discount">:</td>
                            <td className="discount">-${discount}</td>
                        </tr>
                        <tr>
                            <td className="discount">Type Discount</td>
                            <td className="discount">:</td>
                            <td className="discount">-${typeDiscount}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            
            <div className="row result">
                    <div className="col s8 order">
                        Order Total
                    </div>
                    <div className="col s4 total">
                        ${total}
                    </div>
            </div>
        </div>
    )
}
