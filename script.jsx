class User extends React.Component {
  render() {
    let username = this.props.user.name
    let userscreen = this.props.user.screen_name
    return (
        <div>
            {username} @{userscreen}
        </div>
    )
  }
}

class Entity extends React.Component {
  render() {
    let text = this.props.text


    let urls = this.props.urls.map((url,index)=>{
        return <a href={url.expanded_url}>{url.display_url}</a>
    })


    return (
        <div>
            <p>{text}</p>
            <p>{urls}</p>
        </div>
    )
  }
}


class Tweets extends React.Component {
  render() {
    let tweets = this.props.tweets

    let tweet = this.props.tweets.map((tweet,index)=>{
        return (
        <div class="panel-group">
            <div class="panel panel-default">
                <div class="panel-header">
                    <User user={tweet.user} /><p>{tweet.created_at}</p>
                </div>
                <div class="panel-body">
                    <Entity text={tweet.text} urls={tweet.entities.urls} />
                </div>

            </div>
        </div>
            )
    })

    return (
        <div>
            <div>{tweet}</div>
        </div>
    )
  }
}

ReactDOM.render(
  <div class='m-l-10 m-r-10'>
    <Tweets tweets={tweets} />
  </div>,
  document.getElementById('root')
);
