import React from 'react'

function home({name, moredetails}) {
  return (
    <>
    
       <h2>My name is  {name}</h2>
       <p>my height is {moredetails.age}</p>
       <div className="lang">
         <ul style={{listStyle: 'none'}}>
            <li>typescript</li>
            <li>c#</li>
            <li>c++</li>
            <li>javascript</li>
         </ul>
       </div>
    </>
  )
}

export default home