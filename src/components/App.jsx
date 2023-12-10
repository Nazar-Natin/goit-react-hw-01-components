import userData from './Data/user.json';
import statisticalData from './Data/data.json';
import friendsData from './Data/friends.json';
import transactionsData from './Data/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
    const { avatar, username, tag, location, stats } = userData;

    return (
        <>
            <Profile avatar={avatar} username={username} tag={tag} location={location} stats={stats} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friendsData} />
            <TransactionHistory items={transactionsData} />
        </>
    );
};

export default App;
