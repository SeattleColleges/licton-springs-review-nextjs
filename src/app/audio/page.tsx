import { PostsByCategory } from "@/component/PostsByCategory";
import { getCategoryId } from "@/fetch-category-posts";

export default function Audio() {
    return getCategoryId("Audio")
    .then((id) => {
        const content = id === -1 ? 
                        <p>There are currently no posts for Audio. Submit your work today!</p> :
                        <PostsByCategory category="Audio"/>
        return (
            <main className="audio-container">
                <h1>Audio</h1>
                {content}
            </main>
        );
    })
}