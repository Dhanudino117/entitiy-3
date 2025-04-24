// PostCard.jsx
import LikeButton from '../components/likebutton';

export default function PostCard({ post }) {
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  };

  const profileImgStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const usernameStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0',
  };

  const contentStyle = {
    color: '#555',
    margin: '8px 0',
  };

  return (
    <div style={cardStyle}>
      <img src={post.profileImage} alt="profile" style={profileImgStyle} />
      <div>
        <p style={usernameStyle}>{post.username}</p>
        <p style={contentStyle}>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
}