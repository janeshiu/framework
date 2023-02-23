export const enum ErrorMessage {
	SYSTEM_ERROR = '系統錯誤，請聯絡系統管理員！', // 當出現此訊息，表有未處理到的程式邏輯錯誤
	ROUTER_CHANGE_ERROR = '系統異常，請稍後再試，或請聯絡系統管理員！',
	AUTH_EXPIRED = '您的登入已經過期，系統將自動將您導回登入頁，請重新登入',
	MIGRATION_DATA_INVALID = '請確認所有欲遷移的品項資料是否正確',
	MIGRATION_LIST_EMPTY = '請選擇要遷移的品項',
	SYSTEM_ERROR_PRODUCT_NOT_FOUND = '系統錯誤，找不到指定的品項資料，請聯絡網管人員，並請稍後再試',
	NO_RESPONSE = 'NO_RESPONSE',
	API_CANCELED = 'API_CANCELED',
	AUTH_FAILED = '驗證失敗！系統將自動將您導回登入頁，請重新登入',
	ADMIN_AUTH_FAILED = '驗證錯誤，請重新登入再前往管理後台！',
	NETWORK_ERROR = '網路連線異常，請稍後再試',
	TIMEOUT_ERROR = '連線逾時，請稍後再試',
	LOGIN_ERROR = '驗證錯誤！請確認您所輸入的帳號資訊！',
	NO_PAGE = '無此頁面，重新進行導向，請稍等',
	ORDER_DATA_NOT_FOUND = '訂單資料不存在，請確認訂單是否建立成功！',
	SEARCH_DATA_NOT_FOUND = '此搜尋結果沒有資料，請以其他條件搜尋！',
	ORDER_INVALID_QUANTITY = '請輸入正確的數量',
	ORDER_INVALID_PRICE = '請輸入正確的成交金額',
	ORDER_INVALID_DATE = '請輸入正確的起迄日期',
	ORDER_INVALID_DATA = '請輸入正確的訂單資料',
	ORDER_INVLID_SUBSCRIPTION_ID = '請選擇Subscription Id',
	CART_OPERATOR_INVALID = '購物車資料錯誤，請重新登入再操作',
	CART_UPLOAD_DOCUMENT_INVALID = '請上傳審核文件',
	ACCOUNT_DATA_NOT_FOUND = '帳號資料不存在，請確認帳號是否建立成功！',
	PASSWORD_INVALID = '密碼長度至少為8個字元，並包含至少一個大寫字母、小寫字母、數字及特殊符號',
	CONFIRMPASSWORD_INVALID = '兩次密碼不一致',
	EMAIL_INVALID = '請輸入正確格式的電子郵件地址',
	CSP_ID_NOT_VERIFY = '請驗證微軟CSP識別號碼！',
	CSP_ID_NOT_EXIST = '此CSP識別號碼不存在，請確認是否輸入正確',
	MPN_ID_NOT_VERIFY = '請驗證微軟MPN ID會員編號！',
	MPN_ID_NOT_EXIST = '此MPN ID無效，請確認是否輸入正確',
	ERP_ID_NOT_VERIFY = '請驗證展碁客戶代號！',
	ERP_ID_NOT_EXIST = '此展碁客戶代號不存在，請確認輸入是否正確',
	VERIFY_FAILED = '驗證失敗',
	REGISTER_FAILED = '註冊失敗',
	SETTING_PASSWORD_FAILED = '設定密碼失敗',
	FORGOT_PASSWORD_FAILED = '忘記密碼申請失敗',
	GET_SUB_ACCOUNT_LIST_FAILED = '取得子帳號列表失敗',
	GET_ACCOUNT_DATA_FAILED = '取得經銷商帳號資訊錯誤！',
	RESEND_RESET_PASSWORD_REQUEST_FAILED = '重新發送重設密碼申請失敗',
	EDIT_ACCOUNT_CREDENTIAL_ERROR = '編輯帳號驗證資訊錯誤！請確認驗證資料是否輸入正確！',
	NO_DEALER_RELATED_STATUS = '查無合作關係！',
	GET_SUBSCRIPTION_SELECTION_FAILED = '無法取得可選取的subscription ID選項',
	GET_REFUNDABLE_QUANTITY_FAILED = '無法取得可退貨、減購數量',
	GET_REFUND_FEE_FAILED = '無法取得銷退手續費',
	SUBSCRIPTION_DISPATCH_INVALID = '訂閱分配數量與訂單內容數量不符，請確認訂閱分配的數量是否正確',
	LEGACY_CREATE_SUBSCRIPTION_INVALID = '因系統限制本商品無法再新開訂閱，請移至授權品項管理的訂單內進行相關動作',
	LEGACY_CREATE_SUBSCRIPTION_FULLED = '本商品 Subscription Id 數量已滿兩筆',
	SUBSCRIPTION_DISPATCH_QUANTITY_INVALID = '訂閱分配數量與訂單內容數量不符，請確認訂閱分配的數量是否正確',
	SUBSCRIPTION_DISPATCH_MONTH_OR_DATE_INVALID = '訂閱分配的月數或數量與訂單內容不符，請確認訂閱分配的月數或數量是否正確',
	SUBSCRIPTION_DISPATCH_DATA_INVALID = '訂閱分配資料不完整，請確認訂閱分配的資料是否填寫完整',
	GET_SUBSCRIPTION_METADATA_FAILED = '無法取得訂閱狀態與用戶狀態選項！',
	GET_INDEX_DATA_FAILED = '目前暫時無法取得首頁資料，請稍後再試！',
	GET_MSP_SERVICE_FAILED = '目前暫時無法取得服務資料，請稍後再試',
	GET_MSP_SERVICE_DETAIL_FAILED = '目前暫時無法取得此服務資料，請稍後再試',
	GET_LATEST_NEWS_LIST_FAILED = '目前暫時無法取得活動訊息列表資訊，請稍後再試！',
	GET_LATEST_NEWS_DETAIL_FAILED = '目前暫時無法取得活動訊息詳細資訊，請稍後再試！',
	GET_QA_LIST_FAILED = '目前暫時無法取得常見問題列表資訊，請稍後再試！',
	SEND_CONTACT_FORM_FAILED = '目前暫時無法送出聯絡我們表單，請稍後再試！',
	GET_PRODUCT_CATEGORY_LIST_FAILED = '目前暫時無法取得產品分類列表資訊，請稍後再試！',
	GET_PRODUCT_LIST_FAILED = '目前暫時無法取得產品列表資訊，請稍後再試！',
	GET_PRODUCT_SEARCH_RESULT_FAILED = '目前暫時無法取得產品搜尋結果，請稍後再試！',
	GET_PRODUCT_DETAIL_FAILED = '目前暫時無法取得產品詳細資訊，請稍後再試！',
	SEND_INTEREST_FORM_FAILED = '目前暫時無法送出產品興趣表單，請稍後再試！',
	CHANGE_PRODUCT_WITHOUT_UNTEXEDSALEPRICE = '商品價格不齊全，請先至後台管理頁面或相關ERP系統補入資料欄位，再執行產品變更',
	GET_NAVBAR_DROPDOWN_MENU_FAILED = '目前暫時無法取得導覽列的選單資訊，請稍後再試！',
	CHOOSE_TARGET_CUSTOMER_FIRST = '請先至用戶列表選擇要下單的客戶',
}

