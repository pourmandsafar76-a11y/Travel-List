export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={item.packed ? "packed-item" : ""}>
      <div className="item-content" onClick={() => onToggleItem(item.id)}>
        <input type="checkbox" checked={item.packed} readOnly />
        <span className="quantity-badge">{item.quantity}</span>
        <span className={`item-text ${item.packed ? "packed-text" : ""}`}>
          {item.description}
        </span>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDeleteItem(item.id)}
        title="Remove Item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </li>
  );
}
