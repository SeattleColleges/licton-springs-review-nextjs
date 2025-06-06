"use client";
import Detail from "@/component/Detail";
import SingleNonfictionPost from "@/component/SingleNonfictionPost";
import { useSearchParams } from "next/navigation";

export default function FictionPost() {
    const searchParams = useSearchParams();
    const isWp = searchParams.get("wp");
    if (isWp === "false") {
        return <SingleNonfictionPost />;
    } else {
        return <Detail />;
    }
}