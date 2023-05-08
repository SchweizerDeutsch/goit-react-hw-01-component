import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th className={css.item}>Type</th>
        <th className={css.item}>Amount</th>
        <th className={css.item}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => {
        return (
          <tr key={item.id}>
            <td className={css.item}>{item.type}</td>
            <td className={css.item}>{item.amount}</td>
            <td className={css.item}>{item.currency}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
