import { useEffect, useMemo, useState } from 'react';

export type InitFormErr = {
	[name: string]: false;
};

type FormErr<T> = {
	[name in keyof T | 'global']: boolean;
};

type FormErrMsg<T> = {
	[name in keyof T | 'global']: string;
};

/** for those input form are uncontrolled(defaultValue) */
const useFormErr = <T extends InitFormErr>(initialErr: T) => {
	const [formErr, setFormErr] = useState<Partial<FormErr<T>>>(initialErr);
	const [formErrorMsg, setFormErrorMsg] = useState<Partial<FormErrMsg<T>>>({});

	const isNoError = (formState?: typeof formErr) => {
		const formForChecked = formState ?? formErr;
		const names = Object.keys(formForChecked);
		let isAllCorrect = true;

		names.forEach((name) => {
			if (formForChecked[name] !== true || !isAllCorrect) return;

			isAllCorrect = false;
		});

		return isAllCorrect;
	};

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
		isNoError,
		formErr,
		setFormErr,
		resetFormErr,

		formErrorMsg,
		setFormErrorMsg,
		resetFormErrorMsg,
	};
};

export default useFormErr;
