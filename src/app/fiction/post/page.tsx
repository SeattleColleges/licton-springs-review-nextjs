import Detail from "@/component/Detail";
import { Suspense } from "react";

export default function FictionPost() {
    return (
        <Suspense fallback={<div>Loading…</div>}>
            <Detail />
        </Suspense>
    );
}
