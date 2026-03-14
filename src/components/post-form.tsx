'use client'

import Link from "next/link"
import { useFormState } from "react-dom"

interface FormErrors {
    title?: string[],
    content?: string[],
}

interface FormState {
    errors: FormErrors,
}

interface PostFormProps {
    formAction: any,
    initialData: {
        title: string,
        content: string,
    },
}

export default function PostForm({ formAction, initialData }: PostFormProps) {
    const [formState, action] = useFormState<FormState>(formAction, {
        errors: {},
    })

    return <>
        <h1 className="text-3xl font-bold mb-8 text-gray-900">{initialData.title ? 'Update' : 'Create'} Post</h1>
        <form action={action}>
            <div className="w-full">
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-1 text-sm font-semibold text-gray-700">Title</label>
                    <input type="text" id="title" name="title" defaultValue={initialData.title} className="rounded-lg border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 bg-white" />
                    {
                        formState.errors.title
                        && <div className="text-red-500 text-sm mt-1">
                            {formState.errors.title?.join(', ')}
                        </div>
                    }
                </div>
                <div className="mb-6">
                    <label htmlFor="content" className="block mb-1 text-sm font-semibold text-gray-700">Content</label>
                    <textarea id="content" name="content" defaultValue={initialData.content} rows={6} className="rounded-lg border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 resize-y text-gray-900 bg-white"></textarea>
                    {
                        formState.errors.content
                        && <div className="text-red-500 text-sm mt-1">
                            {formState.errors.content?.join(', ')}
                        </div>
                    }
                </div>
                <div className="flex gap-3">
                    <button type="submit" className="bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">Save</button>
                    <Link href="/" className="border border-gray-400 text-gray-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">Cancel</Link>
                </div>
            </div>
        </form>
    </>
}