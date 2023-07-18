import { ReactionBarSelector } from "@charkour/react-reactions";
import { useState } from "react";
import Switch from "react-ios-switch";
import { styles } from "./styles";
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

export const FeedComponent = ({
  inputMode = false,
  profilePic,
  isHost,
  feed,
  image,
  setCancel,
  setOkay,
  inputListner,
}) => {
  const [showSmilie, setShowSmilie] = useState(false);
  return (
    <div style={inputMode === false ? styles.container : styles.rowTxt}>
      <div style={styles.row}>
        <img src={profilePic} alt="" style={styles.profilePic} />
        {inputMode === false ? (
          <div style={styles.column}>
            <p style={styles.feedMessage}>
              <span style={styles.feedTitle}>
                New message from {isHost === true && "HOST"} Bonnie Green:
              </span>
              {feed}
            </p>
            {image?.map?.((img) => {
              return (
                <img
                  src={require(`../../assets/party1.png`)}
                  width={"100%"}
                  height={200}
                  alt=""
                />
              );
            })}
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
              onChange={inputListner}
              id=""
              rows="5"
              width={"100%"}
              placeholder="Type here"
              style={styles.textArea}
            />
            <div style={styles.row}>
              <img
                onClick={setOkay}
                src={require("../../assets/accept.png")}
                alt=""
                style={{ marginRight: 20 }}
                width={30}
                height={30}
              />
              <img
                src={require("../../assets/remove.png")}
                alt=""
                onClick={setCancel}
                width={30}
                height={30}
              />
            </div>
            '
          </div>
        )}
      </div>
    </div>
  );
};

export const FeedInput = () => {
  return (
    <div>
      <FeedComponent
        inputMode={true}
        profilePic={"https://randomuser.me/api/portraits/women/75.jpg"}
      />
    </div>
  );
};
