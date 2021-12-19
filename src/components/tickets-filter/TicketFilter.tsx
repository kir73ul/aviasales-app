import { Select } from 'antd'
import styles from './TicketFilter.module.scss'

const { Option } = Select

export const TicketsFilter = () => {
	return (
		<div className={styles.wrap}>
			<Select style={{ width: 206.4 }} placeholder='Фильтровать билеты по'>
				<Option value='price'>Увеличению цены</Option>
				<Option value='price'>Уменьшению цены</Option>
				<Option value='price'>Дате вылета</Option>
				<Option value='price'>Авиакомпании</Option>
			</Select>
		</div>
	)
}
