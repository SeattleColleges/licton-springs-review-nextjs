import { PostsByCategory } from "@/component/PostsByCategory";

export default async function ArtPage() {
    return (
        <main>
            <h1>Art</h1>
            <PostsByCategory category="Art"/>
        </main>
    );
}