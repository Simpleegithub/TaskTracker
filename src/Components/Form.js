import { useState } from "react";


let arrayOfValues = [];
for (let i = 1; i <= 20; i++) {
  arrayOfValues.push(i); // Push random values into the array
}


export default function Form({items,setitems}) {

    const[quantity,setquantity]=useState(1);
    const [description, setdescription] = useState("");
  
   function handleAddItem(item){
     setitems((items)=>[...items,item]);
     console.log(items);
  
   }
  
    function handlesubmit(e) {
      e.preventDefault();
      if(!description) return;
      const newitem={description,quantity,packed:false,id:Date.now()};
      console.log(newitem)

     
      handleAddItem(newitem);
  
  
      setdescription('');
      setquantity(1);
  
      
    }
  
    return (
      <form className="add-form" onSubmit={handlesubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e)=>setquantity(Number(e.target.value))}>
          {arrayOfValues.map((num) => (
            <option key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }