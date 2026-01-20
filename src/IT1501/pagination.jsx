// create a list of 30 objects
// implement a pagination mechanism to display 5 items per page
// display next and previous buttons to navigate between pages
// disable previous button on first page
// disable next button on last page
// design a simple UI in card format to display the items
import React,{Component} from "react";

class Pagination extends Component{
    constructor(props){
        super(props);
        const itemList=[
            {id:1,name:"Item 1"},
            {id:2,name:"Item 2"},
            {id:3,name:"Item 3"},
            {id:4,name:"Item 4"},
            {id:5,name:"Item 5"},
            {id:6,name:"Item 6"},
            {id:7,name:"Item 7"},
            {id:8,name:"Item 8"},
            {id:9,name:"Item 9"},
            {id:10,name:"Item 10"},
            {id:11,name:"Item 11"},
            {id:12,name:"Item 12"},
            {id:13,name:"Item 13"},
            {id:14,name:"Item 14"},
            {id:15,name:"Item 15"},
            {id:16,name:"Item 16"},
            {id:17,name:"Item 17"},
            {id:18,name:"Item 18"},
            {id:19,name:"Item 19"},
            {id:20,name:"Item 20"},
            {id:21,name:"Item 21"},
            {id:22,name:"Item 22"},
            {id:23,name:"Item 23"},
            {id:24,name:"Item 24"},
            {id:25,name:"Item 25"},
            {id:26,name:"Item 26"},
            {id:27,name:"Item 27"},
            {id:28,name:"Item 28"},
            {id:29,name:"Item 29"},
            {id:30,name:"Item 30"}
        ];
    
        this.state={
            items:itemList,
            currentPage:1,
            itemsPerPage:5
        }
    }
    handleNextPage=()=>{
        this.setState((prevState)=>({
            currentPage:prevState.currentPage+1
        }))
    }
    handlePreviousPage=()=>{
        this.setState((prevState)=>({
            currentPage:prevState.currentPage-1
        }))
    }
    render(){
        const {items,currentPage,itemsPerPage}=this.state;
        const indexOfLastItem=currentPage*itemsPerPage;
        const indexOfFirstItem=indexOfLastItem-itemsPerPage;
        const currentItems=items.slice(indexOfFirstItem,indexOfLastItem);
        const totalPages=Math.ceil(items.length/itemsPerPage);
        return(
            <div style={{width:"400px",margin:"auto",textAlign:"center"}}>
                <h2>Pagination Example</h2>
                <ul>
                    {currentItems.map((item)=>(
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
                  
                <button onClick={this.handlePreviousPage} disabled={currentPage===1}>Previous</button>
                <span style={{margin:"0 15px"}}> Page {currentPage} of {totalPages} </span>
                <button onClick={this.handleNextPage} disabled={currentPage===totalPages}>Next</button>
            </div>
        )
    }

} 
export default Pagination;