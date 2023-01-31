import {
	getColorFromOrderStatus,
	OrderStatus,
	OrderStatusKey,
} from '@/enums/order';
import React from 'react';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import Badge from '../../base/Badge/Badge';

interface BadgeOrderStatusProps {
	className?: string;
	orderStatusKey: Exclude<
		OrderStatusKey,
		OrderStatusKey.NONE | OrderStatusKey.IN_CART
	>;
}

function getBadgeIcon(orderStatusKey: OrderStatusKey) {
	switch (orderStatusKey) {
		case OrderStatusKey.ORDER_COMPLETED: // 已成立
			return <BsCheckCircleFill />;
		case OrderStatusKey.REFUND_COMPLETED: // 已退貨
			return <BsXCircleFill />;
		default:
			return;
	}
}

const BadgeOrderStatus: React.FC<BadgeOrderStatusProps> = ({
	className,
	orderStatusKey,
}) => {
	const icon = getBadgeIcon(orderStatusKey);
	const content = OrderStatus[OrderStatusKey[orderStatusKey]];
	return (
		<Badge
			className={className}
			content={content}
			pattern='outline'
			size='normal'
			iconPosition='right'
			shape='circle'
			color={getColorFromOrderStatus(orderStatusKey)}
			icon={icon}
		/>
	);
};

export default BadgeOrderStatus;
