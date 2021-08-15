import React, {useEffect, useState} from 'react';
import ItemList from '../components/ItemList';
import TotalPriceContainer from '../components/TotalPriceContainer';
import './LandingPage.css';
import {DATA} from '../constants/data.js';
import { AppContext } from '../store/cart';


export default function LandingPage() 
{
    const {dataOfItems, setCurrentData} = React.useContext(AppContext);
   
    const [data, setdata] = useState(dataOfItems);
    const [totalItems, setTotalItems] = useState(dataOfItems.length);
    const [totalPrice, settotalPrice] = useState();
    const [discount, setdiscount] = useState();
    const [typeDiscount, settypeDiscount] = useState(0);
    const [alert, setalert] = useState(false);

    useEffect(() => {
        let arr = [...dataOfItems];
        arr =  arr.map(item => ({...item, quantity: 1}));
        setdata(arr);

       let price = 0;
       let dis = 0;
       let type = 0;
       for(var i=0;i<DATA.length; i++)
       {
           price += DATA[i].price;
           
           if(DATA[i].type==="fiction")
           {
               type += (0.15*DATA[i].price)+DATA[i].discount;
           }
           else
                dis += DATA[i].discount;
       }

       settotalPrice(price);
       setdiscount(dis);
       settypeDiscount(type);

    }, []);

    useEffect(() => {
        let count = 0;
        let price = 0;
        let dis = 0;
        let type = 0;
        for(var i=0;i<data.length; i++)
        {
            count += data[i].quantity;
            price += data[i].price*data[i].quantity;

            if(data[i].type==="fiction")
           {
               type += ( 0.15 * ( data[i].price*data[i].quantity ) ) + data[i].discount*data[i].quantity;
           }
           else
           {
                dis += data[i].discount*data[i].quantity;
           }
        }
        setTotalItems(count);
        settotalPrice(price);
        setdiscount(dis);
        settypeDiscount(type);
        setCurrentData(data);
    }, [data]);

    const search = (nameKey, myArray, add) => 
    {   
        for (var i=0; i < myArray.length; i++) 
        {
            if (myArray[i].name === nameKey) 
            {
                if(add)
                {
                    myArray[i].quantity = myArray[i].quantity+1;
                }
                else if(myArray[i].quantity && !add)
                {
                    myArray[i].quantity = myArray[i].quantity-1; 
                } 
            }
        }

        return myArray;
    }
    
    const handleRemove = (item) => 
    {
        const arr = [...data];
        const arr1 = search(item.name, arr , false);
        setdata(arr1);
    }

    const handleAdd = (item) => 
    {
        const arr = [...data];
        const arr1 = search(item.name, arr, true);
        setdata(arr1);
    }

    const handleDelete = (item) =>
    {
        setalert(true);
        let arr = [...data];
        arr = arr.filter(value=> value.name !== item.name)
        setdata(arr);
        setTimeout(()=>{
            setalert(false);
        },2000)
    }

    return (
        <div className="container" style={{marginTop: 20}}>
            {
                alert &&
                <div className="alert">
                    Item has been deleted
                </div>
            }
            {
                totalItems === 0 ? 
                    <div style={{textAlign: "center"}}>
                        <button className="waves-effect waves-light btn" onClick={()=>{setCurrentData(DATA); window.location.reload()}}>Reload</button>
                    </div>
                :
                <div className="row">
                    <div className="col l8 m6 s12">
                        <div className="headingDiv">
                            <span><i className="material-icons headingIcon">chevron_left</i></span>
                            <span className="heading">Order Summary</span>
                        </div>
                        
                        <ItemList  data={data} removeFunction = {handleRemove} addFunction = {handleAdd} totalItems = {totalItems} deleteFunction={handleDelete}/>
                    </div>
                    <div className="col l4 m6 s12">
                        <TotalPriceContainer data={DATA} totalItems = {totalItems} price={totalPrice} discount={discount} typeDiscount={typeDiscount}/>
                    </div>
                </div>
            }
            
        </div>
    )
}
