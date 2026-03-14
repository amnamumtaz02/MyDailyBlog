'use client'

import { deletePost } from "@/app/actions/posts";

interface PostDeleteProps {
    id: string,
}

export default function PostDelete({ id }: PostDeleteProps) {
    const deleteAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        deletePost(id);
    };

    return <form onSubmit={deleteAction} className="flex-1">
        <button type="submit" className="w-full bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">Delete</button>
    </form>
}
