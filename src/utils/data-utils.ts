import { getCollection } from 'astro:content';
import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export type Tag = {
	name: string;
	slug: string;
};

export async function getAllPosts() {
	const posts = await getCollection('post');
	return posts.sort(sortItemsByDateDesc);
}

export function sortItemsByDateDesc(
	itemA: CollectionEntry<'post'>,
	itemB: CollectionEntry<'post'>,
) {
	return (
		new Date(itemB.data.publishedDate).getTime() -
		new Date(itemA.data.publishedDate).getTime()
	);
}

export function getAllTags(posts: CollectionEntry<'post'>[]) {
	const tags: string[] = [
		...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean)),
	];
	return tags
		.map((tag) => {
			return {
				name: tag,
				slug: slugify(tag),
			} as Tag;
		})
		.filter((obj, pos, arr) => {
			return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
		});
}

export function getPostsByTag(
	posts: CollectionEntry<'post'>[],
	tagSlug: string,
) {
	const filteredPosts: CollectionEntry<'post'>[] = posts.filter((post) =>
		(post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug),
	);
	return filteredPosts;
}
