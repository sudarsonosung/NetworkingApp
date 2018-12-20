import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import GetPage from "./src/GetPage";
import PostPage from "./src/PostPage";
import PutPage from "./src/PutPage";
import DeletePage from "./src/DeletePage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTobeRendered: "main"
    };
  }

  openOtherPage = page => {
    if (page && page !== "") {
      this.setState({ pageTobeRendered: page });
    }
  };

  render() {
    const { pageTobeRendered } = this.state;

    if (pageTobeRendered === "get") {
      return <GetPage backToMainPage={this.openOtherPage} />;
    } else if (pageTobeRendered === "post") {
      return <PostPage backToMainPage={this.openOtherPage} />;
    } else if (pageTobeRendered === "put") {
      return <PutPage backToMainPage={this.openOtherPage} />;
    } else if (pageTobeRendered === "delete") {
      return <DeletePage backToMainPage={this.openOtherPage} />;
    }

    return (
      <View>
        <Text>NetworkingApp Testing 4</Text>
        <TouchableOpacity onPress={() => this.openOtherPage("get")}>
          <Text style={Styles.txtButton}>Open Get Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.openOtherPage("post")}>
          <Text style={Styles.txtButton}>Open Post Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.openOtherPage("put")}>
          <Text style={Styles.txtButton}>Open Put Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.openOtherPage("delete")}>
          <Text style={Styles.txtButton}>Open Delete Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  txtButton: { margin: 10, backgroundColor: "yellow" }
});

export default App;
