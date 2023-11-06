export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numitems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / numitems) * 100);
  return (
    <footer className="stats">
      <em className="">
        {percentage === 100
          ? `You got everything ready to go ✈`
          : `💼 You have ${numitems} item on your list, and you already packed ${packed} (${percentage}%)`}
      </em>
    </footer>
  );
}
