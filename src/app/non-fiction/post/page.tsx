"use client";
import { Suspense } from "react";
import Detail from "@/component/Detail";
import SingleNonfictionPost from "@/component/SingleNonfictionPost";
import { useSearchParams } from "next/navigation";

export default function NonFictionPost() {
  const searchParams = useSearchParams();
  const isWp = searchParams.get("wp");

  const content = isWp === "false" ? <SingleNonfictionPost /> : <Detail />;

  return <Suspense fallback={<div>Loading…</div>}>{content}</Suspense>;
}
