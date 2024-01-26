const sleep = (waitTime: number) => new Promise( resolve => setTimeout(resolve, waitTime) );

export const ExperimentSuspense = async() => {
   await sleep(5000)
   return (
    <p>解決したよ</p>
   )
}
