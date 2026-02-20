import { UmbTiptapExtensionApiBase } from '@umbraco-cms/backoffice/tiptap';
import type { UmbTiptapExtensionArgs } from '@umbraco-cms/backoffice/tiptap';
import { Node, Mark, mergeAttributes } from '@tiptap/core';

export default class CustomRTEApi extends UmbTiptapExtensionApiBase {
	override getTiptapExtensions() {
		const CustomDiv = Node.create({
            name: 'customDiv',
            group: 'block',
            content: 'block+',
            defining: true,
            addAttributes() {
                return {
                    class: { default: null },
                    id: { default: null },
                    style: { default: null },
                };
            },
            parseHTML() { return [{ tag: 'div' }]; },
            renderHTML({ HTMLAttributes }: any) {
                return ['div', mergeAttributes(HTMLAttributes), 0];
            },
        });

        const CustomH1 = Node.create({
			name: 'customH1',
			group: 'block',
			content: '(text | customSpan | customA | customImg)*',
			defining: true,
			addAttributes() {
				return {
					allAttributes: {
						default: {},
						parseHTML: (element) => {
							const attrs: { [key: string]: string } = {};
							for (const { name, value } of element.attributes) {
								attrs[name] = value;
							}
							return attrs;
						},
						renderHTML: (attributes) => {
							return attributes.allAttributes;
						},
					},
				};
			},
			parseHTML() { return [{ tag: 'h1' }]; },
			renderHTML({ HTMLAttributes }: any) {
				return ['h1', mergeAttributes(HTMLAttributes), 0];
			},
		});

		const CustomSpan = Node.create({
			name: 'customSpan',
			group: 'inline',
			content: '(text | customSpan | customA | customImg)*',
			inline: true,
			addAttributes() {
				return {
					allAttributes: {
						default: {},
						parseHTML: (element) => {
							const attrs: { [key: string]: string } = {};
							for (const { name, value } of element.attributes) {
								attrs[name] = value;
							}
							return attrs;
						},
						renderHTML: (attributes) => {
							return attributes.allAttributes;
						},
					},
				};
			},
			parseHTML() { return [{ tag: 'span', priority: 100 }]; },
			renderHTML({ HTMLAttributes }: any) {
				return ['span', mergeAttributes(HTMLAttributes), 0];
			},
		});

		const CustomA = Node.create({
			name: 'customA',
			group: 'inline',
			content: '(text | customSpan | customA | customImg)*',
			inline: true,
			addAttributes() {
				return {
					allAttributes: {
						default: {},
						parseHTML: (element) => {
							const attrs: { [key: string]: string } = {};
							for (const { name, value } of element.attributes) {
								attrs[name] = value;
							}
							return attrs;
						},
						renderHTML: (attributes) => {
							return attributes.allAttributes;
						},
					},
				};
			},
			parseHTML() { return [{ tag: 'a', priority: 100 }]; },
			renderHTML({ HTMLAttributes }: any) {
				return ['a', mergeAttributes(HTMLAttributes), 0];
			},
		});

		const CustomImg = Node.create({
			name: 'customImg',
			inline: true,
			group: 'inline',
			draggable: true,
			addAttributes() {
				return {
					src: { default: null },
					alt: { default: null },
					title: { default: null },
				};
			},
			parseHTML() { return [{ tag: 'img[src]' }]; },
			renderHTML({ HTMLAttributes }: any) {
				return ['img', mergeAttributes(HTMLAttributes)];
			},
		});

        return [CustomDiv, CustomH1, CustomSpan, CustomA, CustomImg];
    }
}