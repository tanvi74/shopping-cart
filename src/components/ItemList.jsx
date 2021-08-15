import React from 'react';
import './ItemList.css';

export default function ItemList({data, removeFunction, addFunction, totalItems, deleteFunction}) 
{

    const handleRemove = (item) => 
    {
        removeFunction(item);
    }

    const handleAdd = (item) => 
    {
        addFunction(item);
    }

    const deleteItem = (item) => 
    {
        deleteFunction(item);        
    }
    
    return (
        <div className="itemList">
            <div>
                <table>
                    <thead>
                        <tr className="headingOfTable">
                            <td>Items ({totalItems})</td>
                            <td style={{textAlign: "center"}}>Qty</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>  
                        {
                            data.map((item, key)=> {
                                return (
                                    <tr key={key}>
                                        <td>
                                            <div className="row itemBox itemBoxRow">
                                                <div className="col s1">
                                                    <img src={item.img_url} alt=""/>
                                                </div>
                                                <div className="col s9 itemBoxCol">
                                                    <span>{item.name}</span>
                                                </div>
                                                <div className="col s2 itemBoxColIcon" style={{textAlign: "center"}}>
                                                    <i className="material-icons" onClick={()=>deleteItem(item)}>close</i>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="qBox" style={{textAlign: "center"}}>
                                            <span className="buttonIcon" >
                                                <i className="material-icons" onClick={()=>handleRemove(item)}>remove</i>
                                            </span>
                                            <span className="quantityBox">{item.quantity}</span>
                                            <span className="buttonIcon">
                                                <i className="material-icons"  onClick={()=>handleAdd(item)}>add</i>
                                            </span>
                                        </td>
                                        <td className="price">${item.price}</td>
                                    </tr>
                                )
                            })
                        }                  
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
