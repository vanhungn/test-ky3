
import{ useState } from "react"
import './App.css';


function App() {

  const [listValue,]=useState([])
  const [datalist,setDataList]=useState([])
  const [valueInput,setValueInput]=useState("");
  const [lengthLis,setLengThList]=useState(0);

 
  const [indexId,setIndexId]=useState("")
 
  const handleOnchange=(e)=>{
    setValueInput(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    listValue.push({item:valueInput,
      id:`${valueInput}-Id`
    })
    localStorage.setItem("datalist",JSON.stringify(listValue))
     const data= localStorage.getItem("datalist")
     setDataList(JSON.parse(data))
     const lengthData=JSON.parse(data);
   
     setLengThList(lengthData.length)
    
  }
 const handleOnChangeRadio=(index)=>{
  setLengThList(lengthLis-1)
  setIndexId(index)
 
 }

  return (
    <div className="App">
      <div className='headerFrom'>
        <h3>YOU HAVE {lengthLis} TASKS LEFTS !</h3>
        <p className={indexId!==""?"notNone":"none"}>Đã hoàn thành</p>
      </div>
    
        <div className='listProduct'>
        {datalist?.map((product,index)=>{
          return(
            <div key={index} className='renderList'>
                <input onClick={()=>handleOnChangeRadio(index)} className='inputRadio' type="radio" name="" id="" />
                <p className={indexId!==index?"p":"noP"}>{product.item}</p>
            </div>
          )
        })}
      
      </div>
      <form action="" className='form'>
        <input className='input' type="text" placeholder='Enter task...' onChange={handleOnchange}/>
        <button className='button' type='submit' onClick={handleSubmit}>Submit</button>
      </form>
      
      
    </div>
  );
}

export default App;
