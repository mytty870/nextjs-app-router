import { useState } from "react";

const sleep = (waitTime: number) => new Promise( resolve => setTimeout(resolve, waitTime) );

export const ExperimentSuspense2 = async() => {

   console.log('aaa')

   const [aaa] = useState('bbb')

   await sleep(7000)
   return (
      <>
    <p>解決したよ2</p>
      </>
   )
}
