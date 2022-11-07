import { useContext } from "react";
import { NameContext } from "./App";

export const Component1 = () => {
return (
<>
<Component2/> 
<Component3/> 
<Component4/> 
<Component5/> 
</>
)
}


const Component2 = () =>{
    
}

const Component3 = () =>{
    
};

const Component4 = () =>{
    
};

const Component5 = () => {
    const MyContext = useContext(NameContext);
    return <p>{MyContext}</p>;
};

export const Component6 = () =>{
    return (
        <>
        <Component7/> 
        <Component8/> 
    </>
    )
};

const Component7 = () =>{
    
};


const Component8 = () =>{
    
};

