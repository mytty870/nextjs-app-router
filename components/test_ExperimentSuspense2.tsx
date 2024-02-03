export const ExperimentSuspense2 = async () => {
  await sleep(7000)
  return (
    <>
      <p>解決したよ2</p>
    </>
  )
}

// FILEPATH: /Users/mytty/study/next-js/study-nextjs/components/__tests__/ExperimentSuspense2.test.tsx

import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { ExperimentSuspense2 } from '../ExperimentSuspense2'

jest.mock('../ExperimentSuspense2', () => ({
  ExperimentSuspense2: jest.fn(),
}))

describe('ExperimentSuspense2', () => {
  it('renders the resolved content after waiting for 7 seconds', async () => {
    render(<ExperimentSuspense2 />)
    expect(screen.queryByText('解決したよ2')).toBeNull()

    await waitFor(() => {
      expect(screen.getByText('解決したよ2')).toBeInTheDocument()
    })
  })
})
