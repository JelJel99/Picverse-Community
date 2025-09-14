document.addEventListener('DOMContentLoaded', () => {
    // Data untuk forum discussions
    const discussionListData = [
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "Laila",
            timeAgo: "1 minute ago",
            title: "Where do you put watermark on your art?",
            commentsCount: 500,
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "Angela",
            timeAgo: "2 weeks ago",
            title: "Favorite art style",
            commentsCount: 200,
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "Cheryl",
            timeAgo: "2 weeks ago",
            title: "Why I like ancient greek art",
            commentsCount: 200,
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "Nabilah",
            timeAgo: "2 weeks ago",
            title: "Show your most recent art!! (no AI)",
            commentsCount: 200,
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "Vivin",
            timeAgo: "2 weeks ago",
            title: "How can i improve my art?",
            commentsCount: 200,
        },
    ];
    const discussionListContainer = document.querySelector('.discussion-list');

    function renderDiscussionCards(data) {
        discussionListContainer.innerHTML = '';
        data.forEach(discussion => {
            const discussionCard = document.createElement('div');
            discussionCard.classList.add('discussion-card');
            discussionCard.innerHTML = `
                <div class="card-header">
                    <div class="user-info">
                        <img src="${discussion.avatar}" alt="${discussion.username} Avatar" class="avatar">
                        <span>${discussion.username}</span>
                    </div>
                    <span class="time-ago">${discussion.timeAgo}</span>
                </div>
                <h3>${discussion.title}</h3>
                <div class="card-footer">
                    <img src="../Asset/Picture/speech-bubble.png" alt="Comments Icon" class="icon comments-icon">
                    <span>${discussion.commentsCount}</span>
                </div>
            `;
            discussionListContainer.appendChild(discussionCard);
        });
    }

    // Data untuk recent activities
    const activityListData = [
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "Abc123",
            time: "1:12 AM",
            message: "has created a forum",
            type: "forum_created",
            followButton: false
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "BananaTurtle",
            time: "yesterday",
            message: "has commented on your post",
            type: "commented_post",
            postTitle: "'Mystic Forest'",
            followButton: false
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "ilovefish",
            time: "2 days ago",
            message: "has started following you",
            type: "followed",
            followButton: true
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "friedchicken",
            time: "2 days ago",
            message: "has created a forum",
            type: "forum_created",
            followButton: false
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            username: "ain!",
            time: "2 days ago",
            message: "has started following you",
            type: "followed",
            followButton: true
        }
    ];
    const activityListContainer = document.querySelector('.activity-list');

    function renderActivityItems(data) {
        activityListContainer.innerHTML = '';
        data.forEach(activity => {
            const activityItem = document.createElement('div');
            activityItem.classList.add('activity-item');

            const followButtonHtml = activity.followButton 
                ? `<button class="follow-btn">+ Follow</button>` 
                : '';

            let displayMessage = activity.message;
            if (activity.type === "commented_post" && activity.postTitle) {
                displayMessage += ` <span class="post-link">${activity.postTitle}</span>`;
            }

            activityItem.innerHTML = `
                <img src="${activity.avatar}" alt="${activity.username} Avatar" class="avatar">
                <div class="activity-content">
                    <div class="header-line">
                        <span class="username">${activity.username}</span>
                        <span class="time">${activity.time}</span>
                        ${followButtonHtml}
                    </div>
                    <p>${displayMessage}</p>
                </div>
            `;
            
            if (activity.followButton) {
                const followBtn = activityItem.querySelector('.follow-btn');
                if (followBtn) {
                    followBtn.addEventListener('click', (event) => {
                        event.stopPropagation();
                        if (followBtn.textContent === '+ Follow') {
                            followBtn.textContent = 'Following';
                            followBtn.style.backgroundColor = '#6c757d';
                        } else {
                            followBtn.textContent = '+ Follow';
                            followBtn.style.backgroundColor = '#555';
                        }
                        const usernameSpan = followBtn.closest('.activity-content').querySelector('.username');
                        const username = usernameSpan ? usernameSpan.textContent : 'Unknown User';
                        console.log(`User ${username} is now ${followBtn.textContent.toLowerCase()}`);
                    });
                }
            }
            activityListContainer.appendChild(activityItem);
        });
    }

    // Data untuk active users
    const activeUsersData = [
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "Lady",
            status: "Love Live Art"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "Abc123",
            status: "Just do it"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "BananaTurtle",
            status: "Think Different"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "friedchicken",
            status: "Born from imagination"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "pizzaisbae",
            status: "Where art speak louder than word"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "Angela",
            status: "Born from imagination"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "Cheryl",
            status: "Stories untold, now unfolding"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "Maestro123",
            status: "From mind to mastrepiece"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "Nabilah",
            status: "Art that whispers emotions"
        },
        {
            avatar: "../Asset/Picture/housekeeper.png",
            name: "Vivin",
            status: "Beyond the canvas, into the soul"
        }
    ];
    const userListContainer = document.querySelector('.user-list');

    function renderActiveUsers(data) {
        userListContainer.innerHTML = '';
        data.forEach(user => {
            const userItem = document.createElement('div');
            userItem.classList.add('user-item');
            userItem.innerHTML = `
                <img src="${user.avatar}" alt="${user.name} Avatar" class="avatar">
                <div class="user-details">
                    <span class="name">${user.name}</span>
                    <span class="status">${user.status}</span>
                </div>
            `;
            userListContainer.appendChild(userItem);
        });
    }

    renderDiscussionCards(discussionListData);
    renderActivityItems(activityListData);
    renderActiveUsers(activeUsersData);
});