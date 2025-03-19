import { PostsByCategory } from "@/component/PostsByCategory";

export default async function FictionPage() {
    return (
        <main className="fiction-container">
            <h1>Fiction</h1>
            <PostsByCategory category="Fiction" />
        </main>
    );
}
