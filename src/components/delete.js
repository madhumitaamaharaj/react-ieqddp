import { NoteAtom } from "./data";
import { useRecoilState } from "recoil";
import{useRef} from 'react'
import React from "react";



const Delete= ()=>{
    const ID= useRef()

    const [data,setData]= useRecoilState(NoteAtom)

    const handleDelete=()=>{
        

        const newData=data.filter((ele)=>ele.id != ID.current.value)

    setData(
        [
            
            ...newData
        ]
    )



    }



    return(

        <div>

        <input ref={ID} type="text" placeholder="Enter Email ID" />
        <button onClick={handleDelete}>Delete Note</button>

        </div>
    )
}


export {Delete}