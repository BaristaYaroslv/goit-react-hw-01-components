import PropTypes from 'prop-types';
import { Table, TableHead, TableBody} from '../Transactions/TransactionHistory.styled';
import { TransactionItem } from '../Transactions/TransactionItem';

export function TransactionHistory({items}) {
    return (
        <Table >
            <TableHead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </TableHead>
                
            <TableBody>
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
            </TableBody>
            </Table>
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