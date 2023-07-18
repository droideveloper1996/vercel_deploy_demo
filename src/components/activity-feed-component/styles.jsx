import Stylesheet from "reactjs-stylesheet";

export const styles = Stylesheet.create({
  container: {
    height: "auto",
    width: 420,
    padding: 20,
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
    marginTop: 15,
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
  rowTxt: {
    height: 150,
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  textArea: {
    fontFamily: "Lato",
    width: 320,
    padding: 10,
    fontWeight: 400,
    height: "auto",
    border: "0px",
  },
});
