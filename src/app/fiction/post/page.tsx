"use client";
import { Suspense } from "react";
import Detail from "@/component/Detail";
import SingleFictionPost from "@/component/SingleFictionPost";
import { useSearchParams } from "next/navigation";

export default function FictionPost() {
  const searchParams = useSearchParams();
  const isWp = searchParams.get("wp");

  const content = isWp === "false" ? <SingleFictionPost /> : <Detail />;

  return <Suspense fallback={<div>Loading…</div>}>{content}</Suspense>;
}
