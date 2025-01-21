import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Blog({ posts }) {
    return (
        <AuthenticatedLayout>
            <Head title="Explore" />
            <div className="flex justify-center">
                <div className="text-white p-5 flex gap-5 flex-wrap w-full justify-center">
                    {posts ? <div>
                        No Post Currently Available
                    </div> : posts.map((post) => (
                        <div key={post.id} className="card flex justify-center flex-col p-5 w-full lg:w-1/3 rounded-xl" style={{ background: "#161616" }}>
                            <h1 className="text-4xl pb-5 border-b-2" style={{ borderColor: "#00A368" }}>{post.title}</h1>
                            <p className="py-3">{post.prologue}</p>
                            <div className="mt-5 justify-end flex">
                                <Link href={"/blog/" + post.slug} className="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest" style={{ background: "#00A368" }}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
