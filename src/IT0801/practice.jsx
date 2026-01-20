// that will conatain dropdown with list
// each item will have value/price with lable
// beside the dropdown display + button,quantity ,- button
// when user clicks + or - button quantity will increase/decrease
// selcted item price and quantity will be displayed below
// if manully quntity is 0  hen - button will be disabled
//if quantity is more than 10 then + button will be disabled
// intially quantity shoud be 1.

import React,{Component} from "react";

class Practice extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[
        {label:"item-1",value:10},
        {label:"item-2",value:20},
        {label:"item-3",value:30}
      ],
      selectedItemValue:10,
      quantity:1
    }
  }
    handleItemChange=(e)=>{
        this.setState({selectedItemValue:Number(e.target.value)});
    }

    handleIncrease=()=>{
      this.setState((prevState)=>({
        quantity:prevState.quantity+1
      }))
    }
    handleDecrease=()=>{
      this.setState((prevState)=>({
        quantity:prevState.quantity-1
      }))
    }
    render(){
        const {items,selectedItemValue,quantity}=this.state;
        const selectedItem=items.find(item=>item.value===selectedItemValue);
        const totalPrice=selectedItem.value*quantity;
        return(
            <div style={{width:"500px",height:"500px",padding:"30px",border:"1px",borderColor:"black"}}>
                <h2>Product  selector</h2>
                <br/>
                <select onChange={this.handleItemChange} value={selectedItemValue}>
                    {items.map((item)=>(
                        <option key={item.value} value={item.value}>
                            {item.label} - ${item.value}
                        </option>
                    ))}
                </select>
                <br/><br/>
                <div>
                    
                    <button onClick={this.handleDecrease} disabled={quantity<=0}>  -  </button>
                    
                    <span style={{margin:"30px"}}></span>
                    <span> Quantity: {quantity} </span>
                    <button onClick={this.handleIncrease} disabled={quantity>=10}>  +  </button>
                </div>  
                <br/>

                <h3>Total Price: ${totalPrice}</h3>
            </div>
        )
    }
}

export default Practice;