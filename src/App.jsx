// App.jsx

import PostCard from './components/postCard.jsx';

function App() {
  const initialPosts = [
    {
      id: 1,
      profileImage:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      username: 'alice',
      content: 'This is my first post!',
      isLiked: false,
    },
    {
      id: 2,
      profileImage:
        'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg',
      username: 'bob',
      content: 'Loving this social media app.',
      isLiked: true,
    },
    {
      id: 3,
      profileImage:
        'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',
      username: 'charlie',
      content: 'Just another day...',
      isLiked: false,
    },
  ];

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '24px',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Social Feed</h1>
      {initialPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
