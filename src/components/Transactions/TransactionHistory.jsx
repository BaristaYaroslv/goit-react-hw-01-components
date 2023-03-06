import PropTypes from 'prop-types';
import css from '../Transactions/TransactionHistory.module.css';
import { TransactionItem } from '../Transactions/TransactionItem';

export function TransactionHistory({items}) {
    return (
        <table className={css.history}>
            <thead className={css.history__head}>
                <tr className={css.history__items}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
                
            <tbody className={css.history__body}>
                {items.map(({
                        id,
                        type,
                        amount,
                        currency,
                    }) => {
                        return (
                            <TransactionItem
                                key = {id}
                                type = {type}
                                amount = {amount}
                                currency = {currency}
                            />
                        );
                    })}
            </tbody>
            </table>
    );

};
        


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
            ]),
        }),
    ),
};