'use client'
import { useRouter } from "next/navigation";
import { ExperimentSuspense } from "../../components/ExperimentSuspense";
import { Suspense } from "react";
import { ExperimentSuspense2 } from "../../components/ExperimentSuspense2";

export default function Page() {
  const router = useRouter()

  return (
    <>
      <div>PROJECT PAGE</div>
      <button type="button" onClick={() => router.push('/project/art')}>
        ART
      </button>
      <ExperimentSuspense />
      <div>
        <Suspense fallback={<p>ローディング中です。。。</p>}>
          <p>今日はいい天気だ</p>
          <ExperimentSuspense2 />
        </Suspense>
      </div>
    </>
  )
}