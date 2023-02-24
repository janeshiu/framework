import { useEffect, useState } from 'react';

export type InitFormErr = {
	[name: string]: false;
};

type FormErr<T> = {
	[name in keyof T]: boolean;
};

type FormErrMsg<T> = {
	[name in keyof T]: string;
};

/** for those input form are uncontrolled(defaultValue) */
const useFormErr = <T extends InitFormErr>(initialErr: T) => {
	const [formErr, setFormErr] = useState<Partial<FormErr<T>>>(initialErr);
	const [formErrorMsg, setFormErrorMsg] = useState<Partial<FormErrMsg<T>>>({});

	const resetFormErr = () => {
		setFormErr(initialErr);
	};

	const resetFormErrorMsg = () => {
		setFormErrorMsg({});
	};

	useEffect(() => {
		resetFormErr();
	}, []);

	return {
		formErr,
		setFormErr,
		resetFormErr,

		formErrorMsg,
		setFormErrorMsg,
		resetFormErrorMsg,
	};
};

export default useFormErr;
