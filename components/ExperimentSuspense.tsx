const sleep = (waitTime: number) =>
  new Promise(resolve => setTimeout(resolve, waitTime))

export const ExperimentSuspense = async () => {
  await sleep(3000)
  return <p>解決したよ1</p>
}
