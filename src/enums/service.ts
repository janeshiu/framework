export const enum APIStatusCode {
	RT_SUCCESSFUL = 'RT_SUCCESSFUL',
	RT_ERROR_DATA_NOTFOUND = 'RT_ERROR_DATA_NOTFOUND',
	RT_ERROR_SESSION_TIMEOUT = 'RT_ERROR_SESSION_TIMEOUT',
	RT_ERROR_DATAFORMAT = 'RT_ERROR_DATAFORMAT',
	NETWORK_ERROR = 'NETWORK_ERROR',
	REDUNDANT_API_CALL = 'REDUNDANT_API_CALL',
	UNAUTHORIZE_ERROR = 'UNAUTHORIZE_ERROR',
	TIMEOUT_ERROR = 'TIMEOUT_ERROR',
	AUTH_FAILED = 'AUTH_FAILED',
}

export const enum APIBooleanType {
	ENABLED = 'ENABLED',
	DISABLED = 'DISABLED',
}

export const enum VideoEmbedType {
	YOUTUBE = 'YOUTUBE',
	VIMEO = 'VIMEO',
}
export const VideoEmbedPrefix = {
	[VideoEmbedType.YOUTUBE]: 'https://www.youtube.com/embed/',
	[VideoEmbedType.VIMEO]: 'https://player.vimeo.com/video/',
};
