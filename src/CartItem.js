import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:"10,999",
            title:'mobile phone',
            qty:1,
            img:''
        }
        // use arrow function instead of doing this
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
//  arrow function binds instance/object to the function
increaseQuantity = ()=>{
  this.state.qty= this.state.qty+1 ;
}

    render(){
        const {price,title,qty,img}=this.state ;
      return(
         <div className="cart-list">

            <div className="cart-item">
              <div className=" left-block">
                <img alt="" style={styles.image} src=""/>
              </div>
     
              <div className=" right-block">
                <div style={ {fontSize:30}}>{title}</div>
                <div style={ {color:'#777'}}>Rs {price} </div>
                <div style={ {color:'#777'}}>Qty: {qty} </div>
     
                 <div className="cart-item-actions">
                   <img alt="increase"
                    className="action-icons" 
                    src="https://img-premium.flaticon.com/png/512/3303/3303893.png?token=exp=1621048218~hmac=f795f64dd640ba6533e5004c3b948a7b" 
                  //  function needs to be binded with object for this to work
                    onClick={this.increaseQuantity}
                    /> 
                   <img alt="decrease" 
                   className="action-icons" 
                   src="https://img-premium.flaticon.com/png/512/992/992683.png?token=exp=1621048157~hmac=62efe3bd79ee70016d10c736ee18b0ee" 
                   /> 
                   <img alt="delete" 
                   className="action-icons" 
                   src="https://img-premium.flaticon.com/png/512/2907/2907762.png?token=exp=1621048257~hmac=e62e9761e5f7928095bbd3d99a24237c" 
                   /> 
                </div>

              </div>
     
            </div>
     
          </div>
        );
    }
}

const styles ={
    image:{
      height:120,
      width:120,
      borderRadius:6
    }
  }

  export default CartItem ;