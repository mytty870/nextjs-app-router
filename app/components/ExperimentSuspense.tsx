function sleep(ms: number ) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
    return (
      <p>aaa</p>
    )
  })
}

export const ExperimentSuspense = () => {
  throw sleep(1)
}
