import "./styles.css";

export default function App() {
  const date = new Date();
  const hour = date.getHours();
  const hourEmoji = [
    "😴",
    "😴😴",
    "😴😴😴",
    "😴😴😴😴",
    "😴😴😴😴😴",
    "😴😴😴😴😴😴",
    "😴😴😴😴😴😴😴",
    "🥐",
    "🤤🥪",
    "🤤🤤🥪",
    "🤤🤤🤤🥪",
    "🤤🤤🤤🤤🥪",
    "🥪",
    "🤤🍫",
    "🤤🤤🍫",
    "🤤🤤🤤🍫",
    "🍫",
    "🤤🥘",
    "🤤🤤🥘",
    "🤤🤤🤤🥘",
    "🥘",
    "🤤🍿",
    "🍿",
    "🥱",
  ][hour];

  const minute = date.getMinutes();
  const minuteEmoji = ["👆", "👉", "👇", "👈"][Math.floor(minute / 15)];
  return (
    <div className="App">
      {hourEmoji}
      {minuteEmoji}
    </div>
  );
}
