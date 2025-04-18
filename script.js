document.addEventListener("DOMContentLoaded", () => {
    const feed = document.getElementById("feed");
    const topUsers = document.getElementById("top-users");
    const trending = document.getElementById("trending");
  
    // Mock data
    const posts = [
      { id: 1, user: "Alice", content: "Post about cyber security", comments: 10 },
      { id: 2, user: "Bob", content: "Hello from the dark web!", comments: 22 },
      { id: 3, user: "Charlie", content: "Today's threat report", comments: 5 },
      { id: 4, user: "Alice", content: "Phishing attack trends", comments: 15 },
      { id: 5, user: "Bob", content: "Zero-day spotted", comments: 22 },
    ];
  
    const userCommentsMap = {};
  
    posts.forEach(post => {
      // Feed Page
      if (feed) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<strong>${post.user}</strong><p>${post.content}</p><small>${post.comments} comments</small>`;
        feed.appendChild(card);
      }
  
      // Count comments per user for Top Users
      userCommentsMap[post.user] = (userCommentsMap[post.user] || 0) + post.comments;
    });
  
    // Top Users Page
    if (topUsers) {
      const sortedUsers = Object.entries(userCommentsMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
  
      sortedUsers.forEach(([user, comments]) => {
        const li = document.createElement("li");
        li.textContent = `${user} - ${comments} comments`;
        topUsers.appendChild(li);
      });
    }
  
    // Trending Posts Page
    if (trending) {
      const maxComments = Math.max(...posts.map(p => p.comments));
      const trendingPosts = posts.filter(p => p.comments === maxComments);
  
      trendingPosts.forEach(post => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<strong>${post.user}</strong><p>${post.content}</p><small>${post.comments} comments</small>`;
        trending.appendChild(card);
      });
    }
  });
  