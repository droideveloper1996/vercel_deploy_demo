import Stylesheet from "reactjs-stylesheet";
import { ReactionBarSelector } from "@charkour/react-reactions";
import { useState } from "react";
import Switch from "react-ios-switch";
export const ActivityFeed = () => {};
export const FeedToolbar = () => {
  return (
    <div style={styles.FeedToolbar}>
      <div style={styles.toolbarTitle}>Activity Feed</div>
      <div style={styles.row}>
        <div style={styles.addMedia}>
          Add Media
          <img
            src={require("../../assets/picture.png")}
            style={{ marginLeft: 10 }}
            alt=""
            srcset=""
          />
        </div>
        <div style={styles.addMedia}>
          <div>All Content</div>
          <Switch
            checked={false}
            style={{ marginLeft: 10 }}
            onChange={(checked) => {}}
            handleColor="white"
            name={undefined}
            offColor="white"
            onColor="rgb(76, 217, 100)"
          />
        </div>
      </div>
    </div>
  );
};

export const FeedComponent = ({ inputMode = false, profilePic }) => {
  const [showSmilie, setShowSmilie] = useState(false);
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <img src={profilePic} alt="" style={styles.profilePic} />
        {inputMode == false ? (
          <div style={styles.column}>
            <p style={styles.feedMessage}>
              <span style={styles.feedTitle}>
                New message from HOST Bonnie Green:{" "}
              </span>
              Welcome to the Spring Berries & Bubbles Event. I am so excited to
              talk and see all of the intelligent and wonderful women that
              attend.
            </p>
            <div style={styles.spaceBetween}>
              <p style={styles.feedTime}>44 minutes ago</p>
              <img
                src={require("../../assets/dots.png")}
                width={25}
                height={25}
                alt=""
              />
            </div>
            <div style={styles.row}>
              <img
                src={require("../../assets/face.png")}
                width={30}
                alt=""
                height={30}
                onClick={() => setShowSmilie(!showSmilie)}
              />
              {showSmilie && (
                <ReactionBarSelector
                  iconSize={25}
                  style={{
                    background: "transparent",
                    marginLeft: 30,
                    marginTop: -20,
                    position: "absolute",
                  }}
                />
              )}
            </div>
          </div>
        ) : (
          <div style={styles.textArea}>
            <textarea
              name=""
              id=""
              rows="10"
              width={"100%"}
              style={styles.textArea}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const FeedInput = () => {
  return (
    <div>
      <FeedComponent inputMode={true} profilePic={"profilePic"} />
    </div>
  );
};

const styles = Stylesheet.create({
  container: {
    height: "auto",
    width: 420,
    padding: 20,
    marginTop: 10,
    background: "white",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  profilePic: {
    width: 50,
    marginRight: 15,
    marginTop: 15,
    height: 50,
    background: "red",
    borderRadius: 35,
  },
  feedTitle: {
    fontSize: 15,
    color: "black",
  },
  feedMessage: {
    fontSize: 15,
    color: "grey",
  },
  feedSubTitle: {
    fontWeight: 700,
    fontSize: 15,
  },
  feedTime: {
    fontSize: 15,
    color: "blue",
    margin: 0,
    padding: 0,
    fontWeight: 700,
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  FeedToolbar: {
    height: 30,
    backgroundColor: "rgba(0, 0, 0, 0.9999)",
    opacity: 0.7,
    padding: 15,
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
  },
  toolbarTitle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 20,
  },
  addMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    color: "#fff",
    fontSize: 14,
    marginRight: 25,
  },

  textArea: {
    width: "100%",
    height: "auto",
    border: "0px",
  },
});
