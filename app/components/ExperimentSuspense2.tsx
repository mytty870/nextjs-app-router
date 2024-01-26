const sleep = (waitTime: number) => new Promise( resolve => setTimeout(resolve, waitTime) );

export const ExperimentSuspense2 = async() => {
   await sleep(7000)
   return (
    <p>解決したよ2</p>
   )
}
