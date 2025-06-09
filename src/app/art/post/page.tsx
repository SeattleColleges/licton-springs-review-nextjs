import Detail from "@/component/Detail";
import { Suspense } from "react";

export default function ArtPost() {
    return (
        <Suspense fallback={<div>Loading…</div>}>
            <Detail />
        </Suspense>
    );
}