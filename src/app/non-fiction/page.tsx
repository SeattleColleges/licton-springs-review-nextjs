import { PostsByCategory } from "@/component/PostsByCategory";

export default async function NonFictionPage() {
    return (
        <main className="non-fiction-container">
            <h1>Non-Fiction</h1>
            <PostsByCategory category="Non-Fiction"/>
        </main>
    );
}
