// NOTE: do NOT ever put here any secure settings! (e.g. Secret Keys)
// We are using dotenv (.env) for consistency with other Platform projects
// This is Angular app and all settings will be loaded into the client browser!

import { cleanEnv, num, str, bool } from 'envalid';
import { v4 as uuid } from 'uuid';

export type Env = Readonly<{
	production: boolean;

	// Graphql endpoints for apollo services
	GQL_ENDPOINT: string;
	GQL_SUBSCRIPTIONS_ENDPOINT: string;
	SERVICES_ENDPOINT: string;
	HTTPS_SERVICES_ENDPOINT: string;

	APP_VERSION: string;

	GOOGLE_MAPS_API_KEY: string;
	GOOGLE_ANALYTICS_API_KEY: string;
	FAKE_UUID: string;
	// Not secret MixPanel Token
	MIXPANEL_API_KEY: string;

	DEFAULT_CUSTOMER_LOGO: string;
	LOGIN_LOGO: string;
	NO_INTERNET_LOGO: string;

	COMPANY_NAME: string;
	APP_NAME: string;

	DEFAULT_LOGIN_USERNAME: string;
	DEFAULT_LOGIN_PASSWORD: string;

	DEFAULT_LATITUDE: number;
	DEFAULT_LONGITUDE: number;

	// For maintenance micro service
	SETTINGS_APP_TYPE?: string;
	SETTINGS_MAINTENANCE_API_URL?: string;
}>;

export const env: Env = cleanEnv(
	process.env,
	{
		production: bool({ default: false }),

		APP_VERSION: str({ default: '0.2.0' }),

		DEFAULT_CUSTOMER_LOGO: str({
			default:
				'http://res.cloudinary.com/evereq/image/upload/v1536843011/everbie-products-images/btzn3o8pimhercepno2d.png'
		}),

		LOGIN_LOGO: str({ default: 'assets/imgs/ever-logo.svg' }),
		NO_INTERNET_LOGO: str({ default: 'assets/imgs/ever-logo.svg' }),

		COMPANY_NAME: str({ default: 'Packmam Co. LTD' }),
		APP_NAME: str({ default: 'Packmam® Carrier' }),

		DEFAULT_LOGIN_USERNAME: str({ default: 'Packmam' }),
		DEFAULT_LOGIN_PASSWORD: str({ default: 'changeme' }),

		GOOGLE_MAPS_API_KEY: str({ default: '' }),

		GOOGLE_ANALYTICS_API_KEY: str({ default: '' }),
		FAKE_UUID: str({ default: uuid() }),

		// Not secret MixPanel Token
		MIXPANEL_API_KEY: str({ default: '' }),

		DEFAULT_LATITUDE: num({ default: 42.6459136 }),
		DEFAULT_LONGITUDE: num({ default: 23.3932736 }),

		// Graphql endpoints for apollo services
		GQL_ENDPOINT: str({ default: 'http://localhost:5555/graphql' }),
		GQL_SUBSCRIPTIONS_ENDPOINT: str({
			default: 'ws://localhost:5050/subscriptions'
		}),
		SERVICES_ENDPOINT: str({ default: 'http://localhost:5500' }),
		HTTPS_SERVICES_ENDPOINT: str({ default: 'https://localhost:5501' }),

		// For maintenance micro service. Ever maintanance API URL: https://maintenance.ever.co/status
		SETTINGS_APP_TYPE: str({ default: 'carrier-mobile' }),
		SETTINGS_MAINTENANCE_API_URL: str({
			default: ''
		})
	},
	{ strict: true, dotEnvPath: __dirname + '/../.env' }
);
