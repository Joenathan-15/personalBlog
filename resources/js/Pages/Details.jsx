import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Details({ post, subHeading }) {
    return (
        <AuthenticatedLayout>
            <Head title="Details" />
            <div className="p-2 lg:5 w-full lg:w-1/2 text-white mx-auto">
                <div className="heading text-4xl font-semibold p-5">
                    <h1 className="text-center w-full underline">{post.title}</h1>
                </div>
                <div className="prologue text-lg p-2">
                    <p className="py-3">{post.prologue}</p>
                </div>
                {subHeading.map((heading) => (
                    <div key={heading.id}>
                        <div className="sub-heading text-2xl font-semibold px-3">
                            <h1 className="w-full">{heading.title}</h1>
                        </div>
                        <div className="content text-md px-2">
                            <p className="py-3">{heading.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    )

}
