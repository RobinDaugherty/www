// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export type SiteConfig = {
	title: string;
	email: string;
	githubUrl: string | undefined;
	stackoverflowUrl: string | undefined;
	linkedinUrl: string | undefined;
	description: string;
};

const siteConfig: SiteConfig = {
	title: 'Robin Daugherty',
	email: 'robin@robindaugherty.net',
	githubUrl: 'https://github.com/RobinDaugherty',
	stackoverflowUrl: 'https://stackoverflow.com/users/1589422/robin-daugherty',
	linkedinUrl: 'https://www.linkedin.com/in/robindaugherty',
	description: 'Software engineer, systems architect, engineering manager',
};

export default siteConfig;
