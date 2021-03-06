import React from "react";
import { connect } from "react-redux";

import Footer from "./Footer";
import Header from "./Header";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

@connect((store => {
  return {
    user: store.user.user,
    tweets: store.tweets.tweets,
    userFetched: store.tweets.tweets
  }
}))
export default class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchUser());
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>;
    }

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>;
  }
}
