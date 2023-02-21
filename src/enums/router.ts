export const enum PathName {
	HOMEPAGE = 'HOMEPAGE',
	LOGIN = 'LOGIN',
	REGISTER = 'REGISTER',
	FORGOT_PASSWORD = 'FORGOT_PASSWORD',
	RESET_PASSWORD = 'RESET_PASSWORD',
	// CUSTOMER = 'CUSTOMER',
	// CONTACT = 'CONTACT',
	// DEALER = 'DEALER',
	// ORDERS = 'ORDERS',
	// ITEMS = 'ITEMS',
	// MIGRATION = 'MIGRATION',
	// PRODUCTS = 'PRODUCTS',
	// SHOPPING_CART = 'SHOPPING_CART',
	// ACCOUNT = 'ACCOUNT',
	// NEWS = 'NEWS',
	// ABOUT = 'ABOUT',
	// MSP = 'MSP',
	// QA = 'Q&A',
	// CONTACT_US = 'CONTACT_US',
	// GROUP = 'GROUP',
}

export interface RouteObject {
	text: string;
	url: string;
	prefix?: string;
	isFrontpage: boolean;
}

export type RouterObject = {
	[key in PathName]: RouteObject;
};

export const routes: RouterObject = {
	[PathName.HOMEPAGE]: {
		text: '首頁',
		url: '/',
		isFrontpage: true,
	},
	[PathName.LOGIN]: {
		text: '登入',
		url: '/login',
		isFrontpage: false,
	},
	[PathName.REGISTER]: {
		text: '註冊',
		url: '/register',
		isFrontpage: false,
	},
	[PathName.FORGOT_PASSWORD]: {
		text: '忘記密碼',
		url: '/forgot-password',
		isFrontpage: false,
	},
	[PathName.RESET_PASSWORD]: {
		text: '重設密碼',
		url: '/reset-password',
		isFrontpage: false,
	},
	// [PathName.CUSTOMER]: {
	// 	text: '用戶列表',
	// 	url: '/customer',
	// 	isFrontpage: false,
	// },
	// [PathName.CONTACT]: {
	// 	text: '常用聯絡人',
	// 	url: '/contact',
	// 	isFrontpage: false,
	// },
	// [PathName.DEALER]: {
	// 	text: '經銷商列表',
	// 	url: '/dealer',
	// 	isFrontpage: false,
	// },
	// [PathName.ORDERS]: {
	// 	text: '訂單管理',
	// 	url: `/orders/${CategoryPath.PERPETUAL}`,
	// 	prefix: '/orders',
	// 	isFrontpage: false,
	// },
	// [PathName.ITEMS]: {
	// 	text: '授權品項管理',
	// 	url: `/items/${CategoryPath.PERPETUAL}`,
	// 	prefix: '/items',
	// 	isFrontpage: false,
	// },
	// [PathName.MIGRATION]: {
	// 	text: 'NCE MIGRATION',
	// 	url: '/migration',
	// 	isFrontpage: false,
	// },
	// [PathName.PRODUCTS]: {
	// 	text: '產品分類',
	// 	url: '/products',
	// 	isFrontpage: false,
	// },
	// [PathName.SHOPPING_CART]: {
	// 	text: '購物車',
	// 	url: '/cart',
	// 	isFrontpage: false,
	// },
	// [PathName.ACCOUNT]: {
	// 	text: '帳號管理',
	// 	url: '/account',
	// 	isFrontpage: false,
	// },
	// [PathName.NEWS]: {
	// 	text: '活動訊息',
	// 	url: '/news',
	// 	isFrontpage: true,
	// },
	// [PathName.ABOUT]: {
	// 	text: '展碁簡介',
	// 	url: '/about',
	// 	isFrontpage: true,
	// },
	// [PathName.MSP]: {
	// 	text: 'MSP服務',
	// 	url: '/msp-services',
	// 	isFrontpage: true,
	// },
	// [PathName.QA]: {
	// 	text: '常見問題',
	// 	url: '/q-and-a',
	// 	isFrontpage: true,
	// },
	// [PathName.CONTACT_US]: {
	// 	text: '聯絡我們',
	// 	url: '/contact-us',
	// 	isFrontpage: true,
	// },
	// [PathName.GROUP]: {
	// 	text: '產品群組',
	// 	url: '/groups',
	// 	isFrontpage: false,
	// },
};

export const AUTH_FAIL_REDIRECT = '/login';
