"use client";

import { useSearchParams } from "next/navigation";
import Detail from "@/component/Detail";
import SingleNonfictionPost from "@/component/SingleNonfictionPost";

export default function NonFictionContent() {
    const searchParams = useSearchParams();
    const isWp = searchParams.get("wp");

    return isWp === "false" ? <SingleNonfictionPost /> : <Detail />;
}
