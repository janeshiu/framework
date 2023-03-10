import '../src/styles/globals.scss';
import * as nextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import { WithNextRouter } from 'storybook-addon-next-router/dist/decorators';
import LoadingContextProvider from '../src/context/LoadingContext';

Object.defineProperty(nextImage, 'default', {
	configurable: true,
	value: (props) => <img {...props} />,
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	nextRouter: {
		Provider: RouterContext.Provider,
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<LoadingContextProvider>
			<div id='root'>{Story()}</div>
			<div id='modalPortal'></div>
		</LoadingContextProvider>
	),
	WithNextRouter,
];
