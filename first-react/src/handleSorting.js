const handleSortion = (sortType, page = '') => {
    let temp = sortType;

    /* 질문한 순서대로 올라오게 하기 */
    if (page === 'users' && temp === 'Name') {
        temp = 'Username'
    } else if (page === 'users' && temp == 'Popular') {
        temp = 'Popular users';
    }

    switch (temp) {
        case 'Newest':
            return (a, b) => new Date(b.created_at) - new Date(a.created_at);
        case 'New':
            return (a, b) => new Date(b.created_at) - new Date(a.created_at);
        case 'New Users':
            return (a, b) => new Date(b.created_at) - new Date(a.created_at);
        case 'Popular':
            return (a, b) => b.posts_count - a.posts_count;
        case 'Name':
            return (a, b) => a.tagname.localeCompare(b.tagname);
        case 'Username':
            return (a, b) => a.username.localeCompare(b.username);
        case 'Popular users':
            return (a, b) => b.views - a.views;
        default:
            break;

    }
};

export default handleSortion;