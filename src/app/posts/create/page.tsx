import { createPost } from "@/app/actions/posts";
import PostForm from "@/components/post-form";

export default function PostsCreate() {
    return (
        <main className="min-h-screen bg-gray-100 flex items-start justify-center pt-16 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg">
                <PostForm formAction={createPost} initialData={{ title: '', content: '' }} />
            </div>
        </main>
    );
}
