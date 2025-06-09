"use client";
import { Suspense } from "react";
import FictionContent from "@/component/FictionContent";

export default function FictionPost() {
  return <Suspense fallback={<div>Loading…</div>}>
    <FictionContent/>
  </Suspense>;
}
