import {useEffect, useState} from "react";

export function ChangeBackgroundColor(props){
    const [color, setColor] = useState("black")
    useEffect(() => {
         setTimeout(() => {
            setColor("blue");
        }, 5000);

        // Cleanup function to clear timeout when component unmounts
        // return () => clearTimeout(timeoutId);
    }, []);
    return(
        <>
            <div style={{
                backgroundColor:color,
                paddingTop: 20,
                width:400,
                height:400,
                margin:"auto"

            }}>

            </div>

        </>
    )
}
