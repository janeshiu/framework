import { Colors } from './style';

enum OrderStatusColor {
	PRIMARY = Colors.PRIMARY,
	SUCCESS = Colors.SUCCESS,
	ERROR = Colors.ERROR,
	WARNING = Colors.WARNING,
	INFO = Colors.INFO,
	DARK = Colors.SECONDARY,
}

export enum OrderStatus {
	ORDER_UNDER_AUDITING = '訂單審核中',
	ORDER_AUDITING = '訂單待審核',
	ORDER_CONFIRMING = '訂單待確認',
	REFUND_UNDER_AUDITING = '退貨審核中',
	REFUND_AUDITING = '退貨待審核',
	REFUND_CONFIRMING = '退貨待確認',
	ORDER_CREATED = '已成立',
	ORDER_PROCESSING = '審核已轉單',
	ORDER_PENDING = '已成立未啟用', // For M365 only
	ORDER_ERP_PROCESSING = 'ERP簽核中',
	ORDER_FAILED = '下單異常',
	ORDER_CAN_REFUND = '已成立可退貨',
	ORDER_COMPLETED = '已成立 ',
	ORDER_CANNOT_REFUND = '已成立不可退貨',
	ORDER_CANCELD = '已取消',
	ORDER_FOR_CORRECTION = '訂單待補正',
	REFUND_FOR_CORRECTION = '退貨待補正',
	REFUNDING = '退貨中',
	REFUND_DEBIT_NOTE = '申請退貨折讓',
	REFUND_PROCESSING = '提交退貨',
	REFUND_COMPLETED = '已退貨 ',
	REFUND_FAILED = '退貨失敗',
	REFUND_ERROR = '退貨異常',
}

export enum OrderStatusKey {
	NONE = 'NONE',
	IN_CART = 'IN_CART',
	ORDER_UNDER_AUDITING = 'ORDER_UNDER_AUDITING',
	ORDER_AUDITING = 'ORDER_AUDITING',
	ORDER_CONFIRMING = 'ORDER_CONFIRMING',
	REFUND_UNDER_AUDITING = 'REFUND_UNDER_AUDITING',
	REFUND_AUDITING = 'REFUND_AUDITING',
	REFUND_CONFIRMING = 'REFUND_CONFIRMING',
	ORDER_CREATED = 'ORDER_CREATED',
	ORDER_PROCESSING = 'ORDER_PROCESSING',
	ORDER_PENDING = 'ORDER_PENDING',
	ORDER_ERP_PROCESSING = 'ORDER_ERP_PROCESSING',
	ORDER_FAILED = 'ORDER_FAILED',
	ORDER_CAN_REFUND = 'ORDER_CAN_REFUND',
	ORDER_COMPLETED = 'ORDER_COMPLETED',
	ORDER_CANNOT_REFUND = 'ORDER_CANNOT_REFUND',
	ORDER_CANCELD = 'ORDER_CANCELD',
	ORDER_FOR_CORRECTION = 'ORDER_FOR_CORRECTION',
	REFUND_FOR_CORRECTION = 'REFUND_FOR_CORRECTION',
	REFUNDING = 'REFUNDING',
	REFUND_DEBIT_NOTE = 'REFUND_DEBIT_NOTE',
	REFUND_PROCESSING = 'REFUND_PROCESSING',
	REFUND_COMPLETED = 'REFUND_COMPLETED',
	REFUND_FAILED = 'REFUND_FAILED',
	REFUND_ERROR = 'REFUND_ERROR',
}

export function getOrderStatusColor(status: OrderStatusKey) {
	switch (status) {
		case OrderStatusKey.ORDER_UNDER_AUDITING: // 訂單審核中
		case OrderStatusKey.ORDER_AUDITING: // 訂單待審核
		case OrderStatusKey.ORDER_CONFIRMING: // 訂單待確認
		case OrderStatusKey.ORDER_PENDING: // 已成立未啟用 For M365 only ???
		case OrderStatusKey.REFUND_UNDER_AUDITING: // 退貨審核中
		case OrderStatusKey.REFUND_AUDITING: // 退貨待審核
		case OrderStatusKey.REFUND_CONFIRMING: // 退貨待確認
			return OrderStatusColor.INFO;

		case OrderStatusKey.ORDER_CREATED: // 已成立
		case OrderStatusKey.ORDER_PROCESSING: // 審核已轉單
		case OrderStatusKey.ORDER_ERP_PROCESSING: // ERP簽核中 ???
		case OrderStatusKey.ORDER_CAN_REFUND: // 已成立可退貨
		case OrderStatusKey.ORDER_COMPLETED: // 已成立
		case OrderStatusKey.ORDER_CANNOT_REFUND: // 已成立不可退貨
			return OrderStatusColor.SUCCESS;

		case OrderStatusKey.ORDER_FAILED: // 下單異常
		case OrderStatusKey.ORDER_CANCELD: // 已取消
		case OrderStatusKey.REFUND_COMPLETED: // 已退貨
		case OrderStatusKey.REFUND_FAILED: // 退貨失敗
		case OrderStatusKey.REFUND_ERROR: // 退貨異常 ???
			return OrderStatusColor.ERROR;

		case OrderStatusKey.ORDER_FOR_CORRECTION: // 訂單待補正
		case OrderStatusKey.REFUND_FOR_CORRECTION: // 退貨待補正
			return OrderStatusColor.WARNING;

		case OrderStatusKey.REFUND_DEBIT_NOTE: // 申請退貨折讓
		case OrderStatusKey.REFUND_PROCESSING: // 提交退貨
		case OrderStatusKey.REFUNDING: // 退貨中
			return OrderStatusColor.PRIMARY;

		default:
			return OrderStatusColor.DARK;
	}
}

export function getColorFromOrderStatus(status: OrderStatusKey) {
	const orderStatusColor = getOrderStatusColor(status);
	switch (orderStatusColor) {
		case OrderStatusColor.PRIMARY:
			return Colors.PRIMARY;

		case OrderStatusColor.SUCCESS:
			return Colors.SUCCESS;

		case OrderStatusColor.ERROR:
			return Colors.ERROR;

		case OrderStatusColor.WARNING:
			return Colors.WARNING;

		case OrderStatusColor.INFO:
			return Colors.INFO;

		case OrderStatusColor.DARK:
			return Colors.SECONDARY;
	}
}
