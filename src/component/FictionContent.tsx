"use client";

import { useSearchParams } from "next/navigation";
import Detail from "@/component/Detail";
import SingleFictionPost from "@/component/SingleFictionPost";

export default function FictionContent() {
    const searchParams = useSearchParams();
    const isWp = searchParams.get("wp");

    return isWp === "false" ? <SingleFictionPost /> : <Detail />;
}
