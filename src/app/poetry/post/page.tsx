import Detail from "@/component/Detail";
import { Suspense } from "react";

export default function PoetryPost() {
    return (
        <Suspense fallback={<div>Loading…</div>}>
            <Detail />
        </Suspense>
    );
}
