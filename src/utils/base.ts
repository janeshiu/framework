/**
 * 將英文字串第一個字轉換為大寫
 * @param string 英文字串
 */
export function upperCaseFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
