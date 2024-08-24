import Fuse from 'fuse.js';
import { useState } from 'react';

const options = {
  keys: ['data.title', 'data.description'],
  minMatchCharLength: 2,
  includeMatches: true,
};

export function Search({ searchList }) {
  const [query, setQuery] = useState('');

  const fuse = new Fuse(searchList, options);

  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(() => value);
  }
  return (
    <section>
      <label htmlFor="search" className="sr-only">
        Search Post
      </label>
      <input
        className="block w-full border p-4  text-sm text-zinc-500 m-2"
        id="search"
        placeholder="Search post"
        type="text"
        value={query}
        onChange={handleOnSearch}
      />

      {query.length > 1 && (
        <p>
          encontrei {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'}
        </p>
      )}

      <ul>
        {posts &&
          posts.map((post) => (
            <li className="py-4">
              <a href={`/blog/${post.slug}`}>{post.data.title}</a>
              <p className="text-sm text-zinc-900">{post.data.description}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
