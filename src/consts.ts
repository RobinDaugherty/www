// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export type SiteConfig = {
	title: string;
	email: string;
	description: string;
};

const siteConfig: SiteConfig = {
	title: 'Robin Daugherty',
	email: 'robin@robindaugherty.net',
	description: 'Software engineer, systems architect, engineering manager',
};

export default siteConfig;
