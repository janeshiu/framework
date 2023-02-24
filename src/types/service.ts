import { APIStatusCode } from '@/enums/service';

export interface BaseResponse {
	data?: any;
	status: APIStatusCode;
	error: boolean;
	message?: string;
	redirect?: boolean;
	destination?: string;
}

export interface ApiError {
	message: string;
}

export class TimeoutError extends Error {
	public code: string = APIStatusCode.TIMEOUT_ERROR;
	public cause?: Error | undefined;
	constructor() {
		super('Timeout');
		this.cause = {
			name: APIStatusCode.TIMEOUT_ERROR,
			message: 'Timeout error',
		};
	}
}

export class AuthFailedError extends Error {
	public code: string = APIStatusCode.AUTH_FAILED;
	public cause?: Error | undefined;
	constructor() {
		super('Auth Failed');
		this.cause = {
			name: APIStatusCode.AUTH_FAILED,
			message: 'Auth failed',
		};
	}
}

export type ApiAuthType = 'dealer' | 'csp';