export const enum SuccessMessage {
	READY_TO_REDIRECT_TO_CART = '請稍候，系統將自動將您轉至購物車頁面⋯⋯',
	DEBIT_APPLY_SUCCESS = '折讓單申請成功！系統將自動下載折讓單⋯⋯',
	ORDER_UPDATE_SUCESS = '已成功更新訂單資訊！',
	ORDER_RESEND_SUCCESS = '已成功重新發送訂單！將自動返回訂單列表頁⋯⋯',
	REFUND_SUCCESS = '上傳退貨申請成功！系統將自動將您導回訂單管理列表⋯⋯',
	DECREASE_SUBSCRIPTION_SUCCESS = '減少訂閱成功！系統將自動重新整理頁面⋯⋯',
	CANCEL_SUBSCRIPTION_SUCCESS = '取消訂閱成功！系統將自動重新整理頁面⋯⋯',
	CACHE_CART_SUCCESS = '暫存購物車成功，將自動切換使用者，並進入產品列表⋯⋯',
	CACHE_CART_SUCCESS_THEN_EJECT = '暫存購物車成功，將會自動將您退出操作此經銷商，並回到經銷商列表⋯⋯',
	AUDIT_SUBMIT_SUCCESS = '已成功送出審核！將自動返回訂單列表頁⋯⋯',
	CORRECT_ORDER_SUCCESS = '上傳補正成功！將自動導回訂單管理列表⋯⋯',
	CHECK_DEALER_RELATIONSHIP_SUCCESS = '經銷商已成功建立合作關係，系統將自動進行資料更新⋯⋯',
	CREATE_SUB_ACCOUNT_SUCCESS = '建立子帳號成功，系統將自動將您導回帳號管理頁面⋯⋯',
	VERIFY_MPN_SUCCESS_WITH_MPA = '驗證成功！已簽署MPA',
	VERIFY_MPN_SUCCESS_WITHOUT_MPA = '驗證成功！未簽署MPA',
	VERIFY_SUCCESS = '驗證成功！',
	REGISTER_SUCCESS = '註冊成功！請至您填寫的聯絡信箱收取密碼設定信件，完成設定密碼後，即可以驗證帳號與密碼登入系統⋯⋯',
	REGISTER_SUCCESS_WITH_CHECK = '註冊申請成功！系統將盡快審核您的註冊申請，若審核通過，系統將發送密碼設定信件至您填寫的聯絡信箱，設定完成後，即可登入此系統⋯⋯',
	SETTING_PASSWORD_SUCCESS = '重設密碼成功！系統將自動將您導回登入頁面，請用新密碼登入系統⋯⋯',
	FORGOT_PASSWORD_SUCCESS = '忘記密碼申請成功！請至您填寫的聯絡信箱收取密碼設定信件，完成設定密碼後，即可登入系統⋯⋯',
	SUSPEND_ACCOUNT_SUCCESS = '帳號停權成功！系統將自動重新整理頁面⋯⋯',
	ACTIVE_ACCOUNT_SUCCESS = '帳號啟用成功！系統將自動重新整理頁面⋯⋯',
	EDIT_DEALER_ACCOUNT_SUCCESS = '編輯帳號成功！系統將自動將您導回前一頁⋯⋯',
	EDIT_SUB_ACCOUNT_SUCCESS = '編輯帳號成功！系統將自動為您重新整理此頁面⋯⋯',
	AUDIT_DEALER_SUCCESS = '審核成功！系統將自動為您重新整理此頁面⋯⋯',
	TRANSFER_CUSTOMER_SUCCESS = '轉移客戶成功！系統將自動為您重新整理此頁面⋯⋯',
	RESEND_RESET_PASSWORD_REQUEST_SUCCESS = '重新發送密碼設定信件成功！至您填寫的聯絡信箱收取密碼設定信件，完成設定密碼後，即可登入系統⋯⋯',
	RESEND_MS_INVITATION_SUCCESS = '重新發送間接經銷商邀請通知成功！',
	SEND_CONTACT_US_SUCCESS = '您的聯絡信件已成功送出！將近快安排專人與您聯絡，謝謝您的支持！',
	SEND_INTEREST_FORM_SUCCESS = '您的信件已成功送出！將近快安排專人與您聯絡，謝謝您的支持！',
}

export const enum AlertMessage {
	RENEWABLE_SUBSCRIPTION_ALERT = '目前已有用戶的Microsoft 365訂閱品項符合續約資格，若要進行續約，請至授權品項管理列表，選擇要續約的品項進行續約！',
	SUBSCRIPTION_CURRENT_UNAVAILABLE = '目前尚有進行中的訂單，請待該訂單完成後再進行動作',
}

export const enum FormFieldPlaceholder {
	CSP_ACCOUNT = '範例：1234567VM000',
}