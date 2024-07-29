import React from 'react';

export const Header = () => {
    const customClass = "code";
    const isLoggedIn = "true";
    const greetings = isLoggedIn? <h1>WELCOME BACK KEERTHANA!</h1> :<h1>PLEASE LOGIN</h1>;
    const list = ["ITEM1","ITEM2","ITEM3","ITEM4"]
    return (
        <>
            <h1 className='head' style={{fontSize: "26px", fontStyle: "italic"}}>WELCOME ALL</h1>
            <h2 className='sub'>THIS IS MY DESIGN PAGE</h2>
            <p className={customClass} style={{fontSize: "26px", fontStyle: "italic"}}>25 + 25 = {25 + 25}</p>
            {/*JSX WITH CONDITIONAL RENDERING */}
            {greetings}
            {/*JSX WITH LISTS */}
            <ul>
                {list.map((item, index)=>(<li key={index}>{item}</li>))}
            </ul>

        </>
    );
};
