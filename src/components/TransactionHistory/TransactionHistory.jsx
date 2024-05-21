import css from './TransactionHistory.module.css'



const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.thead}>
                <tr>
                    <th className={css.head}>Type</th>
                    <th className={css.head}>Amount</th>
                    <th className={css.head}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tableBody}>
                {items.map((item) => {
                    return (
                    <tr key={item.id}>
                        <td className={css.tableData}>{item.type}</td>
                        <td className={css.tableData}>{item.amount}</td>
                        <td className={css.tableData}>{item.currency}</td>
                    </tr>
                    )}
                )}
        
            </tbody>
        </table>
     
    );
};

export default TransactionHistory
