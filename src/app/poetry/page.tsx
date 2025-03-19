import { PostsByCategory } from "@/component/PostsByCategory";

export default async function PoetryPage() {
    return (
        <main className="poetry-container">
            <h1>Poetry</h1>
            <PostsByCategory category="Poetry"/>
        </main>
    );
}
