import {useRef} from 'react'
import { useRecoilState } from 'recoil';
import { NoteAtom } from './data';
import React from "react";


const Edit= ()=>{
    const [data,setData] = useRecoilState(NoteAtom)
    const ID= useRef();
    const title= useRef();
    const author= useRef();
    const disc= useRef();
    


    const handleupdate=()=>{
     
        const newData = data.map((ele)=>{

            if(ele.id == ID.current.value){
                let obj={
                    id:ele.id,
                    title:title.current.value,
                    author:author.current.value,
                    disc:disc.current.value

                }
               
                return obj;
                
            }else{
                return ele
            } 

        })
        console.log(newData)

        setData(
            [...newData]
        )

    }



    return(

        <div>
            <input ref={ID} type ="text" placeholder="Enter Email ID "  />
            <input ref={title} type ="text" placeholder="Enter Name "  />
            
            <button onClick={handleupdate}>Update Data</button>


            
        </div>
    )
}


export {Edit}