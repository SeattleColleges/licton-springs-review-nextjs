import { PostsByCategory } from "@/component/PostsByCategory";

export default async function ArtPage() {
    return (
        <main className="art-container">
            <h1>Art</h1>
            <PostsByCategory category="Art"/>
        </main>
    );
}