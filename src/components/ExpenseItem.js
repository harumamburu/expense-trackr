import './ExpenseItem.css'

export default function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>April 4th 2022</div>
      <div className='expense-item__description'>
        <h2>MacBook</h2>
        <div className='expense-item__price'>$100500</div>
      </div>
    </div>
  );
}
