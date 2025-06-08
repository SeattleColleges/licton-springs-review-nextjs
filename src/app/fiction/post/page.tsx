"use client";
import Detail from "@/component/Detail";
import SingleFictionPost from "@/component/SingleFictionPost";
import { useSearchParams } from "next/navigation";

export default function FictionPost() {
    const searchParams = useSearchParams();
    const isWp = searchParams.get("wp");
    if (isWp === "false") {
        return <SingleFictionPost />;
    } else {
        return <Detail />;
    }
}
