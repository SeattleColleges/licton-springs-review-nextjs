"use client";
import { Suspense } from "react";
import NonFictionContent from "@/component/NonFictionContent";

export default function NonFictionPost() {

  return <Suspense fallback={<div>Loading…</div>}>
    <NonFictionContent/>
  </Suspense>;
}
