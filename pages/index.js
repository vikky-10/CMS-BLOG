import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components/index";
const posts = [
  { title: "React Testing", excerpt: "React Testing is done by me vikky" },
  { title: "React with tailwind", excerpt: "React Tailwind" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-400">
      <Head>
        <title>Vikky Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* combined both  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-blue-700">
        {/* maximux span upto 8 */}
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        {/* for this max col span upto 4 */}
        <div className="lg:col-span-4 col-span-1 bg-red-500">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
