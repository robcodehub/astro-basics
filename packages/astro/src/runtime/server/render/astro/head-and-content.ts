import type { RenderTemplateResult } from './render-template';

const headAndContentSym = Symbol.for('astro.headAndContent');

export type HeadAndContent = {
	[headAndContentSym]: true;
	head: string | RenderTemplateResult;
	content: RenderTemplateResult;
};

export function isHeadAndContent(obj: unknown): obj is HeadAndContent {
	return typeof obj === 'object' && !!(obj as any)[headAndContentSym];
}

export function createHeadAndContent(
	head: string | RenderTemplateResult,
	content: RenderTemplateResult
): HeadAndContent {
	return {
		[headAndContentSym]: true,
		head,
		content,
	};
}
