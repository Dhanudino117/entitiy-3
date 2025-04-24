// LikeButton.jsx
import { useState } from "react";
export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '999px',
    color: liked ? "white" : "black",
    fontWeight: '600',
    backgroundColor: liked ? 'red' : '#C0C0C0',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <button style={buttonStyle} onClick={() => setLiked(!liked)}>
      {liked ? 'Liked🤍 ' : 'Like ❤️'}
    </button>
  );
}
