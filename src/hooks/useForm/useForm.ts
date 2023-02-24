import { useState } from 'react';
import useFormErr, { InitFormErr } from '../useFormErr/useFormErr';

export interface InitForm {
	[name: string]: string | number | boolean;
}

type FormField<T> = {
	[name in keyof T]: T[keyof T];
};

const useForm = <T extends InitForm>(initialForm: T) => {
	const [formData, setFormData] = useState<FormField<T>>({ ...initialForm });
	const initFormErr: InitFormErr = Object.fromEntries(
		Object.keys(initialForm).map((name) => [name, false])
	);
	const formErrProps = useFormErr(initFormErr);

	const resetFormData = () => {
		setFormData(initialForm);
	};

	return { ...formErrProps, formData, setFormData, resetFormData };
};

export default useForm;
