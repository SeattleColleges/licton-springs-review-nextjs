"use client";
import { Suspense } from "react";
import Detail from "@/component/Detail";
import SinglePoetryPost from "@/component/SinglePoetryPost";
import { useSearchParams } from "next/navigation";

export default function PoetryPost() {
  const searchParams = useSearchParams();
  const isWp = searchParams.get("wp");

  const content = isWp === "false" ? <SinglePoetryPost /> : <Detail />;

  return <Suspense fallback={<div>Loading…</div>}>{content}</Suspense>;
}