import {
  FeedComponent,
  FeedInput,
  FeedToolbar,
} from "./activity-feed-component/activity-feed";
import data from "./activity-feed-component/mock-response.json";

export const Home = () => {
  console.log(data);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "purple",
        width: "100%",
        fontSize: 50,
        color: "wheat",
      }}
    >
      <FeedActivity />
    </div>
  );
};

const FeedActivity = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <FeedToolbar />
      <FeedInput />
      {data?.feedData?.map((feed) => {
        return (
          <FeedComponent
            profilePic={feed.profilePic}
            feed={feed.post.title}
            image={feed.post.image}
            isHost={feed.type === "host"}
          />
        );
      })}
    </div>
  );
};
