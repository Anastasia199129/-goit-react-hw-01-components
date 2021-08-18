import Profile from './components/profile/Profile.jsx';
import user from './components/profile/user.json';
import Statistics from './components/statistics/Statistics.jsx';
import statistic from './components/statistics/statistics.json';
import FriendList from './components/friendList/FriendList.jsx';
import friendList from './components/friendList/friendList.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory.jsx';
import transactions from './components/transactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statistic} title="Upload stats" />
      <FriendList friends={friendList} colors={{ activeStyle: 'active' }} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
