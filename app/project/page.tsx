'use client'
import { useRouter } from "next/navigation";
import { ExperimentSuspense } from "../components/ExperimentSuspense";
import { Suspense } from "react";

export default function Page() {
  const router = useRouter()

  return (
    <>
      <div>PROJECT PAGE</div>
      <button type="button" onClick={() => router.push('/project/art')}>
        ART
      </button>
      <div>
        <Suspense fallback={<p>ローディング中です。。。</p>}>
          <p>今日はいい天気だ</p>
          <ExperimentSuspense />
        </Suspense>
      </div>
    </>
  )
}