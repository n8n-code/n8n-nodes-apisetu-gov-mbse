import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovMbse implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Mbse',
		name: 'N8nDevApisetuGovMbse',
		icon: { light: 'file:./apisetu-gov-mbse.svg', dark: 'file:./apisetu-gov-mbse.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'MBSE 2018 Class X/XII marksheets, certificates available in DigiLocker for student retrieval.',
		defaults: { name: 'Apisetu Gov Mbse' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovMbseApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
