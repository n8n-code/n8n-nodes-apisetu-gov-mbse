import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovMbseApi implements ICredentialType {
        name = 'N8nDevApisetuGovMbseApi';

        displayName = 'Apisetu Gov Mbse API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovMbse/apisetu-gov-mbse.svg', dark: 'file:../nodes/ApisetuGovMbse/apisetu-gov-mbse.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/mbse/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/mbse/v3',
                        description: 'The base URL of your Apisetu Gov Mbse API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
